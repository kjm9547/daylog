import React from 'react';
import { createContext, useState } from 'react';

const LogContext = createContext();

export function LogContextProvider({children}){
    const [logs,setLogs] = useState([])

    return(
        <LogContext.Provider value={{logs}}>
            {children}
        </LogContext.Provider>
    );
}
//children은 logcontext를 통해 context api가 사용되는 rootstack 컴포넌트를 뜻함
//children == <RootStack/>
export default LogContext;