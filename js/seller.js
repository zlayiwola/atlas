var menuicon = document.getElementById("menuicon"); //hamburger menu icon
var file = document.getElementById('fileinput'); //input with the type[file]

menuicon.addEventListener('click', function(){
  var sidemenu = document.getElementById("sidemenu");
  var wrapper = document.getElementById('wrapper');

  wrapper.classList.toggle('closer')
  sidemenu.classList.toggle('active');
}, false);


function fileInput(){
  var file = document.getElementById('fileinput');
  var fileName = document.getElementById('filename');


  fileName.innerHTML = file.value.replace(/.*[\/\\]/, '');
}

file.addEventListener('change', fileInput, false);
