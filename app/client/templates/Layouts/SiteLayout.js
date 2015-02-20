function onePageScroll() {
      $('.nav', '#page-nav').onePageNav({
          currentClass: 'current',
          changeHash: false,
          scrollSpeed: 650,
          scrollOffset: 30,
          scrollThreshold: 0.5,
          filter: ':not(.login, .signup)',
          easing: 'swing',
          begin: function() {
              //I get fired when the animation is starting
          },
          end: function() {
              //I get fired when the animation is ending
          },
          scrollChange: function($currentListItem) {
              //I get fired when you enter a section and I pass the list item of the section
          }
      });
    }

Template.SiteLayout.rendered = function () {
  onePageScroll();
};    

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