import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { Container, Content, Card, CardItem, Body, Item, Label, Input, Button, AsyncStorage } from 'native-base';

const http = new XMLHttpRequest();

const API_URL = "http://192.168.1.6:8001/server/bingo";

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            nombre: '',
            correo: '',
            clave: ''
        };
    }

    handleNombre = text => {
        this.setState({ nombre: text });
    };

    handleCorreo = text => {
        this.setState({ correo: text });
    };

    handleClave = text => {
        this.setState({ clave: text });
    };

    async componentDidMount() {
        await Font.loadAsync({
            'bign-font': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
        }).then(() => {
            this.setState({ fontLoaded: true })
        })
    }
    
    saveData = () => {
        let tabla = "persona";

        let data = `{
            "tabla": "${tabla}", 
            "datos":
              {
                "tipo_persona_id": 2,
                "persona_nombre": "${this.state.nombre}",
                "persona_email": "${this.state.correo}",
                "persona_clave": "${this.state.clave}"
              }
        }`;

        http.open("POST", API_URL, true);
        http.setRequestHeader("Content-Type", "application/json");
      
        if (this.state.nombre == "" || this.state.correo == "" || this.state.clave == "") {
          alert("Complete todos los datos para continuar...");
        } else {
          http.send(data);
          alert("Se ha registrado correctamente");
          this.props.navigation.push('Login')
        }
    }

    render() {
        return (
            <Container>
                <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>

                    <Content contentContainerStyle={styles.content}>
                    {this.state.fontLoaded == true ? (
                        <Text style={styles.registrar1}>
                            INGRESA TUS DATOS
                         </Text>
                         ) : (<Text style={styles.registrar2}>Loading...</Text>)
                        }
                        <Card >
                            <CardItem style={styles.card}>
                                <Body style={styles.input}>
                                    <Item inlineLabel>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.user1}>Nombre:</Label>
                                        ) : (<Text style={styles.user2}>Loading...</Text>)
                                    }
                                        <Input onChangeText={this.handleNombre}/>
                                    </Item>

                                    <Item inlineLabel>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.user1}>Correo:</Label>
                                        ) : (<Text style={styles.user2}>Loading...</Text>)
                                    }
                                        <Input onChangeText={this.handleCorreo}/>
                                    </Item>

                                    <Item inlineLabel last>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.clave1}>Clave:</Label>
                                        ) : (<Text style={styles.clave2}>Loading...</Text>)
                                    }
                                        <Input onChangeText={this.handleClave}/>
                                    </Item>
                                    <Button rounded style={styles.btn} onPress={this.saveData}>
                                        <Text style={styles.txt}>Enviar</Text>
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
        justifyContent: 'center'

    },
    registrar1: {
        flex: 1,
        width: '100%',
        marginTop: '45%',
        fontFamily: 'bign-font',
        fontSize: 30,
        marginLeft: '5%',
        color: '#EFFBF8',

    },
    registrar2: {
        flex: 1,
        width: '100%',
        marginTop: '45%',
        fontSize: 30,
        marginLeft: '5%',
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
    user1: {
        color: '#EFFBF8',
        fontSize: 25,
    
        fontFamily: 'bign-font',

    },
    user2: {
        color: '#EFFBF8',
        fontSize: 25,
        
    },
    clave1: {
        color: '#EFFBF8',
        fontSize: 25,
        fontFamily: 'bign-font',

    },
    clave2: {
        color: '#EFFBF8',
        fontSize: 25,


    },
    btn: {
        marginTop: '15%',
        marginLeft: '25%',
        backgroundColor: '#F2D0A7',
        width: '50%',
        justifyContent: 'center',

    },
    txt: {
        color: 'black',
        fontSize: 15,
    }

});