//your JS code here. If required.

// const para=document.getElementById('status');
// const btn=document.getElementById('enterBtn');
// btn.addEventListener('change',()=>{
// 	para.innerText  = <h1>Entered Metaverse<h1>;
// })


var para = document.getElementById("status");
var button =  document.getElementById("enterBtn");
//var h1 = document.getElementById("display");
button.addEventListener('click', ()=>{
	setTimeout(()=>{
	let h1 = document.createElement("h1");
	h1.textContent = "Entered Metaverse";
	para.parentNode.replaceChild(h1,para);
 },4000);
	
});
