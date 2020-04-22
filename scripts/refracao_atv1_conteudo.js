/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/

var IdPadrao = [
    ['parte/parte', 'q/questao', '/itemletra', '/subitem'], '_'
];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Partes = ['1'];
var nomeSoft = 'halos2';

var Questoes = [{ //Parte 1
    parte1_q1: //Questão 1
    {
        enunciadoGeral: 'Sabendo que o valor de k quando o raio passa da água para o ar é igual a 1,33, responda as questões a seguir:',
        itens: [

            { //A
                tipo: 'input',
                depois: 'graus',
                corrigir: corrige_q_1_a,
                enunciado: 'Assumindo que os meios branco (de cima) e azul (de baixo) são, respectivamente, ar e água, qual é o ângulo de saída se, partindo do ar, o raio incidir na superfície com um ângulo igual a 40&#176;?',
                msgErro: 'Utilize a Lei de Snell com &#945; igual a 40&#176; e k=1/1,33.',
                msgAjuda: 'Se desejar, use a calculadora para os cálculos'
            },
            { //B
                tipo: 'input',
                depois: 'graus',
                corrigir: corrige_q_1_b,
                enunciado: 'Qual é o ângulo de saída se, partindo da água,  o raio incidir na superfície com um ângulo igual a 30&#176;?',
                msgErro: 'Utilize a Lei de Snell com &#945; igual a 30&#176; e k=1,33.',
                msgAjuda: 'Se desejar, use a calculadora para os cálculos'
            }
        ]
    }
}]

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array();

Event.observe(window, 'load', function() {
    BlocoNotas = new Bloco();
});