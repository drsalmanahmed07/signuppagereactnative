import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,}}>
       <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
        <Image style={styles.imageSetting}
        source={require('./assets/login.jpg')}/>

<Text style = {styles.signupStyle}>Sign Up</Text>
      </View>
      

      <View style={{flex:0.70, alignItems:'center', justifyContent:'center', marginTop:20}}>

        <TextInput style={styles.InputSettings}
        placeholder='First Name'
        />
        
        <TextInput style={styles.InputSettings}
        placeholder='Last Name'

        />


<TextInput style={styles.InputSettings}
        placeholder='username'
        />

<TextInput secureTextEntry= {true} style={styles.InputSettings}
        placeholder='Password'
        />

        <TextInput style={styles.InputSettings}
        placeholder='Email'

        />
        {/* <TextInput style={styles.InputSettings}
                placeholder='Address'
        />
        <TextInput keyboardType='numeric' style={styles.InputSettings}
                placeholder='Phone'

        /> */}


     </View>
    <View style = {{flex:0.1, flexDirection: 'row', marginBottom: 50}}>
      <View style ={{flex: 0.334, backgroundColor: "blue"}}></View>
      <View style ={{flex: 0.333, backgroundColor: "green"}}></View>
      <View style ={{flex: 0.333, backgroundColor: "red"}}></View>
    </View>

     <View style={{flex:0.10, alignItems:'center',justifyContent:'center'}}>



        <TouchableOpacity style={styles.signupbutton} onPress= {()=> Alert.alert('Button clicked')}>
          <Text style={{fontSize:20, fontWeight: '800', color:'white'}}>Sign Up</Text>

        </TouchableOpacity>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSetting: {
    height: 100,
    width: 100,
    marginTop: 90
  },
  InputSettings: {
    backgroundColor:'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginBottom:10,
    
    width:180, 
    height:30,
    borderRadius: 4,
    margin: 10,
    padding: 5,
    


  },
  signupStyle: {
    color: '#14c4cd',
    fontSize: 40,
    fontWeight: '800',  
  },
  signupbutton: {
    width:180,
    height:40,
    borderRadius: 10,
    backgroundColor:'#189adc',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 90
  }
});
