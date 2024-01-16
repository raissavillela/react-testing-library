import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente App', () => {
  test('Verifica o conjunto fixo de links de navegação.', () => {
    // Arrange
    renderWithRouter(<App />);

    // Act

    // Assert
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Favorite Pokémon')).toBeInTheDocument();
  });

  test('Verifica se a aplicação é redirecionada para página inicial ao clicar no link Home', async () => {
    // Arrange
    const { user } = renderWithRouter(<App />);
    const homePage = screen.getByRole('link', { name: /home/i });

    // Act
    await user.click(homePage);

    // Assert
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('Verifica se a aplicação é redirecionada para página de About ao clicar no link About', async () => {
    // Arrange
    const { user } = renderWithRouter(<App />);
    const aboutPage = screen.getByRole('link', { name: /about/i });

    // Act
    await user.click(aboutPage);

    // Assert
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('Verifica se a aplicação é redirecionada para página de Favorite Pokémon ao clicar no link Favorite Pokémon', async () => {
    // Arrange
    const { user } = renderWithRouter(<App />);
    const favoritePokémonPage = screen.getByRole('link', { name: /Favorite Pokémon/i });

    // Act
    await user.click(favoritePokémonPage);

    // Assert
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('Verifica se a aplicação é redirecionada para página Not Found ao entrar em uma URL desconhecida', () => {
    renderWithRouter(<App />, { route: '/pokemonNotFound' });

    expect(screen.getByText('Page requested not found')).toBeInTheDocument();
  });
});
