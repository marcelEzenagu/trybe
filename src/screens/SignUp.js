import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { Input } from 'react-native-elements'
import ArtistOption from '../components/ArtistOption'
import ListenerOption from '../components/ListenerOption'
import Switcher from '../components/Switcher'

const SignUp = ({navigation}) => {
    const [active, setActive] = useState(true)
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        phoneNumber:'',
        password:'',
        email:"",
        loading:false    
    })

    
    return (
        <View style= {{flex:1,width:"100%", alignItems:'center',marginTop:40,paddingHorizontal:15}}>
            <View style={{alignSelf:'flex-start',marginVertical:20}} >
                <Text style={{color:'red', fontWeight:'bold', fontSize:20,marginTop:20}} >Sign Up</Text>
                <Text style={{color:'white', }} >
                    Create an account to continue
                </Text>
            </View>
            
            {/* <View style={{width:'100%',alignSelf:'center'}} > */}
                {/* {active ? 
                    <Text style={{alignSelf:'center', fontSize:18, fontWeight:'600', paddingVertical:15}} >Sign In mail</Text>
                    : 
                    <Text style={{alignSelf:'center',fontSize:18, fontWeight:'600', paddingVertical:15}} >Sign In Phone</Text>
                
                } */}
                <Switcher setActive={setActive} active={active}  />
            {/* </View> */}
            <View  style={{width:'100%'}}>
            {!active ?
                <ListenerOption active={active} setActive= {setActive}/>
            :   
                <ArtistOption active={active} setActive= {setActive} />
            }
             </View>
               <View style={{marginVertical:30, alignItems:'center'}}>
                    <TouchableOpacity  style={{height:50,marginTop:10,width:380, backgroundColor:'red', borderRadius:5}} >
                        <Text style={{color:'white',alignSelf:'center',marginHorizontal:10,marginTop:10}}>Sign Up</Text>
                    </TouchableOpacity>
                    
                    <Text style={{color:'white',marginVertical:10}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.push("Login")} >
                        <Text style={{color:'white'}}>SIGN IN</Text>
                    </TouchableOpacity>
            </View>
          
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({

})
