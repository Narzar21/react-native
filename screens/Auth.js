import React, {Component} from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView } from 'react-native';
var styles=require('../styles/style')
const someText='Согласно классификации М.Вебера, форма политического сознания предсказуема. Политическая психология, согласно традиционным представлениям, символизирует системный культ личности'

export default class Auth extends Component {
  constructor(props){
    super(props)
    this.state={userName: ''}
  }
  
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topText}>Вход в личный кабинет</Text>
      </View>
      <ScrollView ref = 'scroll' style={width="100%"}>
      <KeyboardAvoidingView style={styles.scroll} behavior="position">
          <Text style={styles.enterText}>Вход</Text>
          <Text style={styles.enterTextInfo}>{someText}</Text>
          <View style={styles.logInView}>
              <TextInput style={styles.input} placeholder='Логин' onChangeText={userName => this.setState({userName})}></TextInput>
              <TextInput style={styles.input} placeholder='Пароль' secureTextEntry={true}></TextInput>
              <TouchableOpacity style={styles.loginBtn} onPress={() =>
                {const {userName} = this.state;
                if(userName==='') {
                  Alert.alert('Введите логин!')
                }
                else {
                  this.props.navigation.navigate('list',{userName: userName})
                }
                }
              }>
                  <Text style={styles.logInBtnText}>Войти</Text>
              </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );}
}
