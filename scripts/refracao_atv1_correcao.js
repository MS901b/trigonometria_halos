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
	registerListeners_p1();
	setAtividade('atividade_1',2,false);	//Comecou a fazer a atividade_1
	
	//Carrega valores iniciais
	$('parte1_q1_a').value = valida(getResp('atividade1_parte1_q1_a'));
	$('parte1_q1_b').value = valida(getResp('atividade1_parte1_q1_b'));
	
	Event.observe('parte1_q1_a', 'change', function(evento){
		setResp('atividade1_parte1_q1_a',$('parte1_q1_a').value);
	});
	Event.observe('parte1_q1_b', 'change', function(evento){
		setResp('atividade1_parte1_q1_b',$('parte1_q1_b').value);
	});
	
}			


function tudoCerto() {
	setAtividade('atividade_1',3,true);	//atividade_1 estah feita
	setAtividade('atividade_2',1,false);	//atividade_2 estah liberada
	setAtividade('atividade_3',1,false);	//atividade_3 estah liberada
}

function corrige_q_1_a(valor) {
	valor[0] = valor[0].replace(',','.');
	
	var angulo = grausParaRadianos(40);

	var resp = Math.asin(1/1.33 * (Math.sin(angulo)));
	var resp = Math.round(radianosParaGraus(resp));

	return [Math.round(resp) == Math.round(valor[0])];
}

function corrige_q_1_b(valor) {
	valor[0] = valor[0].replace(',','.');
	
	var angulo = grausParaRadianos(30);

	var resp = Math.asin(1.33 * (Math.sin(angulo)));
	var resp = Math.round(radianosParaGraus(resp));

	return [Math.round(resp) == Math.round(valor[0])];
}
