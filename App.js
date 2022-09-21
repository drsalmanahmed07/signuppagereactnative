import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, marginTop: 10}}>
       <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
        <Image style={styles.imageSetting}
        source={require('./assets/login.jpg')}/>

<Text style = {styles.signupStyle}>Sign Up</Text>
      </View>
      

      <View style={{flex:0.70, alignItems:'center', justifyContent:'center', marginTop:70}}>

        <TextInput style={styles.InputSettings}
        placeholder='First Name'
        />
        
        <TextInput style={styles.InputSettings}
        placeholder='Last Name'

        />


<TextInput style={styles.InputSettings}
        placeholder='Username'
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
      <View  style={styles.txtstyle}>
     <Text style= {styles.textstyles}>Or Sign up with:</Text>
     </View>

     </View>
     
    <View style = {{flex:0.1, flexDirection: 'row', marginBottom: 70}}>
      <View style ={{flex: 0.334, justifyContent: 'center', alignItems: 'flex-end'}}>
      <Image style={styles.iconImage}
        source={require('./assets/gi.jpg')}/>
      </View>
      <View style ={{flex: 0.333, justifyContent: 'center', alignItems: 'center'}}>
      <Image style={styles.iconImages}
        source={require('./assets/linkedin.png')}/>
      </View>
      <View style ={{flex: 0.333, justifyContent: 'center', alignItems: 'flex-start'}}>
      <Image style={styles.iconImagess}
        source={require('./assets/git.png')}/>
      </View>
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
  },
  iconImage: {
    width: 40,
    height: 40,
    
  },
  iconImages: {
    width: 80,
    height: 40,  
  },
  iconImagess: {
    width: 40,
    height: 40,  
  },
  txtstyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  textstyles:{
    fontWeight:'bold',
    fontSize:18
  }
});
