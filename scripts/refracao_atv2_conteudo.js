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

var Partes = ['1', '2', '3'];
var nomeSoft = 'halos2';

var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			enunciadoGeral: 'Escolha um ângulo de incidência (&#945) na ferramenta ao lado e preencha abaixo.',
			itens:
			[
				{//A
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_1_a,
					enunciado: 'Qual é o valor de alpha (&#945)',
					msgErro: 'Você pode escolher qualquer ângulo de incidência que desejar na ferramenta ao lado. Uma vez escolhido, escreva-o na caixa de texto deste exercício.'
				},
				{//B
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_1_b,
					enunciado: 'Qual é o valor de beta(&#946)?',
					msgErro: 'Basta ler os valores pedidos na ferramenta ao lado.'
				},
				{//C
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_1_c,
					enunciado: 'Qual é o valor de gama(&#947)?',
					msgErro: 'Basta ler os valores pedidos na ferramenta ao lado.'
				},
				{//D
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_1_d,
					enunciado: 'Qual é o valor de delta(&#948)?',
					msgErro: 'Basta ler os valores pedidos na ferramenta ao lado.'
				}
			]
		},
		parte1_q2:	//Questão 2
		{
			enunciadoGeral: 'Com base nas respostas à questão anterior, o que se pode dizer sobre os raios de entrada e de saida?',
			itens:
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_2_a,
					enunciado: '',
					dados:	[
						{value: '1', label: 'são paralelos'},
						{value: '2', label: 'são perpendiculares'},
						{value: '3', label: 'o ângulo entre eles é igual &#945;'},
						{value: '4', label: 'o ângulo entre eles é igual &#946;'},
						{value: '5', label: 'o ângulo ente eles varia de acordo com &#945;'}
					],
					msgErro: 'Observe que os ângulos &#945; e &#948;  são iguais.'
				}
			]
		}
	},
	{//Parte 2
		parte2_q3:	//Questão 3
		{
			enunciadoGeral: 'Qual será o ângulo de saída quando o ângulo de incidência for igual a:',
			itens:
			[
				{//A
					tipo: 'multiplo_input_com_unidade',
					dados:	[
						 		[{antes: '30&#176;', depois: 'graus'}], 
						 		[{antes: '45&#176;', depois: 'graus'}], 
						 		[{antes: '60&#176;', depois: 'graus'}]
							],
					corrigir: corrige_q_3_a,
					enunciado: '',
					msgErro: 'O ângulo de saída está representado por delta, na ferramenta ao lado.'
				}
			]
		},
		parte2_q4:	//Questão 4
		{
			enunciadoGeral: 'Qual é o maior ângulo de incidência na primeira interface para o qual ocorre reflexão total na segunda interface?',
			itens:
			[
				{//A
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_4_a,
					enunciado: '',
					msgErro: 'Vá diminuindo o ângulo de incidência até que o raio, ao sair, seja praticamente paralelo à outra interface.'
				}
			]
		},
		parte2_q5:	//Questão 5
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_5_a,
					enunciado: 'Qual é o maior ângulo de desvio que se pode obter?',
					msgAjuda: 'Marque a opção “mostrar ângulo de desvio” abaixo da ferramenta ao lado',
					msgErro: 'O maior ângulo de desvio acontece quando o raio de incidência é tangente à primeira interface.'
				},
				{//B
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_5_b,
					enunciado: 'E qual é o menor?',
					msgAjuda: 'Marque a opção “mostrar ângulo de desvio” abaixo da ferramenta ao lado',
					msgErro: 'Varie o ângulo de incidência e observe o ângulo de desvio.'
				}
			]
		}
	},
	{//Parte 3
		parte3_q6:	//Questão 6
		{
			enunciadoGeral: 'Movimente o ponto azul para que o ângulo de incidência seja igual a 30&#176;.',
			itens:
			[
				{//A
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_6_a,
					enunciado: 'Qual o ângulo de saída do triângulo?',
					msgErro: 'O ângulo de saída está indicado na ferramenta ao lado, basta posicionar o triângulo de modo que o ângulo de incidência do raio seja igual a 30&#176;.'
				},
				{//B
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_6_b,
					enunciado: 'Qual é o desvio sofrido pelo raio?',
					msgErro: 'Marque a opção Mostrar ângulo de desvio e obtenha o ângulo diretamente da ferramenta.',
					msgAjuda: 'Marque a opção "Mostrar desvio", para salientar outros elementos na ferramenta ao lado.'
				},
				{//C
					tipo: 'multipla_escolha',
					corrigir: corrige_q_6_c,
					enunciado: 'O desvio se altera quando o raio é deslocado verticalmente sem mudar de face de saída?',
					dados:	[
						{value: '1', label: 'sim'},
						{value: '2', label: 'não'}
					],
					msgErro: 'Movimente o ponto amarelo para deslocar o raio verticalmente.',
					msgAjuda: 'Para deslocar o raio de luz verticalmente, movimente o ponto amarelo. Mas faça isso sem que o raio de saída mude de face.'
				}
			]
		},
		parte3_q7:	//Questão 7
		{
			enunciadoGeral: 'Encontre um ângulo de incidência para o qual ocorra reflexão total.',
			itens:
			[
				{//A
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_7_a,
					enunciado: '',
					msgErro: 'Gire o triângulo movendo o ponto azul até que o raio não refrate para fora do triângulo.'
				}
			]
		},
		parte3_q8:	//Questão 8
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_8_a,
					enunciado: 'Qual é o menor ângulo de desvio que pode ser obtido?',
					msgErro: 'Marque a opção Mostrar ângulo de desvio e gire o triângulo até obter o valor pedido.'
				},
				{//B
					tipo: 'input',
					depois: 'graus',
					corrigir: corrige_q_8_b,
					enunciado: 'Qual é o maior ângulo de desvio que pode ser obtido?',
					msgErro: 'Marque a opção Mostrar ângulo de desvio e gire o triângulo até obter o valor pedido.',
					msgAjuda: 'Marque a opção "Mostrar desvio", para salientar outros elementos na ferramenta ao lado.'
				}
			]
		}
	}
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