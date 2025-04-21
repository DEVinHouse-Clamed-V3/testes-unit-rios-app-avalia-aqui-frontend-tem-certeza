import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TelaPrincipal from '../screens/TelaPrincipal';

describe('Testando rota de lista de jogos', () => {
  it('deve navegar para ListGames ao clicar no botão', async () => {
    const mockNavigate = jest.fn();

    const { getByText } = render(
      <TelaPrincipal navigation={{ navigate: mockNavigate } as any} />
    );
    await waitFor(() => getByText('Clique Aqui'), { timeout: 3000 }); 
    
    const botao = getByText('Clique Aqui');
    fireEvent.press(botao);

    // Verificar se a navegação foi chamada com o nome correto
    expect(mockNavigate).toHaveBeenCalledWith('ListGames');
  });
});
