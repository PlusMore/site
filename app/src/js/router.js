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