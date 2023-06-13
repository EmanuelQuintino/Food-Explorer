# Food Explorer

Food Explorer é uma aplicação de menu interativo para as vendas de um restaurante. Ela permite que os usuários visualizem os pratos disponíveis, obtenham informações detalhadas sobre cada um deles e realizem seus pedidos. O administrador com acesso a recursos adicionais, como a capacidade de adicionar, editar e excluir pratos do menu, pode gerenciar os pedidos individualmente a atualizar o status em "Pendente", "Preparando" e "Entregue".

![Food Explorer](./public/images-layout/home.png)

## Funcionalidades

- O login é feito usando JWT (JSON Web Tokens) para acessar o sistema.
- Tanto o usuário quanto o admin podem buscar pratos pelo nome ou pelos ingredientes.
- Tabela para visualização de pedidos com opção de busca por código ou status.

### Admin

- Pode cadastrar pratos com nome, categoria, descrição, ingredientes, preço e upload de imagem.
- Gerenciar os pedidos e alterar status além de editar dados, imagem e excluir prato.

### Usuário

- Visualização de todos os pratos cadastrados.
- Adição de pratos ao carrinho.
- Controle da quantidade de itens no carrinho.
- Exclusão de pratos do carrinho.
- Marcação de pratos como favoritos.
- Visualização do pedido, soma total e métodos de pagamento.

## Tecnologias Utilizadas

- `React.js`
- `TypeScript`
- `Styled-Components`
- `React-Router-Dom`
- `React-Hook-Form`
- `Tanstack-Query`
- `Axios`

## Como Executar o Projeto

```shell
# Clonar repositório
$ git clone https://github.com/EmanuelQuintino/Food-Explorer.git

# Instalar dependências
$ npm install

# Executar projeto
$ npm run dev
```

## Links Úteis

- [Deploy](https://project-food-explorer.netlify.app/)
- [Repositório da API](https://github.com/EmanuelQuintino/Food-Explorer-API)
