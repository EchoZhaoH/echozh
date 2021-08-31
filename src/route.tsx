import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import App from './App'
import { Article } from './components/article'
import VWorld from './components/v-world'
import { Sierpinski as Class1Demo1 } from './components/webgl/class1/demo1'
import { Sierpinski as Class1Demo2 } from './components/webgl/class1/demo2'
import { useDark } from './hooks'

export function RoutesMap() {
  useDark()
  return (
    <Router>
      <Switch>
        <Route exact path="/v-world" component={VWorld} />
        <Route exact path="/webgl/class1/demo2" component={Class1Demo2} />
        <Route exact path="/webgl/class1/demo1" component={Class1Demo1} />
        <Route exact path="/articles/:id" render={props => <Article id={props.match.params.id} {...props} />} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  )
}