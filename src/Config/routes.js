import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Number2 from '../Number2';

export default (
  <Switch >
    <Route exact path='/'/>
    <Route path='/number2' component={Number2}/>
  </Switch>
)