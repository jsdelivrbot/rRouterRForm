import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';

const Greeting1 = () => {
  return <div>Hey there!</div>
}
const Greeting2 = () => {
  return <div>Ola alla!</div>
}
const Greeting3 = () => {
  return <div>Good Morning!</div>
}

export default (
  <Route path="/" component={App} >
    <Route path="greet1" component={Greeting1} />
    <Route path="greet2" component={Greeting2} />
    <Route path="greet3" component={Greeting3} />
  </Route>
);
