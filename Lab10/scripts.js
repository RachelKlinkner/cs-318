//Menu Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.menu>.accordion').addEventListener('click', function(){
		document.querySelector('.menu section').classList.toggle('show'); 
        document.querySelector('.menu .dinner').classList.toggle('show');
        document.querySelector('.menu .desserts').classList.toggle('show');
        document.querySelector('.drinks section').classList.toggle('show');
        document.querySelector('.drinks .specialty drinks').classList.toggle('show');
        document.querySelector('.drinks .beer').classList.toggle('show');
		document.querySelector('.menu span').classList.toggle('rotate');
	});
});