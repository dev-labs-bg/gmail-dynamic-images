// Saves options to chrome.storage
function saveOptions() {
    var domains = $('.domain').map(function() {
        return $(this).val();
    }).get();

    chrome.storage.sync.set({
        domains: domains
    }, function() {
        // Update status to let user know options were saved.
        $('#status').html('Options saved.').fadeIn();
        setTimeout(function() {
            $('#status').fadeOut();
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        domains: []
    }, function(items) {
        items.domains.forEach(function(domain) {
            $('#domains-list').append(buildDomainHTML(domain));
        });
    });
}

function buildDomainHTML(value) {
    var $wrapper = $('<div />', {
        class: 'input-group domain-item-wrapper'
    });
    var $input = $('<input />', {
        class: 'domain form-control',
        type: 'text',
        value: value || null,
        placeholder: 'example.com'
    });
    var $button = $('<span />', {
        class: 'remove btn btn-danger',
        text: 'Remove'
    });
    var $buttonGroup = $('<div />', {
       class: 'input-group-btn'
    });

    var $domainHTML = $wrapper.append($input, $buttonGroup.append($button));

    return $('<div />').append($domainHTML).html();
}

$(document).ready(function(){
    restoreOptions();

    $('#add-more').on('click', function(){
        $('#domains-list').append(buildDomainHTML());
    });

    $('#domains-list').on('click', '.remove', function(){
       $(this).parents('.domain-item-wrapper').remove();
    });

    $('#save').on('click', saveOptions);
});



