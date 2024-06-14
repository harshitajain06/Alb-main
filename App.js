import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Splash from './screens/Splash';
import HomeScreen from './screens/HomeScreen';
import GeneralInformation from './screens/GeneralInformation';
import ParentResources from './screens/ParentResources';
import PWAResources from './screens/PWAResources';
import DiscussionForum from './screens/DiscussionForum';
import ExpertAdvice from './screens/ExpertAdvice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component ={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="GeneralInformation" component={GeneralInformation} />
        <Stack.Screen name="ParentResources" component={ParentResources} />
        <Stack.Screen name="PWAResources" component={PWAResources} />
        <Stack.Screen name="DiscussionForum" component={DiscussionForum} />
        <Stack.Screen name="ExpertAdvice" component={ExpertAdvice} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;