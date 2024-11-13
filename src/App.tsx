import { Route, Switch } from 'wouter'
import Landing from './pages/landing'
import Home from './pages/home'
import Error from './pages/error'

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

      <Route component={Error} />
    </Switch>
  )
}

export default App
