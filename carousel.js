/*
OVERVIEW
A simple vertical carousel

Slides are cycled through by the two toggles on the right, previous and next. 

Next
=> toggle clicked
=> active slide is faded out, moved up
=> next slide is faded in, moved up

Previous
=> toggle clicked
=> active slide is faded out, moved down
=> next slide is faded in, moved down
*/
$(document).ready(function() {
    $("video").each(function(){ $(this).hide(); });
    $(".container").hide();
    $(".kiss").hide();
  
    let timelines = [34000, 58000, 47000];
    let button_text = ["Давай згадувати", "І красунечка"];
    let current = 0;

    $(".open-magic").click(function() {
        $(".open-magic-container").hide(1000, function(){
            $(".container").show(1000, function(){

                $(".hidable").hide(1000, function() {
                    

                    current = current + 1;

                    $("video[pos='" + current + "']").each(function(){ $(this).show(); });
                    $("video[pos='" + current + "']").each(function(){ this.play(); });

                    setTimeout(function() {
                        $(".container").hide(1000, function(){
                            $(".hidable").show(1000, function() {
                                $(".open-magic-container").show();
                                $("video").each(function(){ $(this).hide(); });
								if(current == 3) {
									$(".open-magic-container").css("opacity", "0");
									$(".hidable").css("opacity", "0");
									$(".kiss").show(5000, function(){
										$(".kiss").hide(5000, function() {
											$(".open-magic-container").css("opacity", "1");
											$(".hidable").css("opacity", "1");      
										})
									});

									current = 0;
								}
                            })
                        })
                    },  timelines[current - 1] + 1000);

                    $(".open-magic").text(button_text[current - 1]);

                    if(current == 3) {
                        $(".open-magic").text("Зазирнути ще раз");
                    }
                });
            });
        });
    });
    
  })