import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { Container, Content, Card, CardItem, Body, Item, Label, Input, Button } from 'native-base';

const http = new XMLHttpRequest();

const API_URL = "http://192.168.1.6:8001/server/bingo";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            correo: '',
            clave: ''
        };
    }

    handleCorreo = text => {
        this.setState({ correo: text });
    };

    handleClave = text => {
        this.setState({ clave: text });
    };

    async componentDidMount() {
        await Font.loadAsync({
            'bin-font': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
        }).then(() => {
            this.setState({ fontLoaded: true })
        })
    }

    login = () => {
        http.open("GET", API_URL + "?tabla=persona");
        http.responseType = "json";

        http.onload = () => {
            let datos = http.response.datos;
            let nombreBD;
            let correoBD;
            let contraseñaBD;
        
            datos.forEach(element => {
                if (
                element.persona_email == this.state.correo &&
                element.persona_clave == this.state.clave
                ) {
                nombreBD = element.persona_nombre;
                correoBD = element.persona_email;
                contraseñaBD = element.persona_clave;
                }
            });
        
            if (this.state.correo === correoBD) {
                if (this.state.clave === contraseñaBD) {
                    this.props.navigation.push('Inicio')
                }
            } else {
                alert("Datos incorrectos, intentelo nuevamente");
            }
        };
        http.send();
    }

    render() {
        return (
            <Container>
                <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>
                   
                    <Content contentContainerStyle={styles.content}>
                        {this.state.fontLoaded == true ? (
                            <Text style={styles.bingo1}>
                            BINGO
                             </Text>
                        ) : (<Text style={styles.bingo2}>Loading...</Text>)
                        }
            
                    <Card >
                            <CardItem style={styles.card}>
                                <Body style={styles.input}>
                                    <Item inlineLabel>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.input1}>Correo:</Label>
                                        ) : (<Text style={styles.input2}>Loading...</Text>)
                                    }
                                        <Input onChangeText={this.handleCorreo}/>
                                    </Item>
                                    <Item inlineLabel last>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.input3}>Clave:</Label>
                                        ) : (<Text style={styles.input4}>Loading...</Text>)
                                    }
                                        <Input onChangeText={this.handleClave}/>
                                   
                                    </Item>
                                    
                                    <Button rounded style={styles.btn}>
                                        <Text style={styles.txt} onPress={this.login}>Ingresar</Text>
                                    </Button>
                                    <Button rounded style={styles.btn2}>
                                        <Text style={styles.txt} onPress={() => this.props.navigation.push('Registro')}>Registrarse</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </ImageBackground>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        fontFamily: 'bin-font',
        
    },
    bingo1: {
        flex: 1,
        width: '100%',
        marginTop: '21%',
        fontFamily: 'bin-font',
        fontSize: 60,
        marginLeft: '24%',
        color: '#EFFBF8',
       
    },
    bingo2: {
        flex: 1,
        width: '100%',
        marginTop: '21%',
        fontSize: 60,
        marginLeft: '24%',
        color: '#EFFBF8',
       
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: '75%',
        height: '100%',
        marginLeft: '13%',
        paddingBottom: '25%',
       
          
    },
    card: {
        backgroundColor: '#013440',
        paddingBottom: '10%',
                
      
    },
    input1: {
        color: '#EFFBF8',
        fontSize: 25,
        fontFamily: 'bin-font',

    },
    input2: {
        color: '#EFFBF8',
        fontSize: 25,
        
    },
    input3: {
        color: '#EFFBF8',
        fontSize: 25,
        fontFamily: 'bin-font',

    },
    input4: {
        color: '#EFFBF8',
        fontSize: 25,
        paddingTop: '5%',
       

    },
    btn: {
        marginTop: '15%',
        marginLeft: '25%',
        backgroundColor: '#F2D0A7',
        width: '50%',
        justifyContent: 'center',
    },
    btn2: {
        marginTop: '5%',
        marginLeft: '25%',
        backgroundColor: '#BF9D7E',
        width: '50%',
        justifyContent: 'center',

    },
    txt: {
        color: 'black',
        fontSize: 15,
    }

});
