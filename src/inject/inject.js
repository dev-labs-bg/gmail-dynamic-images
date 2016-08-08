chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// select the target node
			var target = $("body").get(0);
			 
			// create an observer instance
			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation) {
					updateImages();
			  	});    
			});
			 
			// configuration of the observer:
			var config = { attributes: true, childList: true  };
			 
			// pass in the target node, as well as the observer options
			observer.observe(target, config);

		}

		/**
		 * Update all cached images,
		 * with the real ones
		 */
		function updateImages() {
			$.each($('img'), function(key, value) {
				// Cached image src
				var googleSrc = $(value).attr('src');
				// Index of the real image src, if exists
				var realURLIndex = googleSrc.indexOf('#http');
				// Filter image by a domain
				// TODO - Make Option page, for domain filtering
				var realURLDomainIndex = googleSrc.indexOf('updates.devlabs.bg');

				// If the image is cached for the selected domain
				if (realURLIndex !== -1 && realURLDomainIndex !== -1) {
					var timestamp = new Date().getTime() / 1000;
					var realURL =  googleSrc.substr(realURLIndex + 1) + '?timestamp=' + timestamp;

					// Use no cached image URL
					$(value).attr("src", realURL);
				}
			});
		}
	}, 10);
});