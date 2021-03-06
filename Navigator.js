import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RestaurantesTela from './telas/RestaurantesTela';
import AdicionarRestauranteTela from './telas/AdicionarRestaurantesTela';

const Navigator = createStackNavigator({
  RestaurantesTela: RestaurantesTela,
  AdicionarRestauranteTela: AdicionarRestauranteTela
});

export default createAppContainer(Navigator);