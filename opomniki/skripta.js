window.addEventListener('load', function() {
	//stran nalozena
	
	// Izvedi prijavo
	var izvediPrijavo = function(event) {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	
	// Dodaj opomnike
	var dodajOpomnik= function() {
		var naziv_opomnika = document.querySelector("#naziv_opomnika").value;
		var cas_opomnika = document.querySelector("#cas_opomnika").value;
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		document.querySelector("#opomniki").innerHTML += " \
			<div class='opomnik rob senca'> \
				<div class='naziv_opomnika'>" + naziv_opomnika + "</div> \
				<div class='cas_opomnika'>Opomnik čez <span>" + cas_opomnika + 
					"</span> sekund.</div> \
			</div>";
	}
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TO-DO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			if (cas == 0) {
				var naziv_opomnika = opomnik.querySelector(".naziv_opomnika").innerHTML;
				alert("Opomnik!\n\nZadolžitev '" + naziv_opomnika + "' je potekla!");
				document.querySelector("#opomniki").removeChild(opomnik);
			}
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			else {
				casovnik.innerHTML = cas -1;
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
});