function verificaChecks(){
	voto = [0, 0, 0, 0];
	var aChk = document.getElementsByTagName("input");
	for(var i=0; i<aChk.length;i++){
		if(aChk[i].checked==true){
			switch(aChk[i].value){
				case "A": voto[0] = voto[0] +1;
					break;
				case "B":  voto[1] = voto[1] +1;
					break;
				case "C":  voto[2] = voto[2] +1;
					break;
				case "D":  voto[3] = voto[3] +1;
					break;
			}
		}
	}
	mensagem();
}
function mensagem(){
	var intro = "SUA CASA É... "
	var casa = ["GRIFINÓRIA", "SONSERINA", "CORVINAL", "LUFA-LUFA"];
	var fim = "!!"
	if(voto[0]  > voto[1] && voto[0] > voto[2] && voto[0] > voto[3]){resultado = intro + casa[0] + fim;}
	else if (voto[1] > voto[0] && voto[1] > voto[2] && voto[1] > voto[3]){resultado = intro + casa[1] + fim;}
	else if (voto[2] > voto[0] && voto[2] > voto[1] && voto[2] > voto[3]){resultado = intro + casa[2] + fim;}
	else if (voto[3] > voto[0] && voto[3] > voto[1] && voto[3] > voto[2]){resultado = intro + casa[3] + fim;}
	else{resultado = "Hmmm... Percebo que você está confuso e com dúvidas... <br />Você ainda não está preparado para entrar na escola!";}
	result();
}




