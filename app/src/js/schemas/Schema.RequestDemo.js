Schema.RequestDemo = new SimpleSchema({
  name: {
    type: String,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  }, 
  phone: {
    type: String
  }
});