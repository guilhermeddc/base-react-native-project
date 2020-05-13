import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

export const Container = styled(RectButton)`
  height: 46px;
  background: ${theme.colors.buttonColor};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 16px;
`;
