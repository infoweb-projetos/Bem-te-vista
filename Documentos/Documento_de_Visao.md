# Documento de visão

## bem te vista

### Histórico da Revisão 
|  Data  | Versão | Descrição | Autor |
|:-------|:-------|:----------|:------|
| 17/05/2024 | **1.00** | Versão Inicial  | Iraikare Rodrigues |
| 13/08/2024 | **2.00** | Correção geral  | Lucas de Lima |

## 1. Objetivo do Projeto 
Este projeto tem o objetivo de desenvolver um site que sirva de plataforma para os usuários explorarem diferentes estilos, publicarem suas combinações de roupas e discutirem moda uns com os outros.
 
## 2. Descrição do problema 
| | |
|:-|:-|
| **_O problema_**    | é a inexistência de uma plataforma voltada para o descobrimento de seu estilo pessoal, que possa, além disso, oferecer a possibilidade de criar comunidades com usuários com interesses em comum   |
| **_afetando_**      | brasileiros interessados em moda                      |
| **_cujo impacto é_**| o contentamento com plataformas como Pinterest ou Instagram, que por não serem sistemas focados na problemática, acabam não sendo uma solução eficaz.                                    |
| **_uma boa solução seria_** | uma rede social gratuita, usável e segura com interface mínima e simples. Seu foco seria exclusivo em moda, mas possuiria diferentes funcionalidades de marketplaces e gerenciadores de guarda-roupas  | 

## 3. Descrição dos usuários
| Nome | Descrição | Responsabilidades |
|:- |:- |:- |
| Visitante   | Usuário que visualiza o site; O visitante deve ter a possibilidade de obter, via compartilhamentos externos, informações acerca das postagens, sem a necessidade de registrar suas informações cadastrais no site. | O visitante deve poder consultar as postagens de maneira limitada, sem capacidade de navegação pelo site; Caso deseje, poderá criar um registro de usuário com senha de forma a possibilitar o acesso completo à plataforma. |
| Usuário | Usuário registrado que, após realizar seu cadastro no site, poderá publicar postagens e navegar livremente | Após a realização da inclusão de dados cadastrais como *login* e senha, o visitante passa a ser identificado como usuário, que poderá, a partir de agora, fazer publicações e interagir com a rede social |

## 4. Descrição do ambiente dos usuários 

A rede social tem um tipo de usuário cadastrado. O usuário acessa a plataforma de qualquer dispositivo que permita a participação na web e realiza interações como curtir, comentar, publicar e salvar.

## 5. Principais necessidades dos usuários

A principal necessidade do usuário é ter acesso a uma plataforma que consiga condensar, de maneira efetiva, através de um sistema de recomendações individuais, a multiplicidade de estilos existentes em grupos com os quais ele possa se identificar. 

## 6. Alternativas concorrentes

Pode-se dividir os concorrentes à plataforma em dois: aqueles que possuem foco exclusivo em moda, como o *Whering*, *Shoplook* e *Getwardrobe*, possuindo problemas como falta de interatividade, funções pagas e pouca acessibilidade para o público brasileiro; e as plataformas gerais, que, por não possuírem foco temático em moda, tornam-se complexas para quem deseja as utilizar com esse intuito, como o Instagram e o Pinterest.

## 7. Visão geral do produto 

A plataforma Bem te vista é uma rede social focada na publicação e exploração de estilos de moda. Por meio de uma interface mínima e simples, a plataforma visa ter praticidade para que o usuário consiga entender suas ferramentas com pouco tempo de uso. O aplicativo será dividido em quatro principais abas: 1) Um feed personalizado a partir de contas que o usuário segue ou semelhantes; 2) Uma aba de exploração geral com itens e publicações randômicas, para permitir ao usuário ter contato estilos diferentes dos que se interessa; 3) Uma grade de itens baseados nas suas preferências e 4) uma aba para o perfil do utilizador logado, contendo suas principais informações, como porcentagens de estilos, interesses, publicações e entre outros. As interações da aplicação podem ser dividas em: seguir, curtir, comentar e salvar. A ideia geral é de que o utilizador consiga publicar suas combinações de roupas e interagir com outras pessoas, que possam ter estilo similar ou não, dessa forma, contribuindo para um maior senso de moda e identidade própria.

## 8.	Requisitos funcionais
| Código | Nome | Descrição |
|:---  |:--- |:--- |
| F01	| Realizar cadastro e login na plataforma | O visitante pode se cadastrar usando seus dados para conseguir acesso às funcionalidades de um registrado.
| F02	| Revisar os dados cadastrais	| O registrado pode alterar seus dados cadastrais, com exceção do dado que o identifique, sendo esse o e-mail.
| F03	| Publicar no Feed inicial	| O registrado pode publicar suas ideias de moda na página inicial da aplicação.
| F04	| Publicar itens	| O registrado pode publicar um item de seu interesse para as abas de itens.
| F05	| Visualizar publicações já registradas	| O registrado pode visualizar publicações feitas por todos os usuários, incluindo a si mesmo.
| F06	| Excluir publicações	| O registrado pode excluir sua publicação do registro da plataforma.
| F07	| Comentar em publicações	| O registrado pode fazer comentários em publicações que sejam suas ou não, desde que não viole as diretrizes da comunidade.
| F08	| Curtir publicações	| O registrado pode curtir publicações de outros usuários para que o sistema entenda melhor suas preferências.
| F09	| Guardar publicações	| O registrado pode guardar publicações para manter uma biblioteca pessoal.
| F10	| Visualizar publicações guardadas | O registrado pode visualizar suas publicações guardadas em uma listagem.
| F11	| Excluir a própria conta	| O registrado pode excluir sua própria conta do registro da plataforma.
| F12	| Montar combinações de itens guardados	| O registrado pode montar combinações de roupas com os itens que tenha salvo em sua biblioteca.
| F13 | Denunciar perfis e postagens	| O registrado pode denunciar perfis ou postagens de outros usuários que estejam violando os termos de uso da plataforma.

## 9.	Requisitos não-funcionais
| Código | Nome | Descrição | Categoria | Classificação |
|:---  |:--- |:--- |:--- |:--- |
| NF01	| Design responsivo	| O site apresentará responsividade, deixando-o mais confortável para o usuário | Usabilidade	| Desejável
| NF02	| Acesso somente com internet	| É necessário um acesso contínuo à Internet para poder acessar os dados do site e suas funcionalidades	| Disponibilidade	| Obrigatório
| NF03	| Criptografia das informações sensíveis aos usuários	| Senhas do usuário devem ser gravadas de forma criptografada no banco de dados	| Segurança	| Obrigatório
| NF04	| Organização do conteúdo de forma objetiva	| O site apresentará o conteúdo de forma objetiva, de modo que o usuário encontre o desejado com facilidade.	| Usabilidade	| Obrigatório
