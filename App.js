import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './context/LogContext';
import {SearchContextProvider} from './context/SearchContext';
function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}
//logcontextprovider 컴포넌트 안에  rootstack 등록 == rootstack = children
export default App;
