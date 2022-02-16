 import React from "react";
 import {NavigationContainer} from '@react-navigation/native';
 import RootStack from'./screens/RootStack';
 import { LogContextProvider } from "./context/LogContext";
 function App(){
   return(
     <NavigationContainer>
       <LogContextProvider>
         <RootStack />
        </LogContextProvider>
     </NavigationContainer>
   );
 }
//logcontextprovider 컴포넌트 안에  rootstack 등록 == rootstack = children
 export default App;