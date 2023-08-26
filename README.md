# Exercício Router

Esse é um projeto feito no curso React completo da plataforma Origamid.
O objetivo era construir um site que retorne produtos de uma API utilizando todos os conceitos de React Router e React Hooks.

Nesse projeto eu utilizei os conceitos de API, promises, fetch, JavaScript Assíncrono, componentização, hooks, React Routes e boas práticas.

Utilizei o useEffect para renderizar a primeira página com os produtos que vieram do fetch da API. Esse primeiro fetch não possui dependência.
Utilizei o useState para setar o estado da página cada vez que modificava o produto clicado.
Também nas Routes eu criei uma navegação com NavLink to, e onde não era necessário o NavLink, utilizei o Link to.
No CSS criei as animações de loading e dos ítens aparecerem na tela vindo da esquerda com @keyframes.

Na parte de produto utilizei o hook useParams que permite acessar o parâmetro ID que estava salvo em um objeto que foi desestruturado, além do useEffect com a dependência do ID de cada produto para fazer um novo fetch e acessar cada ítem via ID, porém dessa vez com o try, catch e finally, para tentar fazer o fetch e retornar os produtos, caso não consiga, retorna um erro e depois seta o estado do loading para falso que foi a animação de loading enquanto as promises estão ocorrendo.

### Links

- Solution URL: [solution ](https:/)
- Live Site URL: [live site URL at Github](https://wellingtonmarques96.github.io/router/)

## Meu processo

### Construído com

- React hooks
- useEffect, useParams, useState
- React router
- Componentização
- CSS module
- Objetos e Functions
- Parâmetros e argumentos
- Arrays
- Condicionais
- Fetch e Promises
- Json
- API e HTTP
- jS Assíncrono, Async await
- Destructuring
- NPM, ESlint, Webpack, BABEL
- Linha de comando
- Versionamento de código
- Git e Github
## Author

- Github - [WellingtonMarques96](https://github.com/WellingtonMarques96)
- Frontend Mentor - [@WellingtonMarques96](https://www.frontendmentor.io/profile/WellingtonMarques96)
- Linkedin - [@wellington-marques-504514156](https://www.linkedin.com/in/wellington-marques-504514156/)
