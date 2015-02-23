Template.RequestDemoModal.helpers({
  requestDemoSchema: function () {
    return Schema.RequestDemo;
  }
});

AutoForm.hooks({
  requestDemo: {
    onSuccess: function(operation, result, template) {
      BootstrapModalPrompt.dismiss();
    }
  }
});