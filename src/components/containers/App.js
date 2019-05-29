import React from 'react';
import BogoPlayer from './BogoPlayer';
import NotFound from './NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle'

const App = () => (
  <BrowserRouter basement="/React-Web-VideoPlayer/">
    <>
      <Switch>
        <Route exact path="/" component={BogoPlayer} />
        <Route exact path="/:activeVideo" component={BogoPlayer}/>
        <Route component={NotFound}/>
      </Switch>
      <GlobalStyle/>
    </>
  </BrowserRouter>
)

export default App;