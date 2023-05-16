import {Route, Switch} from "wouter"
import { useMemo } from "react"
import { ThemeProvider, createTheme } from "@mui/material"

import Home from "./pages/Home"
import LoginRegister from "./pages/LoginRegister"
import { PokemonContextProvider } from "./context/PokemonContext"
import { themeSetting } from './theme'
import './App.css'

function App() {
  const theme = useMemo(() => createTheme(themeSetting()), [])

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
