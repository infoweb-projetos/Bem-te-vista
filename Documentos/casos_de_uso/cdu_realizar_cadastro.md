# bem te vista

## Especificação do caso de uso - Realizar cadastro

### Histórico da Revisão
|  Data  | Versão | Descrição | Autor |
|:-------|:-------|:----------|:------|
| 13/08/2024 | *1.00* | Primeira versão | Lucas de Lima |

### 1. Resumo
Este caso de uso permite que um visitante se cadastre no sistema.

### 2. Atores
- Visitante

### 3. Pré-condições
São pré-condições para iniciar este caso de uso:
- Não possui

### 4. Pós-condições
Após a execução deste caso de uso, espera que o sistema:
- Armazene os dados do usuário cadastrado e, portanto, o permita utilizar as funcionalidades da plataforma

### 5. Fluxos de evento

#### 5.1. Fluxo Principal
|  Ator  | Sistema |
|:-------|:------- |
|1. O visitante aperta no botão "Cadastrar-se" | --- |
| --- |2. O sistema redireciona o visitante para a página de cadastro de usuário | --- |
|3. O visitante insere os seus dados (Nome, Username, E-mail e Senha) e clica em "Criar" | --- |
|--- |4. O sistema valida e armazena os dados cadastrados |
|5. O visitante é redirecionado para o seu feed | --- |

#### 5.2. Fluxo de exceção

##### 5.2.1 Nome em branco
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante não insere seu Nome e clica em "Criar" | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("O campo 'Nome' é obrigatório") |

##### 5.2.2 Username em branco
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante não insere seu Username e clica em "Criar" | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("O campo 'Username' é obrigatório") |

##### 5.2.3 E-mail em branco
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante não insere seu E-mail e clica em "Criar" | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("O campo 'E-mail' é obrigatório") |

##### 5.2.4 Senha em branco
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante não insere sua Senha e clica em "Criar" | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("O campo 'Senha' é obrigatório") |

##### 5.2.5 Nome muito curto
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante insere um Nome muito curto | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("O campo 'Nome' deve ser composto por, no mínimo, 4 letras") |

##### 5.2.6 Nome inválido
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante insere um Nome inválido | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("O campo 'Nome' deve ser composto apenas por letras") |

##### 5.2.7 Username muito curto
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante insere um Username muito curto | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("O campo 'Username' deve ser composto por, no mínimo, 4 caracteres") |

##### 5.2.8 E-mail inválido
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante insere um endereço de E-mail inválido | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("Este não é um endereço de E-mail válido") |

##### 5.2.9 Senha muita curta
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante insere uma Senha muito curta | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("O campo 'Senha' deve ser composto por, no mínimo, 8 caracteres") |

##### 5.2.10 Senha muito fraca
|  Ator  | Sistema |
|:-------|:------- |
|3. O visitante insere uma Senha muito fraca | --- |
|--- |4. O sistema não valida os dados inseridos pelo visitante e exibe uma mensagem de erro ("O campo 'Senha' deve possuir letras maiúsculas e minúsculas, número e caractere especial") |

### 6. Página de cadastro de usuário
![Cadastro](https://github.com/user-attachments/assets/e80b166a-193c-4af6-a57b-f778e538eb8f)

### 7. Dicionário de dados
- Nome - Uma cadeia de caracteres alfabéticos tamanho 30
- Username - Uma cadeia de caracteres alfanuméricos tamanho 15
- E-mail - Uma cadeia de caracteres alfanuméricos tamanho 30
- Senha - Uma cadeia de caracteres alfanuméricos tamanho 20

### 8. Regras de negócio
- Nome - Mínimo de 4 caracteres; iniciado por letras maiúsculas
- Username - Mínimo de 4 caracteres
- E-mail - Um conjunto de caracteres (com exceção dos caracteres especiais, sendo permitido apenas o ponto) seguidos, respectivamente, por um arroba, outro conjunto de letras e um ou mais domínios de topo
- Senha - Mínimo de 8 caracteres; pelo menos uma letra maiúscula e minúscula; um número; um caractere especial
