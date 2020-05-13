import React from 'react';
import { Text } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';

// import { Container } from './styles';
const Main = () => {
  return (
    <Background>
      <Text>Main</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
      <Button>Main</Button>
    </Background>
  );
};

export default Main;
