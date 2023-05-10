import {Route, Switch} from "wouter"
import Home from "./pages/Home"
import './App.css'
import { PokemonContextProvider } from "./context/PokemonContext"

function App() {

  return (
      <PokemonContextProvider>
        <Switch>
          <Route component={Home} path="/"/>
        </Switch>
      </PokemonContextProvider>
  )
}

export default App
