import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

import { Container, Text } from './styles';

const Button = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.white} />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
