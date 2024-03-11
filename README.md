# Cellphone Manager

## Server Side
--------------------------------------------------------------------------------
##### Português
\
Esta é uma aplicação para o servidor de uma aplicação que gerencia dados de celulares.
Esta aplicação foi criada com `Node.js`, `Express.js` e `Sequelize`

A aplicação possui três tabelas:
- `users`
- `products`
- `details` -- Tabela relacionada a `products`, permitindo que seja criada uma API de estrutura complexa, capaz de adicionar, para um mesmo produto, diferentes cores e preços.

Para a tabela `users`, é possível criar um novo usuário com `nome`, `email`, e `senha`. Esta é criptografada usando a livraria `bcrypt`. Ao passo que o usuário realiza o sign up, é gerado um `token` usando `jsonwebtoken`. Sem este token, não é possível navegar para as seguintes rotas no front-end. Nesta tabela, também é possível fazer um login, através do qual o usuário também recebe um token, após seu e-mail e sua senha terem sido validados.

Para a tabela `products` e `details`, é possível fazer um CRUD, sendo possível também visualizar todos os produtos juntos em uma mesma query.

O usuário também pode realizar o log out, tendo seu token destruído.

##### English
\
This is an application for the server side of a system that manages cellphone data. The application is built using `Node.js`, `Express.js`, and `Sequelize`.

The application consists of three tables:

- `users`
- `products`
- `details` -- A table related to products, enabling the creation of a complex API structure capable of adding different colors and prices for the same product.
  
For the `users` table, it is possible to create a new user with `name`, `email`, and `password`. The password is encrypted using the `bcrypt` library. When the user signs up, a `token` is generated using `jsonwebtoken`. Without this token, it is not possible to navigate to the following routes on the front-end. In this table, it is also possible to log in, and the user receives a token after their email and password have been validated.

For the `products` and `details` tables, CRUD operations are possible, and it is also possible to view all products together in a single query.

The user can also log out. This action destroys their token.

## Client Side
--------------------------------------------------------------------------------
##### Português
\
Essa é uma aplicação front-end, que usa `react.js` e `axios` para gerar a interface de um gerenciador de Celulares.

A aplicação usa `react-router-dom` para navegar pelas seguintes rotas:

- `/`
- `/login`
- `/signup`
- `/add-product`
- `/edit-product-:id`
- `/products-list`
- `/details-product-:id`
- `/edit-details-product-:id/:index`

As únicas rotas públicas da aplicação são `/`, `login` e `signup`. As demais só são acessadas pelo usuário se ele estiver cadastrado ou ter feito o login, lhe gerando um token no back-end, que será verificado pelo componente `PrivateRoute.js`.

Após a verificação, o usuário entra na parte privada do site, caindo direto em `/products-list`, onde será renderizada a lista de produtos que forem adicionados. Nesta rota, também há botões de log out e de adicionar um produto. Quando há produtos na lista, além dos seus dados renderizados, o usuário pode editar os dados principais, navegando até a rota `/edit-product-:id`, remover todos os dados, ou navegar até a rota`/details-product-:id`, para ver, remover ou editar os detalhes do produto (cor e preço). Se o usuário quiser editar os detalhes, será direcionado para a rota `/edit-details-product-:id/:index`.

##### English
\
This is a front-end application that uses `react.js` and `axios` to generate the interface for a Cellphone Manager.

The application utilizes `react-router-dom` to navigate through the following routes:

- `/`
- `/login`
- `/signup`
- `/add-product`
- `/edit-product-:id`
- `/products-list`
- `/details-product-:id`
- `/edit-details-product-:id/:index`

The only public routes of the application are `/`, `/login`, and `/signup`. The remaining routes are only accessible to the user if they are registered or have logged in, generating a token on the back-end, which is verified by the `PrivateRoute.js` component.

After verification, the user enters the private part of the site, landing directly on `/products-list`, where the list of added products will be rendered. On this route, there are also log out and add product buttons. When there are products in the list, in addition to their rendered data, the user can edit the main data by navigating to the route `/edit-product-:id`, remove all data, or navigate to the route `/details-product-:id` to view, remove, or edit the product details (color and price). If the user wants to edit the details, they will be directed to the route `/edit-details-product-:id/:index.`


Esta é uma aplicação para o servidor de uma aplicação que gerencia dados de celulares.
Esta aplicação foi criada com `Node.js`, `Express.js` e `Sequelize`

A aplicação possui três tabelas:
- `users`
- `products`
- `details` -- Tabela relacionada a `products`, permitindo que seja criada uma API de estrutura complexa, capaz de adicionar, para um mesmo produto, diferentes cores e preços.

Para a tabela `users`, é possível criar um novo usuário com `nome`, `email`, e `senha`. Esta é criptografada usando a livraria `bcrypt`. Ao passo que o usuário realiza o sign up, é gerado um `token` usando `jsonwebtoken`. Sem este token, não é possível navegar para as seguintes rotas no front-end. Nesta tabela, também é possível fazer um login, através do qual o usuário também recebe um token, após seu e-mail e sua senha terem sido validados.

Para a tabela `products` e `details`, é possível fazer um CRUD, sendo possível também visualizar todos os produtos juntos em uma mesma query.

O usuário também pode realizar o log out, tendo seu token destruído.

--------------------------------------------------------------------------------
### English

This is an application for the server side of a system that manages cellphone data. The application is built using `Node.js`, `Express.js`, and `Sequelize`.

The application consists of three tables:

- `users`
- `products`
- `details` -- A table related to products, enabling the creation of a complex API structure capable of adding different colors and prices for the same product.
  
For the `users` table, it is possible to create a new user with `name`, `email`, and `password`. The password is encrypted using the `bcrypt` library. When the user signs up, a `token` is generated using `jsonwebtoken`. Without this token, it is not possible to navigate to the following routes on the front-end. In this table, it is also possible to log in, and the user receives a token after their email and password have been validated.

For the `products` and `details` tables, CRUD operations are possible, and it is also possible to view all products together in a single query.

The user can also log out, destroying their token.

## Client Side
--------------------------------------------------------------------------------
### Português

Essa é uma aplicação front-end, que usa `react.js` e `axios` para gerar a interface de um gerenciador de Celulares.

A aplicação usa `react-router-dom` para navegar pelas seguintes rotas:

- `/`
- `/login`
- `/signup`
- `/add-product`
- `/edit-product-:id`
- `/products-list`
- `/details-product-:id`
- `/edit-details-product-:id/:index`

As únicas rotas públicas da aplicação são `/`, `login` e `signup`. As demais só são acessadas pelo usuário se ele estiver cadastrado ou ter feito o login, lhe gerando um token no back-end, que será verificado pelo componente `PrivateRoute.js`.

Após a verificação, o usuário entra na parte privada do site, caindo direto em `/products-list`, onde será renderizada a lista de produtos que forem adicionados. Nesta rota, também há botões de log out e de adicionar um produto. Quando há produtos na lista, além dos seus dados renderizados, o usuário pode editar os dados principais, navegando até a rota `/edit-product-:id`, remover todos os dados, ou navegar até a rota`/details-product-:id`, para ver, remover ou editar os detalhes do produto (cor e preço). Se o usuário quiser editar os detalhes, será direcionado para a rota `/edit-details-product-:id/:index`.

## Deploy

Você pode encontrar a aplicação full stack deste repositório no link abaixo:

[Cellphone Manager](https://cellphone-manager-client.vercel.app/)

--------------------------------------------------------------------------------
### English

## Client Side

This is a front-end application that uses `react.js` and `axios` to generate the interface for a Cellphone Manager.

The application utilizes `react-router-dom` to navigate through the following routes:

- `/`
- `/login`
- `/signup`
- `/add-product`
- `/edit-product-:id`
- `/products-list`
- `/details-product-:id`
- `/edit-details-product-:id/:index`

The only public routes of the application are `/`, `/login`, and `/signup`. The remaining routes are only accessible to the user if they are registered or have logged in, generating a token on the back-end, which is verified by the `PrivateRoute.js` component.

After verification, the user enters the private part of the site, landing directly on `/products-list`, where the list of added products will be rendered. On this route, there are also log out and add product buttons. When there are products in the list, in addition to their rendered data, the user can edit the main data by navigating to the route `/edit-product-:id`, remove all data, or navigate to the route `/details-product-:id` to view, remove, or edit the product details (color and price). If the user wants to edit the details, they will be directed to the route `/edit-details-product-:id/:index.`
