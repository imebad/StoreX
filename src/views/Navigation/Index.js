import React, { Component } from 'react';
import NavigationStack from './NavigationStack'
import {Text} from 'react-native'

class AppNavigator extends Component{

    render(){
        return <NavigationStack/>;
        // return(
        //     <Text>Testing</Text>
        // ) 
    }
}

export default AppNavigator