import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';
 
export default class HitungVolumeBalok extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      volume:0
    };
  }
 
  render() {
    return (  
      <View style = {{flex:1,backgroundColor:'#C8E6C9'}}>
 
        <View style={{backgroundColor:'#4CAF50'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#E8F5E9'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />

            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />

            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />
 
            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
 
        <View style={{margin:20, backgroundColor:'#A5D6A7'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Panjang {"\t"}=  {this.state.panjang} {"\n"}
              Lebar   {"\t"}=  {this.state.lebar} {"\n"}
              Tinggi  {"\t"}=  {this.state.tinggi} {"\n"}
              Volume  {"\t"}= {this.state.volume}
          </Text>
         </View>
   </View> 
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);