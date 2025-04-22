import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import CadastrarFeedBack from '../screens/CadastrarFeedBack';

describe('CadastrarFeedBack - Teste simples', () => {
  it('deve renderizar os campos do formulário e permitir digitação', () => {
    const mockNavigate = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <CadastrarFeedBack
          navigation={{ navigate: mockNavigate } as any}
          route={{ params: { productId: 1 } }}
        />
      </NavigationContainer>
    );

    // Verifica se os campos aparecem
    const nomeInput = getByPlaceholderText('Seu nome');
    const emailInput = getByPlaceholderText('Seu email');
    const feedbackInput = getByPlaceholderText('Descreva a sua experiencia');

    expect(nomeInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(feedbackInput).toBeTruthy();

    // Simula digitação
    fireEvent.changeText(nomeInput, 'Alex');
    fireEvent.changeText(emailInput, 'alex@email.com');
    fireEvent.changeText(feedbackInput, 'Excelente jogo!');

    expect(nomeInput.props.value).toBe('Alex');
    expect(emailInput.props.value).toBe('alex@email.com');
    expect(feedbackInput.props.value).toBe('Excelente jogo!');

    // Verifica se o botão existe
    expect(getByText('Enviar relatório')).toBeTruthy();
  });
});
