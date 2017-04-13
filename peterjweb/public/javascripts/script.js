var dateTime = new Date();
var myAge =  new Date().getFullYear() - 1985;
var residence = new Date().getFullYear() - 1999;

$('.residence').text(residence);
$('.myAge').text(myAge);

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	var width;
	//Portfolio Section Animations
	if (wScroll > $('#portfolio').offset().top) {
		$('#projects .project').each(function(i) {
			setTimeout(function() {
				$('.project').eq(i).addClass('show-elements');	
			}, 250 * (i+1));
		});
	};

	//Skill Bar Animations
	if (wScroll > $('#skills').offset().top) {
		$("#skills .skills-chart .skill span").each(function() {
			var dataWidth = $(this).data("width") + "%";			
			var styles = {
				width : dataWidth,
				opacity : 1
			}
			$(this).css(styles);		
		});	
	};

	//Footer Reveal 
	if (wScroll > $('#contact').offset().top) {
		$(".nav-position").removeClass("nav-position-full").addClass("nav-position-mini");
	} else {
		$(".nav-position").removeClass("nav-position-mini").addClass("nav-position-full");
	}
});
