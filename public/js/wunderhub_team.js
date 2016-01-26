/**
 * Receive and parse team data from WunderHub
 */

$(document).ready(function () {
    // WunderHub API Team json data source
    var wunderTeamApi = 'https://hub.wunder.io/api/team';

    $.getJSON(wunderTeamApi).done(function (data) {
        // Sort the data by office
        data.sort(function( a,b ) {
            return a.office.localeCompare(b.office);
        });
        // Add each
        $.each( data, function( i, item ) {
            $(
                $("<div/>", {
                    'class': 'biography section center-on-mobiles',
                }).append([
                    $("<img/>", {
                        'src': item.picture_medium ? item.picture_medium : '/public/images/bios/nobody_sml.jpg',
                        'class': 'avatar pull-right',
                        'alt': item.firstName + ' ' + item.lastName + (item.jobTitle ? ', ' + item.jobTitle : ''),
                        'title': item.firstName + ' ' + item.lastName + (item.jobTitle ? ', ' + item.jobTitle : '')
                    }),
                    $("<h3/>", {
                        'class': 'biography__name',
                        'html': item.firstName + ' ' + item.lastName
                    }),
                    $("<strong>", {
                        'html': item.jobTitle
                    }),
                    $("<div/>", {
                        'class': 'biography__text',
                        'html': item.office + ', ' + item.country
                    })
                ])
            ).appendTo( ".wunderteam" );
        });

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("error: " + textStatus);
    });
});
