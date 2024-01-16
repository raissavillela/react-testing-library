import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Pokemon', () => {
  test('Testa se o nome correto do Pokémon é mostrado na tela', async () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name');
    const bugBtn = screen.getByRole('button', { name: 'Bug' });

    await userEvent.click(bugBtn);

    expect(pokemonName).toHaveTextContent('Caterpie');
  });

  test('Testa se o tipo correto do Pokémon é mostrado na tela', async () => {
    renderWithRouter(<App />);

    const pokemonType = screen.getByTestId('pokemon-type');
    const bugBtn = screen.getByRole('button', { name: 'Bug' });

    await userEvent.click(bugBtn);

    expect(pokemonType).toHaveTextContent('Bug');
  });

  test('Testa se o peso médio do Pokémon é exibido com um texto no formato Average weight: <value> <measurementUnit>, em que <value> e <measurementUnit> são, respectivamente, o peso médio do Pokémon e sua unidade de medida.', async () => {
    renderWithRouter(<App />);

    const electricBtn = screen.getByRole('button', { name: 'Electric' });

    await userEvent.click(electricBtn);

    const pesoPokemon = screen.getByText(/average weight: 6\.0 kg/i);

    expect(pesoPokemon).toHaveTextContent('Average weight');
    expect(pesoPokemon).toHaveTextContent('kg');

    const normalBtn = screen.getByRole('button', { name: 'Normal' });

    await userEvent.click(normalBtn);

    const pesoPokemonNormal = screen.getByText(/average weight: 460\.0 kg/i);

    expect(pesoPokemonNormal).toHaveTextContent('Average weight');
    expect(pesoPokemonNormal).toHaveTextContent('460.0 kg');
  });

  test(' Testa se a imagem do Pokémon é exibida. Ela deve conter um atributo src com a URL da imagem e um atributo alt com o texto <name> sprite, em que <name> é o nome do Pokémon', async () => {
    renderWithRouter(<App />);

    const dragonBtn = screen.getByRole('button', { name: 'Dragon' });
    await userEvent.click(dragonBtn);

    const imgAlt = screen.getByAltText(/dragonair sprite/i);

    const imgDragonairUrl = 'https://archives.bulbagarden.net/media/upload/2/2c/Spr_5b_148.png';

    expect(imgAlt).toHaveAttribute('src', imgDragonairUrl);

    const imgDragonair = screen.getByRole('img', {
      name: /dragonair sprite/i,
    });
    expect(imgDragonair).toBeInTheDocument();
  });

  test('Testa se, ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', async () => {
    renderWithRouter(<App />);
    const bugBtn = screen.getByRole('button', { name: 'Bug' });
    await userEvent.click(bugBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    const summary = screen.getByRole('heading', {
      name: /summary/i,
    });
    const gameLocation = screen.getByRole('heading', {
      name: /game locations of caterpie/i,
    });

    expect(summary).toBeInTheDocument();
    expect(gameLocation).toBeInTheDocument();
  });

  test('Testa se a URL exibida no navegador muda para /pokemon/<id>, em que <id> é o id do Pokémon cujos detalhes se deseja ver.', async () => {
    renderWithRouter(<App />);
    const bugBtn = screen.getByRole('button', { name: 'Bug' });
    await userEvent.click(bugBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    expect(window.location.pathname).toBe('/pokemon/10');
  });

  test('Testa se existe um ícone de estrela nos Pokémon favoritados, o ícone deve ser uma imagem com o atributo src que contém o caminho /star-icon.png', async () => {
    renderWithRouter(<App />);
    const bugBtn = screen.getByRole('button', { name: 'Bug' });
    await userEvent.click(bugBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    const pokemonFavoritado = screen.getByText(/pokémon favoritado\?/i);
    await userEvent.click(pokemonFavoritado);

    const imgAlt = screen.getByRole('img', {
      name: /caterpie is marked as favorite/i,
    });
    const imgSrc = '/star-icon.png';

    expect(imgAlt).toHaveAttribute('src', imgSrc);
  });
});
