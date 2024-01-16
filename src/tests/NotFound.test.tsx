import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Not Found', () => {
  test('Verifica se a página contém um h2 com o texto Page requested not found', () => {
    // Arrange
    renderWithRouter(<App />, { route: '/notfound' });

    // Act

    // Assert
    expect(
      screen.getByRole('heading', { name: /page requested not found/i }),
    ).toBeInTheDocument();
  });

  test('Verifica se  se a página mostra a imagem com texto alternativo', () => {
    // Arrange
    renderWithRouter(<App />, { route: '/notfound' });

    // Act

    // Assert
    const alternativeText = "Clefairy pushing buttons randomly with text I have no idea what i'm doing";

    expect(screen.getByAltText(alternativeText)).toHaveAttribute('src', '/404.gif');
  });
});

test('', () => {});
