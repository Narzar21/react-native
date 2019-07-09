import React, {Component} from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
var styles=require('../styles/style')
import newsList from '../newsList'

class Elements extends Component {
  render(){
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const userName = navigation.getParam('userName');
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('list',{userName: userName})}>
          <Text style={styles.buttonToList}>←</Text>
      </TouchableOpacity>
      <Text style={styles.topText}>График</Text>
      <Text style={styles.topTextUser}>{userName}</Text>
      <Image style={styles.userIcon} source={require('./icon.png')} onPress={() => this.props.navigation.navigate('list',{userName: userName})} />
    </View>
  <View width='95%' space-between="15">
      <Text style={styles.listTitle}>{newsList[id].title}</Text>
      <Text style={styles.newsInfo}>{newsList[id].description}</Text>
  </View>
  <View style={styles.newsBtnsView}>
    <View width='50%'>
      <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate('list',{userName: userName})}>
        <Text style={styles.backBtnText}>Назад</Text>
      </TouchableOpacity>
    </View>
    <View width='50%'>
      <TouchableOpacity style={styles.logOutBtn} onPress={() => this.props.navigation.navigate('auth')}>
        <Text style={styles.logOutBtnText}>Выйти из аккаунта</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
  );}
}
export default Elements;
