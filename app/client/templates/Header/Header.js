Template.Header.helpers({
  headerClass: function() {
    if (!(ResponsiveHelpers.isXs() || ResponsiveHelpers.isSm())) {
      return Session.get('pageScroll') > 50 ? 'cbp-af-header-shrink' : '';
    } else {
      return '';
    }
  }
});