import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ListaJogos from '../screens/ListaJogos ';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Tela de Lista de Jogos', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'Minecraft',
          brand: 'Konami',
          console: 'Playstation 2 - PS2',
          description: 'Minecraft',
          image: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png',
        },
        {
          id: 2,
          name: 'GTA SAN ANDREAS',
          brand: 'Rockstar Games',
          console: 'Playstation 2 - PS2',
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

    await waitFor(() => {
      expect(queryByText('God of War')).toBeNull();
      expect(getByText('The Last of Us')).toBeTruthy();
    });
  });
});
