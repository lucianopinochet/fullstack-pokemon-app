import {Route, Switch} from "wouter"
import Home from "./pages/Home"
import Register from "./pages/Register"
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
          <Route 
            component={Register}
            path="/register"
          />
        </Switch>
      </PokemonContextProvider>
  )
}

export default App
