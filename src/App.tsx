import { Route, Switch } from 'wouter'
import Landing from './pages/landing'
import Home from './pages/home'
import Seminarios from './pages/seminarios'
import Residencias from './pages/residencias'
import Cenas from './pages/cenas'
import Calendario from './pages/calendario'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Landing}
      />
      <Route
        path='/home'
        component={Home}
      />
      <Route
        path='/seminarios'
        component={Seminarios}
      />
      <Route
        path='/residencias'
        component={Residencias}
      />
      <Route
        path='/cenas'
        component={Cenas}
      />
      <Route
        path='/calendario'
        component={Calendario}
      />

      <Route component={Landing} />
    </Switch>
  )
}

export default App
