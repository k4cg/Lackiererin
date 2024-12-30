let xhttp = new XMLHttpRequest();
xhttp.timeout = 10000;
xhttp.onreadystatechange = function () {
	let statusText = document.getElementById("p-banner");

	const now = new Date();
	if ((now.getMonth()+1 == 12) && (now.getDate() >= 27) && (now.getDate() <= 30)) {
		statusText.classList.add("doorstatus-congress");
		statusText.innerHTML = "Congress";
	} else {
		if (this.readyState == 4) {
			statusText.classList.add("doorstatus");
			statusText.innerHTML = "Ungewiss";
		};
		if (this.readyState == 4 && this.status == 200) {
			try {
				let spaceapi = JSON.parse(this.responseText);
				if (spaceapi.state.open) {
					statusText.classList.add("doorstatus-open");
					statusText.innerHTML = "Geöffnet";
				} else {
					statusText.classList.add("doorstatus-closed");
					statusText.innerHTML = "Geschlossen";
				}
			} catch (error) {
				console.error("Error fetching door status", error);
			}
		}
	}
}
xhttp.open("GET", "https://spaceapi.k4cg.org/spaceapi.json", true);
xhttp.send();
