import { Route, Switch } from 'wouter'
import Landing from './pages/landing'
import Home from './pages/home'
import Seminarios from './pages/seminarios'
import SeminariosDetalles from './pages/seminarios/Details'
import Residencias from './pages/residencias'
import ResidenciasDetalles from './pages/residencias/Details'
import Cenas from './pages/cenas'
import CenasDetalles from './pages/cenas/Details'
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
        path='/seminarios/:id'
        component={SeminariosDetalles}
      />
      <Route
        path='/residencias'
        component={Residencias}
      />
      <Route
        path='/residencias/:id'
        component={ResidenciasDetalles}
      />
      <Route
        path='/cenas'
        component={Cenas}
      />
      <Route
        path='/cenas/:id'
        component={CenasDetalles}
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
