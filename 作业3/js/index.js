/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-11 14:12:29
 * @version $Id$
 */
var ele = document.querySelectorAll('.m-item')

for(var i=0;i<ele.length;i++){
	ele[i].setAttribute('index',i+1);
	ele[i].onclick=function() {
		alert(this.getAttribute('index'));
	}
}

doClick()

function doClick() {
	document.getElementById("p1").addEventListener('click',change)
	ele[1].addEventListener('click',changedate)
	ele[2].addEventListener('click',add)
	ele[3].addEventListener('click',del)
	ele[4].addEventListener('click',opennew)
	ele[5].addEventListener('click',addele)
	ele[6].addEventListener('click',setwid)
}

function change(e) {
	e.target.style.color = 'red';
}

function changedate() {
	var d = new Date();
	let year = d.getFullYear();
	let month = d.getMonth();
	let day = d.getDate();
	if(month >= 1 && month <= 9)
		month = '0' + month;
	if(day >= 0 && day <= 9)
		day = '0' + day
	let current = year + '-' + month + '-' + day; 
	document.querySelector('h1').innerHTML = current;
}

function add() {
	ele[2].classList.add("fn-active")
}

function del() {
	ele[7].parentNode.removeChild(ele[7]);
}

function opennew(){
	window.open('https://taobao.com','_blank')
}

function addele() {
	let l = document.createElement("li");
	let node = document.createTextNode("p9");
	l.appendChild(node);
	document.querySelector('ul').appendChild(l);
}

function setwid() {
	let wid = window.innerWidth;
	document.querySelector('.m-box').style.width = wid;
}