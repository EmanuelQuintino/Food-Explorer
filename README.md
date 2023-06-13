# Food Explorer

Food Explorer é uma aplicação de menu interativo para as vendas de um restaurante. Ela permite que os usuários visualizem os pratos disponíveis, obtenham informações detalhadas sobre cada um deles e realizem seus pedidos. O administrador com acesso a recursos adicionais, como a capacidade de adicionar, editar e excluir pratos do menu, pode gerenciar os pedidos individualmente a atualizar o status em "Pendente", "Preparando" e "Entregue".

![Food Explorer](./public/images-layout/home.png)

## Funcionalidades
- Autenticação: Autenticação feita através de um sistema de login usando JWT (JSON Web Tokens) para acessar o sistema.
- Busca de Pratos: Tanto o usuário quanto o admin podem realizar buscas pelo nome do prato ou pelos ingredientes.
- Visualização de pedidos em tabela com opção de busca por código ou status.

### Admin

- Cadastro de Pratos: Fornecer nome, categoria, descrição, ingredientes, preço e upload de imagem.
- Gerenciar pratos: O Admin pode editar os dados e excluir cada prato.

### Usuário

- Visualização de todos os pratos cadastrados.
- Adição de pratos ao carrinho.
- Controle da quantidade de itens no carrinho.
- Exclusão de pratos do carrinho.
- Marcação de pratos como favoritos.
- Visualização do pedido, soma total e métodos de pagamento.

## Tecnologias Utilizadas

- React.js
- TypeScript
- Styled-Components
- React-Router-Dom
- React-Hook-Form
- Tanstack-Query 
- Axios

## Como Executar o Projeto

1. Clonar repositório: `git clone https://github.com/EmanuelQuintino/Food-Explorer.git`
2. Instalar dependências: `npm install`
3. Executar projeto: `npm run dev`

## Links Úteis

![Deploy](https://project-food-explorer.netlify.app/)
[Repositório da API](https://github.com/EmanuelQuintino/Food-Explorer-API)
