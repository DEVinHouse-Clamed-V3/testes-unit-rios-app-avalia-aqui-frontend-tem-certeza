import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ListaJogos from '../screens/ListaJogos ';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { jest } from '@jest/globals';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Tela de Lista de Jogos', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'God of War',
          brand: 'Santa Monica',
          console: 'PS4',
          description: 'Aventura épica',
          image: 'https://exemplo.com/gow.jpg',
        },
        {
          id: 2,
          name: 'The Last of Us',
          brand: 'Naughty Dog',
          console: 'PS4',
          description: 'Pós-apocalíptico',
          image: 'https://exemplo.com/tlou.jpg',
        },
      ],
    });
  });

  it('deve filtrar os jogos com base na pesquisa', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <NavigationContainer>
        <ListaJogos navigation={{ navigate: jest.fn() } as any} />
      </NavigationContainer>
    );

    const input = getByPlaceholderText('Pesquisar');

    await waitFor(() => {
      expect(queryByText('LottieAnimationView')).toBeNull();
      expect(getByText('God of War')).toBeTruthy();
    });

    fireEvent.changeText(input, 'last');

    // Verifica se o "God of War" foi removido e "The Last of Us" apareceu
    await waitFor(() => {
      expect(queryByText('God of War')).toBeNull();
      expect(getByText('The Last of Us')).toBeTruthy();
    });
  });
});
