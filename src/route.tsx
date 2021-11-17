import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import App from './App'
import { Archive } from './components/archive'
import { Article } from './components/article'
import VWorld from './components/v-world'
import { Sierpinski as Class1Demo1 } from './components/webgl/class1/demo1'
import { Sierpinski as Class1Demo2 } from './components/webgl/class1/demo2'
import { Sierpinski as Class1Demo3 } from './components/webgl/class1/demo3'
import { Sierpinski as Class1Demo4 } from './components/webgl/class1/demo4'
import { WEBGLClassesPage } from './components/webgl/classes'
import { useModeSwitch } from './hooks/useModeSwitch'

export function RoutesMap() {
  useModeSwitch()
  return (
    <Router>
      <Switch>
        <Route exact path="/v-world" component={VWorld} />
        <Route exact path="/webgl/class1/demo4" component={Class1Demo4} />
        <Route exact path="/webgl/class1/demo3" component={Class1Demo3} />
        <Route exact path="/webgl/class1/demo2" component={Class1Demo2} />
        <Route exact path="/webgl/class1/demo1" component={Class1Demo1} />
        <Route exact path="/webgl" component={WEBGLClassesPage} />
        <Route exact path="/articles/:id" render={props => <Article id={props.match.params.id} {...props} />} />
        <Route exact path="/articles" component={Archive} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  )
}