/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

Meteor.startup(function() {

});

CbpAnimatedHeader = (function() {
  console.log('initialize animated header');

  var docElem = document.documentElement,
    header = document.querySelector( '.cbp-af-header' ),
    didScroll = false,
    changeHeaderOn = 50;

  function _scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      classie.add( header, 'cbp-af-header-shrink' );
    }
    else {
      classie.remove( header, 'cbp-af-header-shrink' );
    }
    didScroll = false;
  }

  
});