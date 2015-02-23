Template.Header.helpers({
  headerClass: function() {
    return Session.get('shrinkHeader') ? 'cbp-af-header-shrink' : '';
  }
});

Tracker.autorun(function() {
  if (Session.get('pageScroll') > 50) {
    return Session.set('shrinkHeader', true); 
  }
  return Session.set('shrinkHeader', false);
});

Template.Header.events({
  'click .js-request-demo': function () {
    BootstrapModalPrompt.prompt({
      dialogTemplate: Template.RequestDemoModal
    });
  }
});