import React from 'react';
import { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}){
    const [logs,setLogs] = useState([])
  
    const onCreate = ({title,body, date})=>{
        const log = {
            id:uuidv4(),
            title,
            body,
            date,
        };
        setLogs([log, ...logs])
    }

    const onModify = (modified) => {
        const nextLogs = logs.map((log) =>
        log.id === modified.id ? modified : log,
        );
        setLogs(nextLogs)
    }
    return(
        <LogContext.Provider value={{logs, onCreate, onModify}}>
            {children}
        </LogContext.Provider>
    );
}
//children은 logcontext를 통해 context api가 사용되는 rootstack 컴포넌트를 뜻함
//children == <RootStack/>
export default LogContext;