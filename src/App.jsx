import { useState } from 'react'
import './App.css'

function App() {  
  const [account, setAccount] = useState(null)
  const connectHandler = async () => {
    if (!window.trustwallet) alert("no trustwallet")
      const accounts = await window.trustwallet.request({method: "eth_requestAccounts"});
      setAccount(accounts[0])
  } 
  return (
    <>
    <h5>{account}</h5>
  <button onClick={connectHandler}>Connect</button>       
    </>
  )
}

export default App
