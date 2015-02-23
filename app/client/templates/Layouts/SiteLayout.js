Template.SiteLayout.helpers({
  transition: function() { 
    return function(from, to, element) {
      if (to.template === 'Home') {
        return 'left-to-right';
      }
      return 'right-to-left';
    } 
  }
});

Template.SiteLayout.events({
  'click .scroll': function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 650);
        return false;
      }
    }
  }
});