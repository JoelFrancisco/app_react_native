import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
 
const width = Dimensions.get('window').width;

function Menu() {
  return (
    
    <View style={styles.container}>
        <View style={styles.img}>
            <Image source={require("../../assets/menu.png")} />
        
    
            
                <View style={styles.list}>  
                    <Image source={require("../../assets/list.png")} />  
                </View>

                <View style={styles.box}>
                <Text style={styles.textoImg}>
                    Alimentos consumidos
                </Text>
            </View>
         </View>    
    </View>
    
   
  );
}

const styles = StyleSheet.create({

    
    list:{
        marginTop:-80,
        marginLeft:10,
        paddingLeft:5
        
    }, 
    textoImg:{
        fontSize:15,
        color:"#1abc9c",
        fontWeight: 'bold'
    },
    box:{
        textAlign:"center",
        marginLeft:70,
        marginTop:-24
    },
    container:{
       position:"absolute",
       top:450
    }
})

export default Menu
