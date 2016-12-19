function showBabies(){
	$('#babies').on('click', function () {
		console.log("Clicked");
		var randomBabies = Math.floor(Math.random()*121);
		console.log(randomBabies);
		var babyPic = `<img src="./images/babies${randomBabies}.jpg" class="pic">`
		$('.random-pic').html(babyPic);
		console.log(babyPic);
	});
};

function showHubby(){
	$('#hubby').on('click', function () {
		console.log("Clicked");
		var randomHubby = Math.floor(Math.random()*22);
		console.log(randomHubby);
		var hubbyPic = `<img src="./images/hubby${randomHubby}.jpg" class="pic">`
		$('.random-pic').html(hubbyPic);
		console.log(hubbyPic);
	});
};

function showFamily(){
	$('#family').on('click', function () {
		console.log("Clicked");
		var randomFamily = Math.floor(Math.random()*23);
		console.log(randomFamily);
		var familyPic = `<img src="./images/family${randomFamily}.jpg" class="pic">`
		$('.random-pic').html(familyPic);
		console.log(familyPic);
	});
};




$(document).on('ready', function () {
	showBabies();
	showHubby();
	showFamily();
});
