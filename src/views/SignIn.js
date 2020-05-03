import React from 'react';
import {Text, View, StyleSheet, TextInput, Image} from 'react-native'
import { Button } from 'react-native-elements';

class SignIn extends React.Component{

    render(){
        return(
            <View style={styles.flex_container}>
                <View style={styles.first_box}>
                    <View style={styles.first_box_sub}>
                        <View style={styles.first_box_row}>
                            <Image source={require('../../assets/icons/icon-mail.png')} style={{width:27, height:20}} />
                            <Text>Email</Text>
                        </View>
                        <TextInput placeholder="Email" style={{height: 60, borderBottomWidth:1, borderColor:'gray', alignSelf:'stretch'}}/>
                        
                    </View>
                    <View style={styles.first_box_sub}>
                        <View style={styles.first_box_row}>
                            <Image source={require('../../assets/icons/icon-password.png')} style={{width:20, height:32,}} />
                            <Text>Password</Text>
                        </View>
                        <TextInput textContentType='password' placeholder="Password" style={{height: 60, borderBottomWidth:1, borderColor:'gray', alignSelf:'stretch'}}/>
                        
                    </View>
                    <View style={styles.first_box_sub}>
                            <Button style={{alignSelf:'stretch',}} onPress={()=>this.props.navigation.navigate('Main')} title="SIGN IN"/> 
                    </View>
                    <View style={styles.first_box_sub}>
                        <Text style={{alignSelf:'center'}} onPress={()=>this.props.navigation.navigate('ForgetPassword')}>Forget Password ?</Text>
                    </View>
                </View>
                <View style={styles.second_box}>
                    <View style={styles.first_box_sub}>
                        <View style={{alignItems:'center'}}>                            
                            <Text>OR SIGN IN USING SOCIAL</Text>
                            <Text>NETWORK</Text>
                        </View>
                    </View>
                    <View style={styles.first_box_sub}>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/Facebook.png')} />
                            <Image source={require('../../assets/icons/Twitter.png')} />
                        </View>
                    </View>
                    <View style={styles.first_box_sub}>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>                            
                            <Text>Not a member? </Text>
                            <Text style={{color:'#EFB961'}} onPress={()=>this.props.navigation.navigate('SignUp')}>SIGN UP</Text> 
                        </View>
                    </View>
                </View>
            </View>
            
        )
    }
}

export default SignIn


const styles = StyleSheet.create({

    flex_container:{
        flex:1,
        flexDirection:"column",
    },
    first_box:{
        backgroundColor:"white",
        shadowColor:'grey',
        paddingBottom:20
    },
    first_box_sub:{
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
    },
    first_box_row:{
        flexDirection:'row',
        // justifyContent:'space-between',
        alignContent:'flex-start'
    },
    second_box:{
        marginTop:10,
    }
})