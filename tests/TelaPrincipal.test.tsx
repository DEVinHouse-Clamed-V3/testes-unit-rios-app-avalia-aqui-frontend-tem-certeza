import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TelaPrincipal from '../screens/TelaPrincipal';
import { describe, expect, it, jest } from '@jest/globals';

describe('Testando rota de lista de jogos', () => {
  it('deve navegar para ListGames ao clicar no botão', async () => {
    const mockNavigate = jest.fn();

    const { getByTestId } = render(
      <TelaPrincipal navigation={{ navigate: mockNavigate } as any} />
    );

    const botao = await waitFor(() => getByTestId('botao-navegar'), {
      timeout: 4000,
    });

    fireEvent.press(botao);
    expect(mockNavigate).toHaveBeenCalledWith('ListGames');
  });
});
