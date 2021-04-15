const delfin = document.getElementById('img1'); 
const img2 = document.getElementById('img2');
const buttom = document.getElementById('buttom');

let domRect3 = buttom.getBoundingClientRect();

buttom.onclick = () => { 

	let domRect = delfin.getBoundingClientRect();
	let domRect2 = img2.getBoundingClientRect();
	
	delfin.style.position = "absolute"; 
	delfin.style.top = domRect2.top; 
	delfin.style.left = domRect2.left;
	
	img2.style.position = "absolute";
	img2.style.top = domRect.top;	
	img2.style.left = domRect.left;
	
	buttom.style.position = "relative"; 
	buttom.style.top = domRect3.top-8; 
}									 
									