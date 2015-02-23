App = function() {

    $(function() {
        iOS();
        widgetToggle();
        widgetClose();
        widgetFlip();
        tooltips();
    });

    // if the user is using ios we want to know so we can adjust the header to account for the top bar
    var iOS = function() {
        var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
        var standalone = ("standalone" in window.navigator) && !window.navigator.standalone;
        Session.set('iOS-standalone', iOS && standalone);
    };

    var widgetToggle = function() {
        $(document).on('click', '.actions > .fa-chevron-down, .actions > .fa-chevron-up', function() {
            $(this).parent().parent().next().slideToggle("fast"), $(this).toggleClass("fa-chevron-down fa-chevron-up")
        });
    };

    var widgetClose = function() {
        $(document).on('click', '.actions > .fa-times', function() {
            $(this).parent().parent().parent().fadeOut()
        });
    };

    var widgetFlip = function() {
        $(document).on('click', ".actions > .fa-cog", function() {
            $(this).closest('.flip-wrapper').toggleClass('flipped')
        });
    };

    var maskInputs = function($selector) {
        $selector.each(function() {
            var mask = $(this).data('mask');
            $(this).mask(mask);
        });
    }

    var customCheckbox = function($selector) {
        $selector.iCheck({
            checkboxClass: 'icheckbox_flat',
            radioClass: 'iradio_flat'
        });
    }

    function tooltips() {
      $('.tooltips').tooltip(); 
    }

    


    $(window).scroll(function() {
      var windowpos = $(window).scrollTop() ;

      if (windowpos <= 500) {
          $('.nav li.current').removeClass('current');
      }
    });

    /* --- scrollReveal ------------------- */

    window.scrollReveal = new scrollReveal();
      

    //Placeholder fixed for Internet Explorer
    $(function() {
      var input = document.createElement("input");
      if(('placeholder' in input)==false) { 
        $('[placeholder]').focus(function() {
          var i = $(this);
          if(i.val() == i.attr('placeholder')) {
            i.val('').removeClass('placeholder');
            if(i.hasClass('password')) {
              i.removeClass('password');
              this.type='password';
            }     
          }
        }).blur(function() {
          var i = $(this);  
          if(i.val() == '' || i.val() == i.attr('placeholder')) {
            if(this.type=='password') {
              i.addClass('password');
              this.type='text';
            }
            i.addClass('placeholder').val(i.attr('placeholder'));
          }
        }).blur().parents('form').submit(function() {
          $(this).find('[placeholder]').each(function() {
            var i = $(this);
            if(i.val() == i.attr('placeholder'))
              i.val('');
          })
        });
      }
    });


    var colors = {
        default: "#FFFFFF",
        defaultDark: "#e6e6e6",
        primary: "#27B6AF",
        primaryDark: "#1e8c87",
        success: "#2ecc71",
        successDark: "#25a25a",
        warning: "#f39c12",
        warningDark: "#c87f0a",
        info: "#81cfe0",
        infoDark: "#58bfd6",
        danger: "#c0392b",
        dangerDark: "#962d22"
    }

    var fullScreenContainer = function() {

      // Set Initial Screen Dimensions

      var screenWidth = $(window).width() + "px";
      var screenHeight = $(window).height() + "px";

      $(".full-screen-container").css({
        width: screenWidth,
        height: screenHeight
      });

    };

    //return functions
    return {
        colors: colors,
        customCheckbox: customCheckbox,
        maskInputs: maskInputs,
        fullScreenContainer: fullScreenContainer
    };
}();

Meteor.startup(function() {
  console.log('startup');
  App.fullScreenContainer();

  $(window).on('resize', App.fullScreenContainer);
});

$(window).load(function(){
  console.log('loaded');
  $('.app-loader').fadeOut(1000); // set duration in brackets
});






        