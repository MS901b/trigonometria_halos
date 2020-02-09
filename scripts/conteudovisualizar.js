	var codigo_do_software = "halos2";
	var nome_do_software = "Trigonometria e Halos";
	var tipo = "software v2.0";


	var Impressao = $H({
	    software: {
	        titulo: 'O software',
	        id: 'software',
	        arquivo: 'index.html',
	        conteudo: 'Essa é o material para ser utilizado diretamente pelos alunos.'
	    },
	    guia_professor_tela: {
	        titulo: 'Guia do Professor - Visualização em Tela',
	        id: 'guia1',
	        arquivo: 'guia/tela.pdf',
	        conteudo: 'Essa é a versão do Guia do Professor para visualiação em tela (formato PDF).'
	    },
	    guia_professor_caseiro: {
	        titulo: 'Guia do Professor - Impressão Caseira',
	        id: 'guia2',
	        arquivo: 'guia/impressao.pdf',
	        conteudo: 'Essa é a versão do Guia do Professor adequada para impressão caseira (formato PDF).'
	    }
	});
	var Visualizacao = $H({});
	var FichaTecnica = $H({

	    tema: {
	        titulo: 'Tema',
	        conteudo: 'Geometria e Medidas / Som, Imagem e Informação (Física)'
	    },
	    sinopse: {
	        titulo: 'Sinopse',
	        conteudo: 'O software simula a emissão e refração de raios luminosos a fim de perimitir a compreenão dos halos solares e lunares. Este software educacional assume como conhecida pelo usuário a Lei de Snell para refração da luz.'
	    },
	    conteudos: {
	        titulo: 'Conteúdo',
	        conteudo: 'Trigonometria, Função Seno e Função Arco Seno; Física, Raios Luminosos e Lei de Snell.'
	    },
	    objetivos: {
	        titulo: 'Objetivos',
	        conteudo: 'Investigar e compreender o fenômeno dos halos lunares e solares através de uma análise trigonométrica da refração de raios luminosos em certas formas geométricas.'
	    },
	    duracao: {
	        titulo: 'Duração',
	        conteudo: 'Uma aula dupla.'
	    },
	    requisitos: {
	        titulo: 'Requisitos de software',
	        conteudo: 'Navegador moderno (Chrome 70+ ou Firefox 62+). O suporte não é garantido para dispositivos mobiles.'
	    },
	    acessibilidade: {
	        titulo: 'Restrições de acessibilidade',
	        conteudo: 'Não há suporte para navegação exclusiva via teclado e recurso nativo de alto contraste.'
	    }
	    /*,
	    		recursos: {
	    			titulo: 'Recursos relacionados',
	    			conteudo: 'Vídeo: O Crime da Rua do Gasômetro;<br />Áudio: Fraude 171;<br/>Software: Probabilidade com Urnas'
	    		}*/
	});

	var como_usar = 'Aqui você encontra três arquivos: O Software, O Guia do Professor para visualização em Tela e o Guia do Professor para impressão caseira. O Software é o material que deve ser utilizado diretamente pelos seus alunos, enquanto que o Guia do Professor traz alguns aprofundamentos teóricos e recomendações metodológicas para o uso deste material.';
	var sobre_projeto = 'M³ &ndash; Matemática MultiMídia é uma coleção de materiais didáticos disponíveis em mídias digitais para o uso do professor de matemática do ensino médio no Brasil e facilitar o ensino-aprendizagem. Composta por áudios, experimentos, softwares e vídeos, a coleção foi desenvolvida, entre 2008 e 2010, por uma grande equipe de professores e estudantes da Unicamp e vários colaboradores, tendo contado com recursos do FNDE, do MEC e do MCT. Para maiores detalhes sobre a utilização da coleção M³&nbsp;&ndash;&nbsp;Matemática Multimídia, consulte o Guia do Professor. A versão 2.0 foi lançada em 2020, como uma medida para garantir que o software tivesse suporte aos novos sistemas.';
	var sobre_licensas = 'O Guia do Professor está licenciado sob uma licença Creative Commons, e o Software está licenciado sob uma licença GPL v. 2.';
	var link_fnde = 'http://www.fnde.gov.br/';
	var link_seed = 'http://portal.mec.gov.br/seed';
	var link_mct = 'http://www.mct.gov.br/';
	var link_mec = 'http://www.mec.gov.br/';
	var link_governo = 'http://www.brasil.gov.br/';
	var site_projeto = 'http://m3.ime.unicamp.br/portal/';