# bem te vista

## Especificação do caso de uso - Escolher estilo

### Histórico da Revisão
|  Data  | Versão | Descrição | Autor |
|:-------|:-------|:----------|:------|
| 02/09/2024 | *1.00* | Primeira versão | Lucas de Lima |

### 1. Resumo
Este caso de uso permite que um usuário escolha os estilos pelos quais tem interesse.

### 2. Atores
- Usuário

### 3. Pré-condições
São pré-condições para iniciar este caso de uso:
- O usuário possuir uma conta cadastrada na plataforma

### 4. Pós-condições
Após a execução deste caso de uso, espera que o sistema:
- Armazene os estilos escolhidos e recomende publicações no feed do usuário com base nas suas preferências.

### 5. Fluxos de evento

#### 5.1. Fluxo Principal
|  Ator  | Sistema |
|:-------|:------- |
| --- | 1. O sistema, após o usuário preencher suas informações de cadastro, apresenta a página de escolher estilos | --- |
| 2. O usuário seleciona de 1 a 3 estilos pelos quais tem interesse | --- |
| --- | 3. O sistema valida e armazena os dados cadastrados |
| 4. O usuário é redirecionado para o seu feed | --- |

#### 5.2. Fluxo de exceção

##### 5.2.1 Nenhum estilo selecionado
|  Ator  | Sistema |
|:-------|:------- |
| 2. O usuário não seleciona nenhum estilo | --- |
| --- | 3. O sistema não valida os dados inseridos pelo usuário e exibe uma mensagem de erro ("Selecione pelo menos 1 estilo") |

##### 5.2.2 Muitos estilos selecionados
|  Ator  | Sistema |
|:-------|:------- |
| 2. O usuário seleciona mais de 3 estilos | --- |
| --- | 3. O sistema não valida os dados inseridos pelo usuário e exibe uma mensagem de erro ("Selecione, no máximo, 3 estilos") |

### 6. Página de cadastro de usuário
![Escolha de estilos](https://github.com/user-attachments/assets/f554b18f-5c2e-4ae0-b6e9-17e5b1317e60)

### 7. Dicionário de dados
- Estilos - Uma lista contendo 30 estilos, sendo eles: Andrógino, Artsy, Boho, Casual, Chic, Clássico, Cowboy/Western, Cyberpunk, Esportivo, Futurista, Glam, Gótico, Grunge, Grunge Revival, Hipster, Kawaii, Minimalista, Moderno, Militar, Pin-up, Punk, Preppy, Retro, Roker, Romântico, Safari, Streetwear, Vintage e Y2K
