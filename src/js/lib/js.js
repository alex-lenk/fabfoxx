      jQuery(window).load(function(){ //jQuery(window).load() must be used instead of jQuery(document).ready() because of Webkit compatibility        
        
        // Photo gallery > Standard
        jQuery(".photosgallery-std").sliderkit({
          mousewheel:true,
          shownavitems:5,
          //navfx:"none",
          panelbtnshover:true
        });
        
        // Photo gallery > With captions
        jQuery(".photosgallery-captions").sliderkit({
          circular:true,
          mousewheel:true,
          keyboard:true,
          shownavitems:4,
          panelbtnshover:false,
          auto:false,
          fastchange:false
        });
        
        // Custom caption animation
        /*var mySliderkit = $(".photosgallery-captions").data('sliderkit');
        var myTxtbox = $(".sliderkit-panel-textbox", mySliderkit.domObj);
        var myTxtboxHeight = myTxtbox.height();
        myTxtbox.hide();

        mySliderkit.options.panelfxbefore = function(){
          var myTxtbox = $(".sliderkit-panel-textbox", mySliderkit.currPanel)
          .css({"bottom" : "-"+myTxtboxHeight+"px" });
        };
        mySliderkit.options.panelfxafter = function(){
          var myTxtbox = $(".sliderkit-panel-textbox", mySliderkit.currPanel);
          $(".sliderkit-panel-textbox", mySliderkit.currPanel).show().animate(
            {bottom : "+=" + myTxtboxHeight + "px"}, 1000
          );
        };
        mySliderkit.currPanel.removeClass( mySliderkit.cssClassNames.cssActive );
        mySliderkit.changeWithId(0);*/
        
        // Photo gallery > Vertical
        jQuery(".photosgallery-vertical").sliderkit({
          circular:true,
          mousewheel:true,
          shownavitems:4,
          verticalnav:true,
          navclipcenter:true,
          auto:false
        });
        
        // Photo gallery > Minimalistic
        jQuery(".photosgallery-minimalistic").sliderkit({
          shownavitems:6,
          circular:true,
          navitemshover:true,
          panelfxspeed: 1000
        });
        
      }); 