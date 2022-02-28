import React, { useState } from "react"; 

export const DataContext = React.createContext() 

const DataProvider = (props)=> {
  const [users, setUsers] = useState([{id:53, name:'Phoenix'}])
  const [demoState, setDemoState] = useState('hi')

    const dataProviderState = {users, demoState, x:1, setDemoState}
    return (
      <DataContext.Provider value={dataProviderState}>
          {props.children}
      </DataContext.Provider>
    )
}

export default DataProvider