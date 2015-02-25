Router.configure({
  layoutTemplate: 'SiteLayout'
});

Router.route('/', function () {
  this.render('Home', {});
},{
  name: 'Home'
});

Router.route('/product', function () {
  this.render('Product', {});
},{
  name: 'Product'
});

Router.route('/privacy-policy', function () {
  this.render('PrivacyPolicy', {});
},{
  name: 'PrivacyPolicy'
});

Router.route('/terms-of-use', function () {
  this.render('TermsOfUse', {});
},{
  name: 'TermsOfUse'
});