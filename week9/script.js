document.querySelector("#subb").onclick = function(e) {
	alert("asdf");
	fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=88bf4513b6e840c1af8f47efbc3bf1f1").then(function(response){
	if (response.status !== 200)
		console.log("looks like there was a problem Status Code: "+response.status);
	response.json().then(function(data){
		saveToFile("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=88bf4513b6e840c1af8f47efbc3bf1f1.json");
		data['articles'].map(function(value, index){
			console.table(data['articles']);
			document.getElementById("results").innerHTML += "<p><b>"+data['articles'][index].title+"</b></p><br /><hr />";
		})
	})
}).catch(function(err){
	console.err("Fetch error: " + err);
})

}

function saveToFile(tlink) {
	let link = document.querySelector("#dd_link")
	link.setAttribute("download", tlink);
	link.click();
}



