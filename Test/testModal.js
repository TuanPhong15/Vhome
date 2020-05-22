import React, { Component } from 'react';
 
import { StyleSheet, View, Modal, Text, Button, Platform,Image } from 'react-native';
import { BlurView } from 'react-native-blur'

export default class Mynewproject extends Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = { 
        
        ModalVisibleStatus: false 
    };
 
  }
 
  ShowModalFunction(visible) {
 
    this.setState({ModalVisibleStatus: visible});
    
  }
 
 render() {
   return (
 
      <View style={styles.MainContainer}>
 
        <Modal
          transparent={false}
 
          animationType={"fade"}
 
          visible={this.state.ModalVisibleStatus}
 
          onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
 
 
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
 
               
             <Image style={{ marginTop: 150 }}
               source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/logo.png')} />
                    <Button  title="Click Here To Hide Modal" onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } />
                    {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}
  
 
            </View>
 
 
        </Modal>
 
        <Button onPress={() => { this.ShowModalFunction(true) }} title="Click Here To Show Modal" />
         
 
      </View>
 
           
   );
 }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
    
flex:1,
justifyContent: 'center',
alignItems: 'center',
marginTop: (Platform.OS == 'ios') ? 20 : 0
 
},
 
ModalInsideView:{
 
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor : "#00BCD4", 
  height: 300 ,
  width: '90%',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff'
 
},
 
TextStyle:{
 
  fontSize: 20, 
  marginBottom: 20, 
  color: "#fff",
  padding: 20,
  textAlign: 'center'
 
}
 
});