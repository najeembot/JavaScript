// hoop rounds based on provided numbers

let hn = "";
let hs = "";
const jd = document.querySelector("#jsD");
let count = 0;
function hoopP() {
	if (document.querySelector("#hoopn").value != "" && document.querySelector("#hoopn").value != null) {
		hn = document.querySelector("#hoopn").value;
		count++;
		if (count < 10) {
			jd.innerHTML = "<p class='message'>Keep at it until you get it</p>";
		} else {
			jd.innerHTML = "<p class='message'>Great, now move on to tricks</p>";
		}
	} 
}

