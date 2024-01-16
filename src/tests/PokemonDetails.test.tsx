import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente PokemonDetails', () => {
  test('Testa se a página contém um texto <name> Details, em que <name> é o nome do Pokémon.', async () => {
    renderWithRouter(<App />);
    const poisonBtn = screen.getByRole('button', { name: 'Poison' });
    await userEvent.click(poisonBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    const ekansInfo = screen.getByRole('heading', {
      name: /ekans details/i,
    });
    expect(ekansInfo).toBeInTheDocument();
  });

  test('Testa se na seção de detalhes contém um heading h2 com o texto Summary.', async () => {
    renderWithRouter(<App />);
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    await userEvent.click(fireBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    const summary = screen.getByRole('heading', {
      name: /summary/i,
    });
    const summaryText = screen.getByText('Summary');
    expect(summary).toBeInTheDocument();
    expect(summaryText).toBeInTheDocument();
  });

  test('Testa se na seção de detalhes contém um parágrafo com o resumo do Pokémon específico sendo visualizado', async () => {
    renderWithRouter(<App />);
    const psychicBtn = screen.getByRole('button', { name: 'Psychic' });
    await userEvent.click(psychicBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    const alakazamDetails = screen.getByText(
      /Closing both its eyes heightens all its other senses. This enables it to use its abilities to their extremes./i,
    );
    expect(alakazamDetails).toBeInTheDocument();
  });

  test('Testa se na seção de detalhes existe um h2 com o texto Game Locations of <name>; em que <name> é o nome do Pokémon exibido', async () => {
    renderWithRouter(<App />);
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    await userEvent.click(fireBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    const location = screen.getByRole('heading', {
      name: /game locations of charmander/i,
    });
    expect(location).toBeInTheDocument();
  });

  test('Testa se a imagem da localização tem um atributo src com a URL da localização.', async () => {
    renderWithRouter(<App />);
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    await userEvent.click(fireBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    const imgUrls = [
      'https://archives.bulbagarden.net/media/upload/9/93/Alola_Route_3_Map.png',
      'https://archives.bulbagarden.net/media/upload/4/4a/Kanto_Route_3_Map.png',
      'https://archives.bulbagarden.net/media/upload/2/24/Kanto_Route_4_Map.png',
      'https://archives.bulbagarden.net/media/upload/6/6f/Kanto_Rock_Tunnel_Map.png',
    ];

    imgUrls.forEach((imgUrl, index) => {
      const imgElement = screen.getAllByAltText('Charmander location')[index];

      expect(imgElement).toBeInTheDocument();

      expect(imgElement).toHaveAttribute('src', imgUrl);
    });
  });

  test('Testa se a página exibe um checkbox que permite favoritar o Pokémon', async () => {
    renderWithRouter(<App />);
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    await userEvent.click(fireBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    const checkbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    expect(checkbox).toBeInTheDocument();
  });

  test('Cliques alternados no checkbox devem adicionar e remover, respectivamente, o Pokémon da lista de favoritos.', async () => {
    renderWithRouter(<App />);
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    await userEvent.click(fireBtn);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    await userEvent.click(moreDetails);

    const checkbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    await userEvent.click(checkbox);

    const favoritePokemon = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    await userEvent.click(favoritePokemon);

    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
  });

  test('Testa se a label do checkbox contém o texto Pokémon favoritado?', async () => {
    renderWithRouter(<App />);
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    await userEvent.click(fireBtn);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    await userEvent.click(moreDetails);

    const pokemonFavoritado = screen.getByText(/pokémon favoritado\?/i);
    expect(pokemonFavoritado).toBeInTheDocument();
  });
});
