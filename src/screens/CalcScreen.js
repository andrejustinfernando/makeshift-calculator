import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import Operation from '../components/Operation';

const CalcScreen = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [op, setOP] = useState(' ');
    const [ans, setAns] = useState('');
    const theAns = (op) => {
        switch (op) {
          case '+':
            setAns(parseInt(num1) + parseInt(num2));
            break;
          case '-':
            setAns(num1 - num2);
            break;
          case '×':
            setAns(num1 * num2);
            break;
          case '÷':
            setAns(num1 / num2);
            break;
        }
      };
    return (
    <View style={{backgroundColor:'#141d26',flex:1}}>
    <Text style={styles.ans}>{ans}</Text>
        <View style={styles.input}>
            <TextInput
            onChangeText={(text) => {
              setNum1(text);
            }}
            keyboardType = {'numeric'}
            style={styles.textInput}
            value= {num1}
            />
            <Text style={{color: 'white', fontSize:40}}> {op} </Text>
            <TextInput
            onChangeText={(text) => {
              setNum2(text);
            }}
            keyboardType = {'numeric'}
            style={styles.textInput}
            value={num2}
            />
        </View>
        <View>
            <View style={styles.input}>
            <Operation op="+" onOP={() => setOP('+')}/>
            <Operation op="-" onOP={() => setOP('-')}/>
            <Operation op="×" onOP={() => setOP('×')}/>
            <Operation op="÷" onOP={() => setOP('÷')}/>
            </View>
            <View style={styles.input}>
            <TouchableOpacity style={styles.buttons} onPress={() => {setOP('  ');setAns(); setNum1();setNum2()}}>
              <Text style={styles.ops}>c</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => theAns(op)}>
              <Text style={styles.ops}>=</Text>
            </TouchableOpacity>
            </View>
        </View>

    </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        backgroundColor: 'white',
        width: 150,
        fontSize: 40,
      },
    input: {
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 40,
    },
    ans:{
        fontSize: 70,
        textAlign: 'center',
        borderWidth: 2,
        margin: 30,
        backgroundColor: 'white',
    },
    ops:{
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
    },

    buttons:{
      borderWidth:1,
      borderRadius: 20,
      backgroundColor:"black",
      height: 70,
      width: 170,
      margin: 10
  },

    container:{
      marginTop: 40,
    },
    clearquals:{   
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"white",
        height: 70,
        width: 110,
        margin: 10

    }
});

export default CalcScreen;