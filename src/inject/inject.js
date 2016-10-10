/**
 * Attach event handlers,
 * when the images to be updated
 */
/**
 * tr.zA - Emails list items
 * [role="listitem"] - Email replies
 */
$('body').on('click', 'tr.zA, [role="listitem"]', updateImages);
$(document).ready(updateImages);

/**
 * Get extension options
 *
 * @param {Function} successCallback
 */
function getOptions(successCallback) {
	chrome.storage.sync.get({
		domains: []
	}, function(items) {
		successCallback(items.domains);
	});
}

/**
 * Update all cached images,
 * with the real ones
 */
function updateImages() {

	/**
	 * First get extension options,
	 * and then update the images
	 */
	getOptions(update);

	function update(domains) {
		// Don't update images, if there aren't added domains
		if ( ! domains || domains.length === 0) {
			return;
		}

		console.log('Update images ...');

		$.each($('img'), function(key, value) {
			// Cached image src
			var googleSrc = $(value).attr('src');

			// Make sure the image has src
			if ( ! googleSrc) {
				return;
			}

			// Index of the real image src, if exists
			var realURLIndex = googleSrc.indexOf('#http');

			// Filter image by a domain
			domains.forEach(function(domain) {
				var realURLDomainIndex = googleSrc.indexOf(domain);

				// If the image is cached for the selected domain
				if (realURLIndex !== -1 && realURLDomainIndex !== -1) {
					var time = new Date().getTime();
					var realURL =  googleSrc.substr(realURLIndex + 1) + '?time=' + time;

					// Use no cached image URL
					$(value).attr("src", realURL);
				}
			});

		});
	}
}