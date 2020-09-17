import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalcScreen from './src/screens/CalcScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator Screen">
        <Stack.Screen name="Calculator Screen" component={CalcScreen}  
        options=
              {{
                headerStyle:{backgroundColor:'#141d26'},
                headerTitleStyle:{alignSelf:'center', fontSize: 23, fontWeight:'bold', color: 'white'}, 
                title: 'Makeshift Calculator', 
              }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
