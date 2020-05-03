// import { createAppContainer, createDrawerNavigator,createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import LoginScreen from '../Login'
import HomeScreen from './../FirstScreen'


const AppNavigator = createStackNavigator(
    {
    
        Home: {
            screen: HomeScreen,
            navigationOptions: { headerShown: false }
        },
    }
)

export default AppNavigator;