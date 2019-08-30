var resultH = document.querySelector("#result");
var searchI = document.querySelector("#search");
var sb = document.querySelector("#searchBtn");

function fetchData() {
	// if (window.XMLHttpRequest) {
	// 	xhr = new XMLHttpRequest();
	// } else {
	// 	xhr = new ActiveXObject("Microsoft.XMLHTTP");
	// }
	// xhr.onreadystatechange = function() {
	// 	if (xhr.readyState == 4 && xhr.status == 200) {
	// 		alert("sdf");
	// 	}
	// }
	// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/"+input);
	// xhr.send();

	fetch('https://jsonplaceholder.typicode.com/todos')
	.then((res)=>{return res.json()})
	.then(data=> {
		console.log(data)
	})
}