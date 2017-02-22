$('.mark-list__body__item.mark-list__body__item_student-name a').each(
    function() { 
        var hr = $(this).attr('href'); 
        var el = $(this);
        $.get(hr, function(data) {
            var email = $($.parseHTML(data)).find('a').filter(function(el) {return $(this).attr('href').startsWith('mailto:'); }); 
            console.log($(email[0]).text() + ' ' + el.text());
        });
    }
);
