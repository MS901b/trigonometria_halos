var SalvaLocalLoaded = false;
var GGBLoaded = false;
var HTMLLoaded = false;

Event.observe(window, 'load', function(){
	HTMLLoaded = true;
	checkInits();
});


document.observe("flash:SalvaLocal", function()
{
	SalvaLocalLoaded = true;
	checkInits();
});

function ggbOnInit() {
	GGBLoaded = true;
	checkInits();
}

function checkInits() {
	// Checagem se tanto SalvaLocal e Geogebra foram carregados.
	if  (SalvaLocalLoaded && GGBLoaded && HTMLLoaded) InitOnLoad();
}

function InitOnLoad(){

	//BlocoNotas = new Blocao();

	switch (PosicaoAtual.Parte) {
		
		case 0://Parte1
			setAtividade('atividade_2',2,false);	//Comecou a fazer a atividade_2

			$('parte1_q1_a').value = valida(getResp('atividade2_parte1_q1_a'));
			$('parte1_q1_b').value = valida(getResp('atividade2_parte1_q1_b'));
			$('parte1_q1_c').value = valida(getResp('atividade2_parte1_q1_c'));
			$('parte1_q1_d').value = valida(getResp('atividade2_parte1_q1_d'));

			$('parte1_q2_a_1').checked=(getResp('atividade2_parte1_q2')=='1');
			$('parte1_q2_a_2').checked=(getResp('atividade2_parte1_q2')=='2');
			$('parte1_q2_a_3').checked=(getResp('atividade2_parte1_q2')=='3');
			$('parte1_q2_a_4').checked=(getResp('atividade2_parte1_q2')=='4');
			$('parte1_q2_a_5').checked=(getResp('atividade2_parte1_q2')=='5');
			
			Event.observe('parte1_q1_a', 'change', function(evento){
				setResp('atividade2_parte1_q1_a',$('parte1_q1_a').value);
			});
			Event.observe('parte1_q1_b', 'change', function(evento){
				setResp('atividade2_parte1_q1_b',$('parte1_q1_b').value);
			});
			Event.observe('parte1_q1_c', 'change', function(evento){
				setResp('atividade2_parte1_q1_c',$('parte1_q1_c').value);
			});
			Event.observe('parte1_q1_d', 'change', function(evento){
				setResp('atividade2_parte1_q1_d',$('parte1_q1_d').value);
			});

			Event.observe('parte1_q2_a_1', 'change', function(evento){
				setResp('atividade2_parte1_q2',$('parte1_q2_a_1').value);
			});
			Event.observe('parte1_q2_a_2', 'change', function(evento){
				setResp('atividade2_parte1_q2',$('parte1_q2_a_2').value);
			});
			Event.observe('parte1_q2_a_3', 'change', function(evento){
				setResp('atividade2_parte1_q2',$('parte1_q2_a_3').value);
			});
			Event.observe('parte1_q2_a_4', 'change', function(evento){
				setResp('atividade2_parte1_q2',$('parte1_q2_a_4').value);
			});
			Event.observe('parte1_q2_a_5', 'change', function(evento){
				setResp('atividade2_parte1_q2',$('parte1_q2_a_5').value);
			});

			break;
		
		case 1://Parte2
			registerListenersA3_P2();
			$('parte2_q3_a_11').value = valida(getResp('atividade2_parte2_q3_a_11'));
			$('parte2_q3_a_21').value = valida(getResp('atividade2_parte2_q3_a_21'));
			$('parte2_q3_a_31').value = valida(getResp('atividade2_parte2_q3_a_31'));
			$('parte2_q4_a').value = valida(getResp('atividade2_parte2_q4_a'));
			$('parte2_q5_a').value = valida(getResp('atividade2_parte2_q5_a'));
			$('parte2_q5_b').value = valida(getResp('atividade2_parte2_q5_b'));
			
			Event.observe('parte2_q3_a_11', 'change', function(evento){
				setResp('atividade2_parte2_q3_a_11',$('parte2_q3_a_11').value);
			});
			Event.observe('parte2_q3_a_21', 'change', function(evento){
				setResp('atividade2_parte2_q3_a_21',$('parte2_q3_a_21').value);
			});
			Event.observe('parte2_q3_a_31', 'change', function(evento){
				setResp('atividade2_parte2_q3_a_31',$('parte2_q3_a_31').value);
			});
			Event.observe('parte2_q4_a', 'change', function(evento){
				setResp('atividade2_parte2_q4_a',$('parte2_q4_a').value);
			});
			Event.observe('parte2_q5_a', 'change', function(evento){
				setResp('atividade2_parte2_q5_a',$('parte2_q5_a').value);
			});
			Event.observe('parte2_q5_b', 'change', function(evento){
				setResp('atividade2_parte2_q5_b',$('parte2_q5_b').value);
			});
			
			break;
		
		default://Parte3
			$('parte3_q6_a').value = valida(getResp('atividade2_parte3_q6_a'));
			$('parte3_q6_b').value = valida(getResp('atividade2_parte3_q6_b'));
			$('parte3_q6_c_1').checked=(getResp('atividade3_parte3_q6_c')=='1');
			$('parte3_q6_c_2').checked=(getResp('atividade3_parte3_q6_c')=='2');
			$('parte3_q7_a').value = valida(getResp('atividade2_parte3_q7_a'));
			$('parte3_q8_a').value = valida(getResp('atividade2_parte3_q8_a'));
			$('parte3_q8_b').value = valida(getResp('atividade2_parte3_q8_b'));
			
			Event.observe('parte3_q6_a', 'change', function(evento){
				setResp('atividade2_parte3_q6_a',$('parte3_q6_a').value);
			});
			Event.observe('parte3_q6_b', 'change', function(evento){
				setResp('atividade2_parte3_q6_b',$('parte3_q6_b').value);
			});
			Event.observe('parte3_q6_c_1', 'change', function(evento){
				setResp('atividade3_parte3_q6_c',$('parte3_q6_c_1').value);
			});
			Event.observe('parte3_q6_c_2', 'change', function(evento){
				setResp('atividade3_parte3_q6_c',$('parte3_q6_c_2').value);
			});
			Event.observe('parte3_q7_a', 'change', function(evento){
				setResp('atividade2_parte3_q7_a',$('parte3_q7_a').value);
			});
			Event.observe('parte3_q8_a', 'change', function(evento){
				setResp('atividade2_parte3_q8_a',$('parte3_q8_a').value);
			});
			Event.observe('parte3_q8_b', 'change', function(evento){
				setResp('atividade2_parte3_q8_b',$('parte3_q8_b').value);
			});

			break;
	}
}

function tudoCerto() {
	if(PosicaoAtual.Parte == 2) {//Parte3 -> ultima parte
		setAtividade('atividade_2',3,true);		//atividade_2 estah feita
	}
}

function corrige_q_1_a(valor) {
	var applet = document.ggbApplet;
	var anguloIncidencia = applet.getValueString('α');	//pega o valor do angulo escolhido pelo usuario. "α = 27°"

	anguloIncidencia = anguloIncidencia.substring(4, 6);
	anguloIncidencia = anguloIncidencia.replace('°','')	//troca o ° (grau) pro espaco vazio.
	
	return [valor[0] == anguloIncidencia];
}

function corrige_q_1_b(valor) {
	var applet = document.ggbApplet;
	var anguloIncidencia = applet.getValueString('β');	//pega o valor do angulo escolhido pelo usuario.

	anguloIncidencia = anguloIncidencia.substring(4, 6);
	anguloIncidencia = anguloIncidencia.replace('°','')	//troca o ° (grau) pro espaco vazio.
	
	return [valor[0] == anguloIncidencia];
}

function corrige_q_1_c(valor) {
	var applet = document.ggbApplet;
	var anguloIncidencia = applet.getValueString('γ');	//pega o valor do angulo escolhido pelo usuario.

	anguloIncidencia = anguloIncidencia.substring(4, 6);
	anguloIncidencia = anguloIncidencia.replace('°','')	//troca o ° (grau) pro espaco vazio.
	
	return [valor[0] == anguloIncidencia];
}

function corrige_q_1_d(valor) {
	var applet = document.ggbApplet;
	var anguloIncidencia = applet.getValueString('δ');	//pega o valor do angulo escolhido pelo usuario.

	anguloIncidencia = anguloIncidencia.substring(4, 6);
	anguloIncidencia = anguloIncidencia.replace('°','')	//troca o ° (grau) pro espaco vazio.
	
	return [valor[0] == anguloIncidencia];
}

function corrige_q_2_a(valor) {
	return [valor[0]?true:null, valor[1]?false:null, valor[2]?false:null, valor[3]?false:null, valor[4]?false:null];
}

function corrige_q_3_a(valor) {
	return [(valor[0] == 55), (valor[1] == 38), (valor[2] == 26)];
}

function corrige_q_4_a(valor) {
	return [valor[0] == 15];
}

function corrige_q_5_a(valor) {
	return [valor[0] == 45];
}

function corrige_q_5_b(valor) {
	return [valor[0] == 23];
}

function corrige_q_6_a(valor) {
	return [valor[0] == 55 || valor[0] == 54];
}

function corrige_q_6_b(valor) {
	return [valor[0] == 25];
}

function corrige_q_6_c(valor) {
	return [valor[0]?false:null, valor[1]?true:null];
}

function corrige_q_7_a(valor) {
	if(validaResp(valor[0])) {
		return[valor[0] <= 15];
	}
	return [false];
}

function corrige_q_8_a(valor) {
	return [valor[0] == 23];
}

function corrige_q_8_b(valor) {
	return [valor[0] == 45];
}



