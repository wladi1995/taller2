import { View,Text,Image,StyleSheet } from "react-native";
import React from "react";
export default function Card(props){
    console.log(props);
    return(
        <View style={styles.input}>
            <Text style={styles.titulo}>Nombre:
            <Text  style={styles.datos}> {props.info.pnombre}</Text></Text>
            <Text style={styles.titulo}>Apellido:
            <Text  style={styles.datos}> {props.info.papellido}</Text></Text>
            <Text style={styles.titulo}>Correo:
            <Text  style={styles.datos}> {props.info.pcorreo}</Text></Text>
            <Text style={styles.titulo}>telefono:
            <Text  style={styles.datos}> {props.info.ptelefono}</Text></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20
    }, 
    input: {
      backgroundColor:'#DDDDDD',
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 2
  },
  titulo:{
    fontSize: 15, 
    color: 'red', 
    fontWeight: 'bold'
  },
  datos:{
    fontSize: 10, 
    color: 'black', 
  },
  }
  );
  