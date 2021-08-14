import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import App from './App'
import VWorld from './components/v-world'

export function RoutesMap() {
  return (
    <Router>
      <Switch>
        <Route exact path="/v-world" component={VWorld} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  )
}