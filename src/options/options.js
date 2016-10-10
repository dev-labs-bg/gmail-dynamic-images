/**
 * Saves options to chrome.storage
 */
function saveOptions() {
    // Convert inputs to array
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

/**
 * Update options page with
 * already set domains.
 * If there aren't, use a default value.
 */
function restoreOptions() {
    chrome.storage.sync.get({
        domains: []
    }, function(items) {
        items.domains.forEach(function(domain) {
            $('#domains-list').append(buildDomainHTML(domain));
        });
    });
}

/**
 * Build domain html row
 *
 * @param {String} value - Domain name
 * @returns {*|jQuery}
 */
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

    // Add new blank domain input
    $('#add-more').on('click', function(){
        $('#domains-list').append(buildDomainHTML());
    });

    // Remove domain option
    $('#domains-list').on('click', '.remove', function(){
       $(this).parents('.domain-item-wrapper').remove();
    });

    // Save domain options
    $('#save').on('click', saveOptions);
});



