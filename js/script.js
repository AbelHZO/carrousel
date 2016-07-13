/**
	Abel HZO Carrousel 2016
	Tipo 1: Simgle carrousel with one image.
	Tipo 2: Carrousel show two images and control next and prev.
*/

one = 0;
function carrouselOne(part) {
	$(".navigationOne > a").removeClass("active");
	$($(".navigationOne > a")[one]).addClass("active");

	$(".one").animate({
		right: $(part).position().left
	}, "slow");
}

setInterval(function() {

	one++;
	if(one == 3) one = 0;
	carrouselOne($(".one > div")[one]);

}, 3000);

$(".navigationOne > a").on("click", function(e) {
	one = $(this).attr("data");
	carrouselOne($(".one > div")[one]);
});


/*Carrousel Two*/

two = 0;
function carrouselTwo(part) {
	$(".navigationTwo > a").removeClass("active");		//Remove in all the elements <a> the class .active
	$($(".navigationTwo > a")[two]).addClass("active"); //Add class the element <a>, the var two selected the element <a>.

	$(".two").animate({                                 //Create animate the container .two
		right: $(part).position().left                  //Move the element div, part is the object div to move.
	}, "slow");
}

function next() {
	two++;
	if(two == 5) two = 0;
	carrouselTwo($(".two > div")[two]);
}

function prev() {
	two--;
	if(two == -1) two = 4;
	carrouselTwo($(".two > div")[two]);
}

setInterval(function() {
	next();
}, 3000);

$(".navigationTwo > a").on("click", function(e) {
	two = $(this).attr("data");
	carrouselTwo($(".two > div")[two]);
});

$(".icon-right-open").on("click", function(e) {
	next();
});

$(".icon-left-open").on("click", function(e) {
	prev();
});