import React from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const ListenerOption = ({active, setActive}) => {
    return (
              <View >
            <View  style={{justifyContent:'center', alignItems:'center', width:'100%'}} >
               <View style={styles.inputContainer}>
                <Text style={styles.icon}>Icon</Text>
                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    placeholderTextColor="gray"
                    
                    />
                </View>
                    
                <View style={styles.inputContainer}>
                <Text style={styles.icon}>Icon</Text>
                <TextInput
                    placeholder="Last Name"
                    style={styles.input}
                    placeholderTextColor="gray"
                    
                    />
                </View>
               <View style={styles.inputContainer}>
                <Text style={styles.icon}>Icon</Text>
                <TextInput
                    placeholder="Phone Number"
                    style={styles.input}
                    placeholderTextColor="gray"
                    
                    />
                </View>
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
           
        </View>
    )
}

export default ListenerOption

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
