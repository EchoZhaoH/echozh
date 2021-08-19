import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import App from './App'
import { Article } from './components/article'
import VWorld from './components/v-world'

export function RoutesMap() {
  return (
    <Router>
      <Switch>
        <Route exact path="/v-world" component={VWorld} />
        <Route exact path="/articles/:id" render={props => <Article id={props.match.params.id} {...props} />} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  )
}