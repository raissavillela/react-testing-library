# Projeto de testes com a React Testing Library
 
Foram escritos testes para uma aplicação React que já está criada e configurada utilizando  [`Jest`](https://jestjs.io/) e a biblioteca [`React Testing Library`](https://testing-library.com/). Para garantir a qualidade do código, utilizei os linters `ESLint` e `StyleLint`.



  Neste projeto, atestei que sou capaz de:

  * Utilizar os seletores (queries) da React-Testing-Library em testes automatizados.

  * Simular eventos com a React-Testing-Library em testes automatizados.

  * Testar fluxos lógicos assíncronos com a React-Testing-Library.

  * Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados.

  * Testar inputs.


# Requisitos
## 1. Teste do componente `<App.tsx />`
   * É exibido na tela um `link` com o texto `Home`
     
   * É exibido na tela um `link` com o texto `About`
     
   * É exibido na tela um `link` com o texto `Favorite Pokémon`

## 2. Teste do componente `<About.tsx />.`
   * É exibido na tela um `h2` com texto `About Pokédex`

   * O atributo `src` da imagem é `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`


## 3. Teste do componente `<FavoritePokemon.tsx />`
   * É exibido na tela a mensagem `No favorite pokemon found`

   * São exibidos na tela apenas os Pokémon favoritados

## 4. Teste do componente `<NotFound.tsx />`
   * É exibido na tela um `h2` com o texto `Page requested not found`

   * Existe uma imagem com o `src`:<br /> `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`

## 5. Teste o componente `<Pokedex.tsx />`
   * Os botões de filtragem por tipo têm o nome correto

   * Os botões de filtragem por tipo têm o `data-testid=pokemon-type-button`, exceto o botão `All`

   * É possível clicar no botão de filtragem `All`

  ## 6. Teste o componente `<Pokemon.tsx />`
   * A imagem do Pokémon tem o `src` correto

   * A imagem do Pokémon tem o `alt` `<name> sprite`

   * A imagem de favorito :star: tem o `src` `/star-icon.png`

   * A imagem de favorito :star: tem o `alt` `<name> is marked as favorite`

   * É exibido na tela um texto com o tipo do Pokémon

   * É exibido na tela um `link` com o `href` `/pokemon/<id>`

  ## 7. Teste o componente `<PokemonDetails.tsx />`
   * É exibido na tela um `h2` com o texto `<name> Details`
   
   * É exibido na tela um `h2` com o texto `Summary`

   * É exibido na tela um texto contendo `<summary>`

   * É exibido na tela um `h2` com o texto `Game Locations of <name>`

   * São exibidas na tela imagens de localização com o `src` correto

   * É exibido na tela uma `label` com o texto `Pokémon favoritado?`


# O que já veio pronto da Trybe
   * A aplicação contém uma implementação completa de todos os requisitos da Pokédex,sendo que para cada requisito listado escrevi testes que garantem a corretude.
  
   * Avaliador automatizado, Stryker, que utiliza testes por mutação.
