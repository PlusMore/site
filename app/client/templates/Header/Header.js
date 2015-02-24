Template.Header.helpers({
  headerClass: function() {
    return Session.get('shrinkHeader') ? 'cbp-af-header-shrink' : '';
  },
  currentRouteClass: function (routeName) {
    // if page is current route, also return true 
    var currentRouter = Router.current();

    if (currentRouter && currentRouter.route.getName().indexOf(routeName) > -1) {
      return 'current';
    }

    return '';
  },
  menuIsOpen: function() {
    return Session.equals('menuIsOpen', true) ? 'menu-open' : '';
  }
});

Tracker.autorun(function() {
  if (Session.get('pageScroll') > 50) {
    return Session.set('shrinkHeader', true); 
  }
  return Session.set('shrinkHeader', false);
});

Template.Header.events({
  'click .js-request-demo': function (e) {
    e.preventDefault();
    BootstrapModalPrompt.prompt({
      dialogTemplate: Template.RequestDemoModal
    });
  },
  'click #navbar-collapse.navbar-collapse.in': function(e, tmpl) {
    if( tmpl.$(e.target).is('a') && tmpl.$(e.target).attr('class') != 'dropdown-toggle' ) {
      console.log('hide')

      tmpl.$(e.target).closest('.navbar-collapse').collapse('hide');
    }
  },
  'show.bs.collapse #navbar-collapse.navbar-collapse': function() {
    Session.set('menuIsOpen', true);
  },
  'hide.bs.collapse #navbar-collapse.navbar-collapse': function() {
    Session.set('menuIsOpen', false);
  }
});