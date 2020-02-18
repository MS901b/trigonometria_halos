var SalvaLocalLoaded = true;
var GGBLoaded = false;
var HTMLLoaded = false;

Event.observe(window, 'load', function() {
    HTMLLoaded = true;
    checkInits();
});


function ggbOnInit() {
    GGBLoaded = true;
    checkInits();
}

function checkInits() {


    if (PosicaoAtual.Parte == 1) GGBLoaded = true;

    // Checagem se tanto SalvaLocal e Geogebra foram carregados.
    if (SalvaLocalLoaded && GGBLoaded && HTMLLoaded) InitOnLoad();


}

function InitOnLoad() {

    switch (PosicaoAtual.Parte) {

        case 0: //Parte1
            setAtividade('atividade_3', 2, false); //Comecou a fazer a atividade_3

            $('parte1_q1_a_1').checked = (getResp('atividade3_parte1_q1_a') == '1');
            $('parte1_q1_a_2').checked = (getResp('atividade3_parte1_q1_a') == '2');
            $('parte1_q1_a_3').checked = (getResp('atividade3_parte1_q1_a') == '3');
            $('parte1_q1_a_4').checked = (getResp('atividade3_parte1_q1_a') == '4');

            $('parte1_q2_a_1').checked = (getResp('atividade3_parte1_q2_a') == '1');
            $('parte1_q2_a_2').checked = (getResp('atividade3_parte1_q2_a') == '2');
            $('parte1_q2_a_3').checked = (getResp('atividade3_parte1_q2_a') == '3');
            $('parte1_q2_a_4').checked = (getResp('atividade3_parte1_q2_a') == '4');

            $('parte1_q3_a').value = valida(getResp('atividade3_parte1_q3_a'));
            $('parte1_q3_b').value = valida(getResp('atividade3_parte1_q3_b'));

            Event.observe('parte1_q1_a_1', 'change', function(evento) {
                setResp('atividade3_parte1_q1_a', $('parte1_q1_a_1').value);
            });
            Event.observe('parte1_q1_a_2', 'change', function(evento) {
                setResp('atividade3_parte1_q1_a', $('parte1_q1_a_2').value);
            });
            Event.observe('parte1_q1_a_3', 'change', function(evento) {
                setResp('atividade3_parte1_q1_a', $('parte1_q1_a_3').value);
            });
            Event.observe('parte1_q1_a_4', 'change', function(evento) {
                setResp('atividade3_parte1_q1_a', $('parte1_q1_a_4').value);
            });

            Event.observe('parte1_q2_a_1', 'change', function(evento) {
                setResp('atividade3_parte1_q2_a', $('parte1_q2_a_1').value);
            });
            Event.observe('parte1_q2_a_2', 'change', function(evento) {
                setResp('atividade3_parte1_q2_a', $('parte1_q2_a_2').value);
            });
            Event.observe('parte1_q2_a_3', 'change', function(evento) {
                setResp('atividade3_parte1_q2_a', $('parte1_q2_a_3').value);
            });
            Event.observe('parte1_q2_a_4', 'change', function(evento) {
                setResp('atividade3_parte1_q2_a', $('parte1_q2_a_4').value);
            });

            Event.observe('parte1_q3_a', 'change', function(evento) {
                setResp('atividade3_parte1_q3_a', $('parte1_q3_a').value);
            });
            Event.observe('parte1_q3_b', 'change', function(evento) {
                setResp('atividade3_parte1_q3_b', $('parte1_q3_b').value);
            });

            break;

        case 1: //Parte C
            setAtividade('atividade_3', 3, false);

        default:
            break;
    }
}


function tudoCerto() {
    if (PosicaoAtual.Parte == 1) { //Parte2 -> ultima parte
        setAtividade('atividade_3', 3, true); //atividade_3 estah feita
    }
}

function corrige_q_1_a(valor) {
    return [valor[0] ? false : null, valor[1] ? false : null, valor[2] ? true : null, valor[3] ? false : null];
}


function corrige_q_2_a(valor) {
    return [valor[0] ? false : null, valor[1] ? false : null, valor[2] ? false : null, valor[3] ? true : null];
}

function corrige_q_3_a(valor) {
    return [valor[0] == 45];
}

function corrige_q_3_b(valor) {
    return [valor[0] == 23];
}