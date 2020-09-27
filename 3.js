document.querySelector(".conteyner").addEventListener('click',fTabs);
function fTabs(event) {
	if(event.target.className == "tab") {		
		var dataTab = event.target.getAttribute('data-tab');
		var tabH = document.getElementsByClassName("tab");
		for (var i = 0; i< tabH.length; i++ ) {
			tabH[i].classList.remove('active');
		}
		event.target.classList.add('active');
		var tabBody = document.getElementsByClassName('tab-body');
		for (var j = 0; j < tabBody.length; j++ ){
			if(dataTab == j) {
			tabBody[j].style.display = 'block';
			
			}
			else {
				tabBody[j].style.display = 'none';
			}
		}
	}
}
 document.querySelector('.yyy').onmouseover = () => {	document.querySelector('.yyy').style.background = 'red';
}
  document.querySelector('.yyy').onmouseout = () => {	document.querySelector('.yyy').style.background = '#1EE3D1';
}