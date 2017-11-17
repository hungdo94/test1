(function ($) {
    $.fn.inner_float = function(topChildDiv) {

        var settings = $.extend({
            topDistance: 10
        }, topChildDiv);

        var child = this;
        var parent = $(this).parent();
        //current scroll position
        var currentScoll = $(window).scrollTop();
        $(window).scroll(function() {
            var nextScroll = $(window).scrollTop();
            var edgeToChildTop = parseInt(getDistanceTopScreen(child));
            var edgeToParTop = parseInt(getDistanceTopScreen($(child).parent()));

            var edgeToParBottom = parseInt($(child).parent().height()) + edgeToParTop + parseInt($(parent).css('padding-top'))+ parseInt($(parent).css('padding-bottom'));
            var edgeToChildBottom = parseInt($(child).height()) + edgeToChildTop;
						function setCondition(parent_el, child_el, parent_pos, child_pos, child_bottom, child_top) {
	      			$(parent_el).css({
	      					position: parent_pos
	      			});
	      			$(child_el).css({
	      					position: child_pos,
                  top: $(parent_el).css(child_top),
	      					bottom: child_bottom

	      			});
	      		}
            function setCondition2(parent_el, child_el, parent_pos, child_pos, child_bottom, child_top) {

            }

            if(currentScoll < nextScroll) {

                if(edgeToChildTop > settings.topDistance) { //div top child less 10px

                    // $(parent).css({
                    //     position: 'relative'
                    // });
                    // $(child).css({
                    //     position: 'absolute',
                    //     top: $(parent).css('padding-top'),
                    //     bottom: 'auto'
                    // });
                } else { //top div child greater 10px
                    if(edgeToParBottom > (edgeToChildBottom + parseInt($(parent).css('padding-bottom')))) { //bottom parent greater than bottom-child

                        $(parent).css({
                            position: ''
                        });
                        $(child).css({
                            position: 'fixed',
                            top: settings.topDistance,
                            bottom: 'auto'
                        });
												// setCondition(parent,child,'relative','fixed','settings.topDistance','auto');
                    } else { //bottom parent = bottom-child

                        // $(parent).css({
                        //     position: 'relative'
                        // });
                        // $(child).css ({
                        //     position: 'absolute',
                        //     top: 'auto',
                        //     bottom: $(parent).css('padding-bottom')
                        // });
                        setCondition(parent,child,'relative','absolute','auto','padding-bottom');

                    }
                }
            } else { //text di xuông
                if(edgeToChildTop >= settings.topDistance) { //top child > 10px
                    if(edgeToParTop < ((edgeToChildTop) - parseInt($(parent).css('padding-top')))) {//top parent less than 10px + padding top

                        $(parent).css({
                            position: ''
                        });
                        $(child).css({
                            position: 'fixed',
                            bottom: 'auto',
                            top: settings.topDistance

                        });
                        setCondition(parent,child,'relative','fixed','settings.topDistance',);
                    } else { //top child < 10px
                        
                        // $(parent).css({
                        //     position: 'relative'
                        // });
                        // $(child).css({
                        //     position: 'absolute',
                        //     bottom: 'auto',
                        //     top: $(parent).css('padding-bottom')
                        // });
                        setCondition(parent,child,'relative','absolute','padding-bottom','auto');

                    }
                }
            }
            currentScoll = nextScroll;
        });

        //return distance from top of ele to top edge of browser
        function getDistanceTopScreen(elm) {
            var topDistance = parseInt($(elm).offset().top);
            var topScroll = parseInt($(window).scrollTop());
            return topDistance - topScroll;
        }
    }
}(jQuery));
