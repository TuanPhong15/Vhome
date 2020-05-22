import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text ,Button} from 'react-native';

// import App from './App';
export default class App extends Component {
    constructor(props) {
        super(props);
       this.state ={
           showPass: true
       }
    }
    _onPress =() => { 
        this.setState ({ 
            showPass: false
        })
    }
    render() {
        return (<View style={{
            backgroundColor: '#5f9ea0',
            flex: 1,

      
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            

                
              
                <TextInput
                    style={{
                        
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius:14
                    }}
                inlineImageLeft='image'
                    keyboardType='default'
                    placeholder='Enter your password'
                    secureTextEntry={this.state.showPass}
                    
                />
            <Button style={{
                fontSize: 40,
                padding: 2,
                marginTop: 120,
                backgroundColor: 'aqua'

            }}
                onPress={this._onPress}
                title="press me"

            ></Button>


        </View>
        );
    }
}