Template.site.events({
  'click .js-request-demo': function () {
    BootstrapModalPrompt.prompt({
      dialogTemplate: Template.RequestDemoModal
    });
  }
});