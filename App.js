
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Card from './Components/Card';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState(0);
  const [contraseña, setContraseña] = useState('')
  const [contraseña1, setContraseña1] = useState('')
  const [users, setUsers] = useState([]);
  const registrarUsuario = () => {
    if (nombre !== '' & apellido !== '' & correo !== '' & contraseña !== '' & telefono != '') {
      if (contraseña == contraseña1) {
        const persona = { pnombre: nombre, papellido: apellido, pcorreo: correo, ptelefono: telefono, pcontraseña: contraseña }
        setUsers([...users, persona]);
        setNombre('');
        setApellido('');
        setCorreo('');
        setTelefono('');
        setContraseña('');
        setContraseña1('');
      } else {
        Alert.alert('ALERTA', 'LAS CONTRASEÑAS NO SON IGUALES', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      }


    } else {
      Alert.alert('ALERTA', 'ALGUN CAMPO ESTA VACIO', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  }
  return (
    <View style={styles.container}>

      <ScrollView>
        <Text></Text>
        <Text></Text>
        <Text style={styles.titulo}>Formulario Sergio Sigcha</Text>
        <TextInput placeholder="Nombre" value={nombre} onChangeText={(Text) => setNombre(Text)} style={styles.input} />
        <TextInput placeholder='Apellido' value={apellido} onChangeText={(Text) => setApellido(Text)} style={styles.input} />
        <TextInput placeholder='Correo' value={correo} onChangeText={(Text) => setCorreo(Text)} style={styles.input} />
        <TextInput placeholder='Numero de telefono' value={telefono} onChangeText={(Number) => setTelefono(Number)} keyboardType='numeric' style={styles.input} />
        <TextInput placeholder="Contraseña" value={contraseña} onChangeText={(Text) => setContraseña(Text)} secureTextEntry style={styles.input} />
        <TextInput placeholder="Repita la Contraseña" value={contraseña1} onChangeText={(Text) => setContraseña1(Text)} secureTextEntry style={styles.input} />
        <Button title={"REGISTRAR"} onPress={registrarUsuario}></Button>
        <View>
          <Text></Text>
          <Text style={styles.titulo}>Usuarios Registrados</Text>
          {users.map((user, index) => (
            <View>
              <Card info={user}></Card>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  }, input: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 5

  },
  titulo: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: 6,
    backgroundColor: '#80ff80',

  },
}
);
