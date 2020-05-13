import React from 'react';
import { Image } from 'react-native';

import Background from '../../components/Background';
import Logo from '../../assets/logo-placeholder.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SingLin,
  SingLinText,
} from './styles';
const Main = () => {
  return (
    <Background>
      <Container>
        <Image source={Logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SingLin onPress={() => {}}>
          <SingLinText>Criar conta gratuita</SingLinText>
        </SingLin>
      </Container>
    </Background>
  );
};

export default Main;
