import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About', () => {
  test('Verifica se a página contém um h2 com o texto About Pokédex.', () => {
    // Arrange
    renderWithRouter(<About />);

    // Act

    // Assert
    expect(screen.getByText('About Pokédex')).toBeInTheDocument();
  });

  test('Verifica se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    // Arrange
    renderWithRouter(<About />);
    const firstParagraph = screen.getByText(
      'This application simulates a Pokédex, a digital encyclopedia containing all Pokémon.',
    );
    const secondParagraph = screen.getByText(
      'One can filter Pokémon by type, and see more details for each one of them.',
    );

    // Act

    // Assert
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
  });

  test('Verifica se a página contém uma imagem específica de uma Pokédex.', () => {
    renderWithRouter(<About />);

    expect(screen.getByAltText('Pokédex')).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
