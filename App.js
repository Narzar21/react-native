import React, {Component} from 'react';
import Auth from './screens/Auth'
import List from './screens/List'
import Elements from './screens/Elements'
var styles=require('./styles/style')
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createSwitchNavigator({
  auth: Auth,
  list: List,
  elements: Elements,
});

const NavContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render(){
  return (
    <NavContainer />
  )
}
}
