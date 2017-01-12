$(function() {
    $('.post__content img').each(function(i,el) {
        if ($(el).width() > 500) {
            $(el).addClass('post__image--scaled');
            $(el).closest('p').height(el.getBoundingClientRect().height);
        }
    });

    $('.post__content h3').addClass('wrapped').wrapInner('<span></span>');
});