Template.Page.rendered = function () {
  App.fullScreenContainer();

  this.$('.page').on('scroll', scrollPage);
};

function _scrollPage(e) {
  Session.set('pageScroll', $(e.delegateTarget).scrollTop());
}

scrollPage = _.throttle(_scrollPage, 250);