import {Route, Switch, Redirect} from "wouter"
import { useSelector } from "react-redux"

import Home from "./pages/Home"
import LoginRegister from "./pages/LoginRegister"
import { PokemonContextProvider } from "./context/PokemonContext"
import { RootState} from "./state/Reducers"

import './App.css'
import Profile from "./pages/Profile"

function App() {
  const { token } = useSelector((state:RootState) => state.session)

  return ( 
      <PokemonContextProvider>
        <Switch>
          <Route 
            component={Home} 
            path="/"
          />
          <Route component={LoginRegister} path="/login" />
          <Route component={LoginRegister} path="/register"/>
          {token 
            ?<Route component={Profile} path="/profile"/>
            :<Route  path='/profile'>{() =><Redirect to='/'/>}</Route>
          }
        </Switch>
      </PokemonContextProvider>
  )
}

export default App
