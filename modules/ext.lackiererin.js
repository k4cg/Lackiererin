let xhttp = new XMLHttpRequest();
xhttp.timeout = 2000;
xhttp.onreadystatechange = function() {

	let statusText = document.getElementById("p-banner");

	if (this.readyState == 4) {
		statusText.classList.add("doorstatus");
		statusText.innerHTML = "Ungewiss";
	};
	if (this.readyState == 4 && this.status == 200) {
		let stats = JSON.parse(this.responseText);
		if(stats.door === "open") {
			statusText.classList.add("doorstatus-open");
			statusText.innerHTML = "Geöffnet";
		} else if (stats.door === "closed") {
			statusText.classList.add("doorstatus-closed");
			statusText.innerHTML = "Geschlossen";
		}
	}
}
xhttp.open("GET", "https://status.k4cg.org/status.json", true);
xhttp.send();


