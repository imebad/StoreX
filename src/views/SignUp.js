import React from 'react';
import {Text, View, StyleSheet, TextInput, Switch} from 'react-native'
import { Button } from 'react-native-elements';

class SignUp extends React.Component{

    render(){
        return(
            <View>
                <View style={styles.flex_container}>
                    <View style={styles.box}>
                        <View style={styles.box_column}>
                            <View style={{width:'49%'}}>
                                <Text>First Name</Text>
                                <TextInput placeholder="First Name" style={{height: 60, borderBottomWidth:1, borderColor:'gray'}}/>
                            </View>
                            <View style={{width:'49%'}}>
                                <Text>Last Name</Text>
                                <TextInput placeholder="Last Name" style={{height: 60, borderBottomWidth:1, borderColor:'gray'}}/>
                            </View>
                            
                        </View>
                        <View style={styles.padding}>
                            <Text>Password</Text>
                            <TextInput placeholder="Password" style={{height: 60, borderBottomWidth:1, borderColor:'gray'}}/>
                        </View>
                        <View style={styles.padding}>
                            <Text>Retype Password</Text>
                            <TextInput placeholder="Retype Password" style={{height: 60, borderBottomWidth:1, borderColor:'gray'}}/>
                        </View>
                        <View style={styles.padding}>
                            <Text>Date of Birth</Text>
                            <View style={styles.box_column}>
                                <TextInput placeholder="DD" style={{height: 60, borderBottomWidth:1, borderColor:'gray', width:'30%'}}/>
                                <TextInput placeholder="MM" style={{height: 60, borderBottomWidth:1, borderColor:'gray', width:'30%'}}/>
                                <TextInput placeholder="YYY" style={{height: 60, borderBottomWidth:1, borderColor:'gray', width:'30%'}}/>
                            </View>
                        </View>
                        <View style={styles.padding}>
                            <View style={styles.box_column}>
                                <Text>I Agree The Terms Of Use</Text>
                                <View style={{height:40, marginTop:10,marginBottom:10, flexDirection:'row', justifyContent:'space-around'}}>
                                    <Text>Male</Text>
                                    <Text>Female</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.padding}>
                            <View style={styles.box_column}>
                                <Text>Select Your Gender</Text>
                                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={true ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    // onValueChange={toggleSwitch}
                                    value={false}
                                ></Switch>
                            </View>
                        </View>
                        <View style={styles.padding}>
                            <Button style={{alignSelf:'stretch',}} onPress={()=>this.props.navigation.navigate('SignIn')} title="SIGN UP"/> 
                        </View>
                    </View>
                </View>
                <View style={styles.padding}>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>                            
                        <Text>Not a member? </Text>
                        <Text style={{color:'#EFB961'}} onPress={()=>this.props.navigation.navigate('SignIn')}>SIGN IN</Text> 
                    </View>
                </View>
            </View>
            
        )
    }
}

export default SignUp


const styles = StyleSheet.create({

    flex_container:{
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:"white",
        paddingBottom:20
    },
    box_column:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    padding:{
        paddingTop:20,
        paddingBottom:5
        
    },
    box:{
        shadowColor:"gray"
    }
})