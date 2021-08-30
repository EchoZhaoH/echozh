import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import App from './App'
import { Article } from './components/article'
import VWorld from './components/v-world'
import { Sierpinski } from './components/webgl/class1/sierpinski'
import { useDark } from './hooks'

export function RoutesMap() {
  useDark()
  return (
    <Router>
      <Switch>
        <Route exact path="/v-world" component={VWorld} />
        <Route exact path="/webgl-sierpinski" component={Sierpinski} />
        <Route exact path="/articles/:id" render={props => <Article id={props.match.params.id} {...props} />} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  )
}