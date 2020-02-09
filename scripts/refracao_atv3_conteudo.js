/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Partes = ['1', 'C'];
var nomeSoft = 'halos2';

var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			enunciadoGeral: 'Experimente todas as variações proporcionadas pela ferramenta ao lado e responda: por qual das faces o raio poderá sair do cristal?',
			itens:
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_1_a,
					enunciado: '',
					dados:	[
						{value: '1', label: 'apenas pela aresta 3'},
						{value: '2', label: 'apenas pela aresta 2'},
						{value: '3', label: 'pelas arestas 2, 3 e 4'},
						{value: '4', label: 'pelas arestas 2, 3, 4 e 5'}
					],
					msgErro: 'Experimente a possibilidade de deslocar o raio horizontalmente, movendo o ponto <a id="ponto_laranja">laranja</a>, e de girar o hexágono, com o ponto <a id="ponto_azul">azul</a>'
				}
			]
		},
		parte1_q2:	//Questão 2
		{
			enunciadoGeral: 'Qual será o desvio sofrido por qualquer raio que sair pela aresta 3?',
			itens:
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_2_a,
					enunciado: '',
					dados:	[
						{value: '1', label: 'igual ao ângulo de entrada'},
						{value: '2', label: '30&#176;'},
						{value: '3', label: '60&#176;'},
						{value: '4', label: 'nenhum desvio'}
					],
					msgErro: 'Note que a aresta em que os raios incidem é paralela à aresta 3.'
				}
			]
		},
		parte1_q3:	//Questão 3
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_3_a,
					enunciado: 'Qual é o maior desvio que o raio pode sofrer?',
					msgErro: 'Marque a caixa indicada por “Mostrar ângulo de desvio” e varie o ângulo de incidência na face do hexágono. Não se esqueça da atividade anterior.'
				},
				{//B
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_3_b,
					enunciado: 'Com exceção ao caso em que o raio sai pela aresta 3, qual é o menor desvio que ele pode sofrer?',
					msgErro: 'Marque a caixa indicada por “Mostrar ângulo de desvio” e varie o ângulo de incidência na face do hexágono. Não se esqueça da atividade anterior.'
				}
			]
		}
	},
]

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array();

Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
});