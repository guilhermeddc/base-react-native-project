import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    User,
  })
);
