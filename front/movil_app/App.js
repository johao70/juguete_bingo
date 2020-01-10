// import React from 'react';
// import Navigator from './routes';

// export default function App() {
//   return (
//     <Navigator/>
//   );
// }

import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text} from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['B','I','N','G','O'],
      tableData: [
        ['70', '62', '3', '12', '42'],
        ['91', '80', '18', '40', '38'],
        ['1', '2', '', '45', '29'],
        ['10', '50', '25', '86', '10'],
        ['15', '24', '28', '74', '1']
      ]
    }
  }

  render() {
    const state = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.container_principal}>
          <TextInput
            style={styles.bola_principal}
            value="69"
            editable={false}
          />
        </View>

        <View style={styles.container_secundarias}>
          <TextInput
            style={styles.bola_secundaria}
            value="26"
            editable={false}
          />
          <TextInput
            style={styles.bola_secundaria}
            value="57"
            editable={false}
          />
          <TextInput
            style={styles.bola_secundaria}
            value="83"
            editable={false}
          />
          <TextInput
            style={styles.bola_secundaria}
            value="90"
            editable={false}
          />
        </View>

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{backgroundColor: '#537791', }}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff' 
  },
  container_principal: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  bola_principal: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 100,
    position: "absolute",
    top: 25,
    color: "black",
    textAlign: "center",
    fontSize: 100
  },
  container_secundarias: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  bola_secundaria: {
    backgroundColor: "black",
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    marginBottom: 50,
    color: "white",
    textAlign: "center",
    fontSize: 50
  },
  body: {
    flex: 2.2,
    flexDirection: 'column',
    backgroundColor: 'yellow',
    justifyContent: "center"
  },
  head: { 
    height: 40, 
    backgroundColor: 'black',    
  },
  text: { margin: 6 , color: 'white'}
});

export default Home;
