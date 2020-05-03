// import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './views/Home';
import DetailsScreen from './views/Details';
import SignInScreen from './views/SignIn';
import SignUpScreen from './views/SignUp';
import ForgetPasswordScreen from './views/ForgetPassword';
import MainScreen from './views/ProductListing/Main'

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { headerShown: false }
        },
        SignIn: {
            screen: SignInScreen,
            navigationOptions: { title: 'Sign In',headerStyle: {
                backgroundColor: '#F2F2F2',
              }}
        },
        SignUp: {
            screen: SignUpScreen,
            navigationOptions: { title: 'Sign Up',headerStyle: {
                backgroundColor: '#F2F2F2',
              }}
        },
        ForgetPassword: {
            screen: ForgetPasswordScreen,
            navigationOptions: { title: 'Forget Password',headerStyle: {
                backgroundColor: '#F2F2F2',
              } }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: { title: 'Details',headerStyle: {
                backgroundColor: '#F2F2F2',
              } }
        },
        Main: {
            screen: MainScreen,
            navigationOptions: { title: 'Main Store',headerStyle: {
                backgroundColor: '#F2F2F2',
              } }
        },
    }
);

export default AppNavigator;
