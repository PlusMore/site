Template.Page.rendered = function () {
  App.fullScreenContainer();

  scrollPage(this.$('.page'));
  this.$('.page').on('scroll', scrollPage);
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