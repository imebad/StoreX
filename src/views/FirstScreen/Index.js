import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class HomeScreen extends React.Component{
    render(){
        return(

            
            <View style={styles.container}>
                <View>
                    <View>
                        <Image source={require('../../../assets/splash.png')} style={styles.image_one}/>
                        <Text style={styles.row}> Follow The Latest Fashion Trends</Text>
                        <Text style={styles.row}>and shop with StoreX</Text>
                    </View>

                    <View>
                        <Image source={require('../../../assets/images/signin_image.png')} style={styles.image_two}/>
                    </View>
                </View>

                <View>
                    <Button backgroundColor="#EFB961" onPress={()=>this.props.navigation.navigate('SignIn')} title="SIGN IN"/>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent:'space-between'
    },
    row: {
        textAlign: 'center'
    },
    image_one:{
        alignSelf: 'center',
        height: 100,
        margin:30
    },
    image_two:{
        alignSelf: 'center',
        height: 100,
        margin:30
    },
    button:{
        backgroundColor:'#EFB961',
        margin:30
    }
  });
  

export default withNavigation(HomeScreen);