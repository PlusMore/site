Template.Page.rendered = function () {
  App.fullScreenContainer();

  scrollPage(this.$('.page'));
  this.$('.page').on('scroll', scrollPage);

  this.$('.nav', '#page-nav').onePageNav({
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
};

function _scrollPage(e) {
  Session.set('pageScroll', $(e.delegateTarget).scrollTop());
}

scrollPage = _.throttle(_scrollPage, 250);

Template.Page.events({
  'click .js-request-demo': function () {
    BootstrapModalPrompt.prompt({
      dialogTemplate: Template.RequestDemoModal
    });
  }
});