import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"

const Users = ()=>{
  const data = useContext(DataContext)
  return (
    <div>
      <h1>Users Page</h1>
      {JSON.stringify(data.users)}
      {JSON.stringify(data.x)}
      {JSON.stringify(data.demoState)}
      <button onClick={()=>data.setDemoState('changed')}>changed text</button>
      <p>{data.demoState}</p>
    </div>
  )
}
export default Users