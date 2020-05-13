import { Platform } from 'react-native';
import styled from 'styled-components/native';

import theme from '../../styles/theme';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SingLin = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SingLinText = styled.Text`
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 16px;
`;
