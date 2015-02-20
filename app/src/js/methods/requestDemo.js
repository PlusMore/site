Meteor.methods({
  requestDemo: function(request) {
    check(request, Schema.RequestDemo);

    this.unblock();

    if (Meteor.isServer) {
      Email.send({
        from: request.email,
        to: 'info@plusmoretablets.com',
        subject: 'Demo Request: ' + request.name,
        text: 'Demo Request\n\nName: ' + request.name + '\nEmail: ' + request.email + '\nPhone: ' + request.phone 
      });  
    }
    
  }
});