"use strict"

const hr = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".seconds");




function clockWork(){
	let now = new Date();
	let hour = now.getHours()*30;
	let minute = now.getMinutes()*6;
	let second = now.getSeconds()*6;

	hr.style.transform = `rotateZ(${hour +(minute/12)}deg)`;
	min.style.transform = `rotateZ(${minute+ now.getSeconds()*0.1}deg)`;
	sec.style.transform = `rotateZ(${second}deg)`;
	
	
}
setInterval(()=>clockWork());


function digitalDisplay(){
	let hr = document.querySelector(".hr");
	let min = document.querySelector(".min");
	let sec = document.querySelector(".sec");
	let selected =document.querySelector(".format select")
	console.log(selected);
	let selectedOpt;
	function helper(){
		let date = new Date();
		selectedOpt = selected.value;
		let hour = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		if(hour < 10)hour = "0"+hour;
		if(minutes < 10)minutes = "0"+minutes;
		if(seconds < 10)seconds = "0"+seconds;
		if(selectedOpt === "24-hour"){
			hr.innerHTML = `<h1>${hour}</h1>`;
		}else if(selectedOpt === "12-hour"){
			 hour = parseInt(hour);
			if(hour <=12){
				if(hour <10)hour ="0"+hour;
				hr.innerHTML =`<h1>${hour}</h1>`;
			}else {
				hour = hour - 12;
				if(hour < 10 )hour ="0"+hour;
				hr.innerHTML =`<h1>${hour}</h1>`;
			}
		}
		min.innerHTML = `<h1>:${minutes}:</h1>`
		sec.innerHTML = `<h1>${seconds}</h1>`
	}
setInterval(()=>helper())

}
digitalDisplay()