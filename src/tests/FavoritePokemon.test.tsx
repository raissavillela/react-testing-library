import { screen } from '@testing-library/react';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Favorite Pokemon', () => {
  test('Verifica se é exibida na tela a mensagem No favorite pokemon found caso não haja Pokémon favorito.', () => {
    // Arrange
    renderWithRouter(<FavoritePokemon pokemonList={ [] } />);
    const message = screen.getByText('No favorite Pokémon found');
    // Act

    // Assert
    expect(message).toBeInTheDocument();
  });

  test('Verifica se são exibidos na tela apenas os Pokémon favoritados', async () => {
    // Arrange
    const { user } = renderWithRouter(<App />);

    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    await user.click(moreDetailsLink);

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    await user.click(checkbox);

    const favoriteLink = screen.getByRole('link', { name: /favorite pokémon/i });
    await user.click(favoriteLink);

    const pokemonNameElement = screen.getByTestId('pokemon-name');
    expect(pokemonNameElement.textContent).toContain('Pikachu');
  });
});
