import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Pokedex', () => {
  test('Verifica se a página contém um h2 com o texto Encountered Pokémon', () => {
    // Arrange
    renderWithRouter(<App />);

    // Act

    // Assert
    expect(
      screen.getByRole('heading', { name: /Encountered Pokémon/i }),
    );
  });

  test('Verifica se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
    // Arrange
    const { user } = renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });

    // Act

    // Assert
    expect(pokemonName.textContent).toContain('Pikachu');
    await user.click(button);
    expect(pokemonName.textContent).toContain('Charmander');
    await user.click(button);
  });

  test('Verifa se é mostrado apenas um Pokémon por vez', async () => {
    // Arrange
    const { user } = renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });

    // Act

    // Assert
    expect(pokemonName.textContent).toContain('Pikachu');
    await user.click(button);
    expect(pokemonName.textContent).not.toContain('Pikachu');
  });

  test('Verifica se a Pokédex tem os botões de filtro', () => {
    // Arrange
    renderWithRouter(<App />);
    const filterButtons = screen.getAllByTestId('pokemon-type-button');

    // Act

    // Assert
    expect(filterButtons.length).toBe(7);
  });

  test('Verifica se a Pokédex contém um botão para resetar o filtro', async () => {
    // Arrange
    const { user } = renderWithRouter(<App />);
    const reset = screen.getByRole('button', { name: /all/i });
    const poison = screen.getByRole('button', { name: /poison/i });

    // Act

    // Assert
    await user.click(poison);
    const poisonPokemon = await screen.findByText(/ekans/i);
    expect(poisonPokemon).toBeInTheDocument();

    await user.click(reset);
    const electricPokemon = await screen.findByText(/pikachu/i);
    expect(electricPokemon).toBeInTheDocument();
  });
});
