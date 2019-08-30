const myarray = ["hello", "hi", "bye", 123, null, [1,2,3]];

/*or (let i = 0; i < myarray.length; i++) {
	console.log(myarray[i]);
} the old way to map the array */ 
// the new way the map the array
myarray[5].map((value) => {
	console.log(value);
});
const GitHubData = [
{
	name : "gibson",
	userId: "123",
	img: "anthing"
},
{
	name : "repo",
	repo : "10",
	files : "20"
},
{
	name : "",
	connections : "500"
}
]
let x = 2;
const container = document.getElementById("container");
const mydata = GitHubData.map((value, index, arr) => {
	container.innerHTML += "<p>" + arr[index].name + "</p><br />";
});
