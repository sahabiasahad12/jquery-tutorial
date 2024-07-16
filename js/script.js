$(Document).ready(function(){
    //alert("Hello World");
    $('#btn').on('click',function(){
        alert("Welcome")
    })

    //Show/Hide
    $('#hide').on('click', function(){
        $('#sh_hi').hide();
    })

    $('#show').on('click', function(){
        $('#sh_hi').show();
    })

    $('#toggle').on('click', function(){
        $('#sh_hi').toggle();
    })

    //jQuery Event Methods
    $("#bt").on("click", function(){
        $("#p").on({
            mouseenter: function(){
              $(this).css("background-color", "lightgray");
            },  
            mouseleave: function(){
              $(this).css("background-color", "lightblue");
            }, 
            click: function(){
              $(this).css("background-color", "yellow");
            }  
          });
    })

    //jQuery element Selector
    $("button").on("click", function(){
        $("p").hide();
      });

    //jQuery fadeIn/fadeOut/fadeToggle/fadeTo Method
    $("#fadeIn").on("click", function(){
        $("#div1").fadeIn("fast");
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(1000);
      });

      $("#Deac").on("click", function(){
        $("#div1").fadeOut("fast");
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(1000);
      });

      $("#fd").on("click", function(){
        $("#div1").fadeToggle("fast");
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(1000);
      });

      $("#ft").on("click", function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.8);
      });

      //jQuery slideDown() Method
      $("#sd").on("click", function(){
        $("#id_sd").slideToggle("slow");
      });

      //jQuery slideUp() Method
      $("#sp").on("click", function(){
        $("#id_sp").slideUp("slow");
      });


     //jQuery slideToggle method 
      $("#st").on("click", function(){
        $("#id_st").slideToggle("slow");
      });

      //jQuery Effects - Animation
      $("#ani").on("click", function(){
        $("#id_ani").animate({left: '250px'});
      });



      //jQuery animate Manipulate Multiple Properties
      $("#MaAni").on("click", function(){
        $("#id_maani").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '150px'
        });
      });


      //jQuery animate() - Using Relative Values
      $("#RelAni").on("click", function(){
        $("#id_relani").animate({
          left: '250px',
          height: '+=150px',
          width: '+=150px'
        });
      });


      //jQuery animate() - Using Pre-defined Values

      $("#PreAni").on("click", function(){
        $("#id_preani").animate({
          height: 'toggle'
        });
      });



      //jQuery animate() - Uses Queue Functionality
      $("#QueueAni").on("click", function(){
        var div = $("#id_queueani");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
      });



      //jQuery animate() -firs Uses Queue Functionality
      $("#FirstAni").on("click", function(){
        var div = $("#id_firstani");  
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
      });


      //jQuery stop() Method
      $("#id_stopani").on("click", function(){
        $("#sad").slideDown(5000);
      });
      $("#StopAni").on("click", function(){
        $("#sad").stop();
      });


      //jQuery Get Content and Attributes
      $("#GetTex").on("click", function(){
        alert("Text: " + $("#con").text());
      });
      $("#GetHtm").on("click", function(){
        alert("HTML: " + $("#con").html());
      });



      //jQuery value method
      $("#BuValue").on("click", function(){
        alert("Value: " + $("#ValTex").val());
      });
      

      
 

    
    
      
         
})