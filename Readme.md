# leal-to-do-list

O objetivo do projeto **leal-to-do-list** é ser uma aplicação web que gerencie listas de tarefas de maneira simplificada.


## Endereço de Deploy

[Leal To Do List](https://wellfernandes.github.io/leal-to-do-list/)
--

## Protótipo

[Figma](https://www.figma.com/file/Fx6p9FhgpXGgVskQWMRHMn/leal-to-do-list?type=design&node-id=0%3A1&mode=design&t=GMttoa5H23AW3AaG-1)
--

## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade no JSON Server.
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf
- [x] Formatar a apresentação de dados com Pipes.
- [x] Build e deploy da aplicação.

## Manual de execução
É necessário ter o [Node.js](https://nodejs.org/) instalado em seu sistema operacional.
1. Clone o repositório:

```bash
git clone git@github.com:wellfernandes/leal-to-do-list.git
cd leal-to-do-list
```
2. Abra o projeto com a IDE de sua preferência e instale todas as dependências necessárias executando o comando:
 ```bash
npm install
```

3. Utilizamos um servidor JSON para simular uma API REST, para executá-lo execute o comando:
 ```bash
json-server --watch db.json --routes routes.json
```
4. Execute o projeto Angular com o comando:
 ```bash
ng serve --open
```
5. Caso o seu navegador não abra automaticamente, acesse o endereço `http://localhost:4200/` em seu navegador para visualizar a aplicação executando localmente.

## Resolução de Problemas
1. Caso o comando json-server não seja encontrado pela IDE:
- Abra o terminal e execute o comando e execute o comando como administrador (sudo no Linux ou macOS):
 ```bash
npm install -g json-server
```
- Logo após execute o novamente o comando:
 ```bash
json-server --watch db.json --routes routes.json
```
---
[Linkedin](https://www.linkedin.com/in/wellitonfernandes/) - [Contato](https://wellitonleal.com.br) 