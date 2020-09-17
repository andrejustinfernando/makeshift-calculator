import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Operation = ({ op, onOP}) => {
  return (
    <View>
     <TouchableOpacity style={styles.buttons} onPress={()=>onOP()}>
     <Text style={styles.ops}>{op}</Text>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

    ops:{
        fontSize: 70,
        color: 'white',
        textAlign: 'center',
      
        
    },
    buttons:{
        borderWidth:1,
        borderRadius: 50,
        backgroundColor:"black",
        height: 80,
        width: 80,
        margin: 5
    },
});

export default Operation;
