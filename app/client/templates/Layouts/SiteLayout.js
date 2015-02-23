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