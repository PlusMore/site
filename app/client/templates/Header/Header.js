Template.Header.helpers({
  headerClass: function() {
    return Session.get('shrinkHeader') ? 'cbp-af-header-shrink' : '';
  }
});

Tracker.autorun(function() {
  if (!(ResponsiveHelpers.isXs() || ResponsiveHelpers.isSm())) {
    if (Session.get('pageScroll') > 50) {
      return Session.set('shrinkHeader', true); 
    }
  } 
  Session.set('shrinkHeader', false);
});