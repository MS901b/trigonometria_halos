/******************************
 * Animacao Atividade1 Parte1 *
 ******************************/
// Registra listener da Atividade 1 parte 1.
function registerListeners_p1() {
    var applet = document.ggbApplet;
    applet.registerObjectUpdateListener('Raio1', 'updateListenerR1_p1');
    applet.registerObjectUpdateListener('Raio2', 'updateListenerR2_p1');
    applet.registerObjectUpdateListener('Raio3', 'updateListenerR3_p1');
    applet.registerObjectUpdateListener('α', 'updateListenerAlfa_p1');
}

function updateListenerR1_p1(objName) {
    var applet = document.ggbApplet;

    var alpha = applet.getValueString('α'); //pega o valor do angulo escolhido pelo usuario. "α = 146°"
    alpha = alpha.substring(4, 7);
    alpha = alpha.replace('°', '') //troca o ° (grau) pro espaco vazio.

    if ((objName == 'Raio1') && (alpha <= 90) && (applet.getValue('Raio1') == 1)) { //anima raio2
        animaRaio2_p1();
    }

    if ((objName == 'Raio1') && (alpha > 90) && (applet.getValue('Raio1') == 1)) { //anima raio3
        animaRaio3_p1();
    }
}

function updateListenerR2_p1(objName) {
    var applet = document.ggbApplet;
    if ((objName == 'Raio2') && (applet.getValue('Raio2') == 1)) {
        pararAnimacao_p1(2);
    }
}

function updateListenerR3_p1(objName) {
    var applet = document.ggbApplet;
    if ((objName == 'Raio3') && (applet.getValue('Raio3') == 1)) {
        pararAnimacao_p1(3);
    }
}

function updateListenerAlfa_p1(objName) {
    var applet = document.ggbApplet;
    applet.unregisterObjectUpdateListener('α');
    applet.setVisible('γ', false); //esconde angulo de saida do raio2
    applet.setVisible('β', false); //esconde angulo de saida do raio3
    applet.setVisible('e', false); //esconde tracejado do Raio2
    applet.setVisible('h', false); //esconde tracejado do Raio3

    var alpha = applet.getValueString('α'); //pega o valor do angulo escolhido pelo usuario. "α = 49.69°"
    alpha = alpha.substring(4, 9);
    alpha = alpha.replace('°', ''); //troca o ° (grau) pro espaco vazio.
    //alert(alpha);
    alpha = Math.round(alpha);
    alpha = grausParaRadianos(alpha);

    //alert(alpha);
    //applet.setValue('α',alpha);

    var px = 90 - 30 * Math.sin(alpha);
    var py = 140 + 30 * Math.cos(alpha);

    applet.setCoords('B', px, py);
    applet.registerObjectUpdateListener('α', 'updateListenerAlfa_p1');
}

/**
 * Comeco da animacao da parte 1. Primeira funcao a ser chamda.
 */
function animaRaio_p1() {
    var applet = document.ggbApplet;
    if (!applet.isAnimationRunning()) {
        applet.setVisible('γ', false); //esconde angulo de saida do raio2
        applet.setVisible('β', false); //esconde angulo de saida do raio3
        applet.setVisible('u', true); //mostra vetor (raio1)
        applet.setVisible('v', false); //esconde vetor (raio2)
        applet.setVisible('w', false); //esconde vetor (raio3)
        applet.stopAnimation();
        applet.setValue('Raio1', 0); //volta raio1 para inicio
        applet.setValue('Raio2', 0); //volta raio2 para inicio
        applet.setValue('Raio3', 0); //volta raio3 para inicio
        applet.setAnimating('Raio1', true);
        applet.setAnimating('Raio2', false);
        applet.setAnimating('Raio3', false);
        applet.setAnimationSpeed('Raio1', 7.0);
        applet.startAnimation();
    }
}

/**
 * Animacao do Raio2.
 */
function animaRaio2_p1() {
    var applet = document.ggbApplet;

    if (applet.isAnimationRunning()) {
        applet.stopAnimation();
        applet.setValue('Raio1', 1); //coloca Raio1 no final
        applet.setValue('Raio2', 0); //coloca Raio2 no inicio
        applet.setValue('Raio3', 0); //coloca Raio2 no inicio
        applet.setAnimating('Raio1', false);
        applet.setAnimating('Raio3', false);
        applet.setVisible('e', true); //tracejado do raio2 fica visivel
        applet.setVisible('u', false); //esconde vetor(raio1) de incidencia
        applet.setAnimating('Raio2', true);
        applet.setVisible('v', true); //raio2 (vetor) fica visivel
        applet.setAnimationSpeed('Raio2', 7.0);
        applet.startAnimation();
    }
}

/**
 * Animacao do Raio3.
 */
function animaRaio3_p1() {
    var applet = document.ggbApplet;

    if (applet.isAnimationRunning()) {
        applet.stopAnimation();
        applet.setValue('Raio1', 1); //coloca Raio1 no final
        applet.setValue('Raio2', 0); //coloca Raio2 no inicio
        applet.setValue('Raio3', 0); //coloca Raio2 no inicio
        applet.setAnimating('Raio1', false);
        applet.setAnimating('Raio2', false);
        applet.setVisible('h', true); //mostra tracejado do raio3
        applet.setVisible('u', false); //esconde vetor(raio1)
        applet.setVisible('v', false); //esconde vetor(raio2)
        applet.setAnimating('Raio3', true);
        applet.setVisible('w', true); //mostra vetor(raio3)
        applet.setAnimationSpeed('Raio3', 7.0);
        applet.startAnimation();
    }
}

/**
 * Funcao que irah parar a animacao.
 * @param {Object} raio		qual raio deverah ser parado
 */
function pararAnimacao_p1(raio) {
    var applet = document.ggbApplet;

    applet.stopAnimation();
    applet.setAnimating('Raio1', false);
    applet.setAnimating('Raio2', false);
    applet.setAnimating('Raio3', false);
    applet.setValue('Raio1', 1); //coloca Raio1 no final

    if (raio == 2) {
        applet.setVisible('u', false); //esconde vetor (raio2)
        var angulo = applet.getValueString('γ'); //pega o valor do angulo. "γ = 49.69°"
        angulo = angulo.substring(4, 9);
        angulo = angulo.replace('°', ''); //troca o ° (grau) pro espaco vazio.
        //alert(alpha);
        angulo = Math.round(angulo);
        applet.setVisible('γ', true); //mostra angulo de saida do raio2
    }

    if (raio == 3) {
        applet.setVisible('w', false); //esconde vetor (raio3)
        applet.setVisible('β', true); //mostra angulo de saida do raio3
        var angulo = applet.getValueString('ε'); //pega o valor do angulo. "γ = 49.69°"
        angulo = angulo.substring(4, 9);
        angulo = angulo.replace('°', ''); //troca o ° (grau) pro espaco vazio.
        //alert(alpha);
        angulo = Math.round(angulo);
    }
}

/*************************************
 * Arredondamento: Atividade3 Parte2 *
 *************************************/
//Registra o listener da Atividade3 Parte2 sobre o angulo alpha.
function registerListenersA3_P2() {
    var applet = document.ggbApplet;
    applet.registerObjectUpdateListener('α', 'updateListenerAlfaA3_P2');
}

function updateListenerAlfaA3_P2(objName) {
    var applet = document.ggbApplet;
    applet.unregisterObjectUpdateListener('α');

    var alpha = applet.getValueString('α');
    alpha = alpha.substring(4, 9);
    alpha = alpha.replace('°', ''); //troca o ° (grau) pro espaco vazio.
    alpha = parseFloat(alpha);
    //alert(alpha);

    alpha = alpha + 60;
    //alert(alpha);

    alpha = Math.round(alpha);
    //alert(alpha);

    alpha = grausParaRadianos(alpha);

    var fx = applet.getXcoord('F'); //pega a coordenada X do ponto F(centro do circulo)
    var fy = applet.getYcoord('F'); //pega a coordenada Y do ponto F(centro do circulo)

    var px = fx - Math.sqrt(2.763520621761744) * Math.sin(alpha);
    var py = fy + Math.sqrt(2.763520621761744) * Math.cos(alpha);

    applet.setCoords('I', px, py);
    applet.registerObjectUpdateListener('α', 'updateListenerAlfaA3_P2');
}

/**********************
 * Funcoes de Auxilio *
 **********************/
/**
 * Funcao que calcula o angulo de saida
 * @param {Object} anguloEntrada	angulo de incidencia . Virah em graus.
 * @return	anguloSaida	retorna o angulo de saida em graus
 */
function calculaAnguloSaida(anguloEntrada) {

    var anguloEntrada = grausParaRadianos(anguloEntrada); //converte o angulo de incidencia de graus para radianos
    var anguloSaida = Math.asin(0.75 * Math.sin(anguloEntrada));

    anguloSaida = radianosParaGraus(anguloSaida); //converte para graus

    return anguloSaida;
}

/**
 * Converte um valor de radianos para graus
 * @param {Object} valor	valor em radianos a ser convertido
 */
function radianosParaGraus(valor) {
    var angulo = valor * (180 / Math.PI);

    return angulo;
}

/**
 * Converte um valor de graus pra radianos
 * @param {Object} valor	valor em graus a ser convertido
 */
function grausParaRadianos(valor) {
    var angulo = valor * (Math.PI / 180);

    return angulo;
}

/**
 * Funcao que mostra o angulo de desvio da A3_P2, A3_P3 e A4_P1
 */
function mostrarAnguloDesvio() {
    var applet = document.ggbApplet;
    if (document.getElementById('checkBoxA3_P2').checked) {
        applet.setValue('mostrardesvio', 1);
    } else {
        applet.setValue('mostrardesvio', 0);
    }
}

/**
 * Codigo pego do jogo do maximo.
 */
function setAtividade(nome, estado, forcar) {
    if (forcar == undefined) {
        forcar = false;
    }

    if (!forcar) {
        if ((getResp(nome) < estado) || getResp(nome) == '') {
            setResp(nome, estado);
        }
    } else {
        setResp(nome, estado);
    }
}

function valida(valor) {
    if ((valor == null) || (valor == 'undefined')) {
        return '';
    } else
        valor = valor.replace('.', ',');
    return valor;
}