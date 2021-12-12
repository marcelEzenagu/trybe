import React from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'

const SignIn = ({navigation}) => {
    return (
        <View style= {{flex:1,width:"100%", alignItems:'center',marginTop:40,paddingHorizontal:15}}>
            <View style={{alignSelf:'flex-start',marginVertical:20}} >
                <Text  style={{color:'red', fontWeight:'bold', fontSize:20,marginTop:20}}>Sign In</Text>
                <Text  style={{color:'white'}}>Sign In with your registered email address</Text>
            </View>
           
             <View style={{width:'100%'}}>

               <View style={styles.inputContainer}>
                <Text style={styles.icon}>Icon</Text>
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    placeholderTextColor="gray"
                    
                    />
                </View>
                <View style= {[styles.inputContainer,{justifyContent:'space-between',paddingRight:10}]}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Text style={styles.icon}>Icon</Text>
                            <TextInput
                                placeholder="Password"
                                style={styles.input}
                                placeholderTextColor="gray"
                                
                                />
                        </View>
                        <Text style={styles.icon}>Icon</Text>
                </View>
            </View>
            <View style={{ alignSelf:'flex-end', marginVertical:30}} >
                <Text style={{color:'white',}}>Forgot Password?</Text>
            </View>
            <View style={{marginVertical:30, alignItems:'center'}}>
                <TouchableOpacity  style={{height:50,marginVertical:30,width:380, backgroundColor:'red', borderRadius:5}} >
                    <Text style={{color:'white',alignSelf:'center',marginHorizontal:10,marginTop:10}}>Login</Text>
                </TouchableOpacity>
                <View style={{alignItems:'center',marginTop:30}}>
                    <Text style={{color:'white',marginVertical:10}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{color:'white'}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
           
                   
                </View>

        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
      inputContainer: {
        borderWidth:1,
        alignItems:'center',
        borderRadius:5,
        borderColor:'white',
        width:'100%',
        flexDirection:'row',
        height:50,
        paddingLeft:10,
        
        marginTop:30, 
    },
    icon:{color:'gray'},
    input:{
        paddingLeft:10,
        alignSelf:'center',
        // height:50,
        color:"white",
    }
})
