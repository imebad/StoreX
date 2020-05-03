import React from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native'
import {Button} from 'react-native-elements'

class ForgetPassword extends React.Component{

    render(){
        return(
            <View style={{shadowColor:'gray'}}>
                <View style={styles.first_box}>
                    <View style={styles.text_area}>
                        <Text>Enter your registered StoreX</Text>
                        <Text>email and we will email you</Text>
                        <Text>a link to reset your password</Text>
                    </View>
                    <View style={styles.email_box}>
                        <View style={styles.lable}>
                            <Image source={require('../../assets/icons/icon-mail.png')} style={{width:27, height:20}} />
                            <Text>Email</Text>
                        </View>
                        <TextInput placeholder="Email" style={{height: 60, borderBottomWidth:1, borderColor:'gray', alignSelf:'stretch'}}/>
                        
                    </View>
                    <View style={styles.button}>
                            <Button style={{alignSelf:'stretch',}} onPress={()=>this.props.navigation.navigate('SignIn')} title="SIGN UP"/> 
                    </View>
                </View>
            </View>
        )
    }
}

export default ForgetPassword

const styles = StyleSheet.create({
    first_box:{
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:30,
        backgroundColor:'white'
    },
    text_area:{
        paddingTop:30,
        paddingBottom:60,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'gray'
    },
    email_box:{
        paddingTop:30
    },
    lable:{
        flexDirection:'row',
        justifyContent:'space-between'        
    },
    button:{
        paddingTop:50,
        paddingBottom:30
    }
})