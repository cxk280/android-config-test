import { StackNavigator } from 'react-navigation';

import Main from './containers/Main';

const AppNavigator = new StackNavigator(
  {
    Main: { screen: Main },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
);

export default AppNavigator;
