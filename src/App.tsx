import {Route, Switch} from "wouter"
import Home from "./pages/Home"
import './App.css'

function App() {

  return (
    <>
     <Switch>
        <Route component={Home} path="/"/>
      </Switch>
    </>
  )
}

export default App
