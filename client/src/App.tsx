import {Route, Switch} from "wouter"
import Home from "./pages/Home"
import LoginRegister from "./pages/LoginRegister"
import './App.css'
import { PokemonContextProvider } from "./context/PokemonContext"

function App() {

  return (
      <PokemonContextProvider>
        <Switch>
          <Route 
            component={Home} 
            path="/"
          />
          <Route path="/login"><LoginRegister isLogin={true}/></Route>
          <Route path="/register"><LoginRegister isLogin={false}/></Route>
        </Switch>
      </PokemonContextProvider>
  )
}

export default App
