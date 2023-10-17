import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreens";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from './src/screens/ImageScreen';


const navigator = createStackNavigator(
  {
    // routes
    Home: HomeScreen,
    ComponentsScreen,
    ListScreen,
    ImageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
