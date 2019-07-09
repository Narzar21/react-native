import React, {Component} from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import newsList from '../newsList'
var styles=require('../styles/style')

class List extends Component {
  render(){
    const { navigation } = this.props;
    const userName = navigation.getParam('userName');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topText}>Список</Text>
        <Text style={styles.topTextUser}>{userName}</Text>
        <Image style={styles.userIcon} source={require('./icon.png')} />
      </View>
      <View width='95%' space-between="15">
        <TouchableOpacity style={styles.lists} onPress={()=>this.props.navigation.navigate('elements',{id: newsList[0].id, userName: userName})}>
          <Text style={styles.listTitle}>{newsList[0].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lists} onPress={()=>this.props.navigation.navigate('elements',{id: newsList[1].id, userName: userName})}>
          <Text style={styles.listTitle}>{newsList[1].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lists} onPress={()=>this.props.navigation.navigate('elements',{id: newsList[2].id, userName: userName})}>
          <Text style={styles.listTitle}>{newsList[2].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lists} onPress={()=>this.props.navigation.navigate('elements',{id: newsList[3].id, userName: userName})}>
          <Text style={styles.listTitle}>{newsList[3].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lists} onPress={()=>this.props.navigation.navigate('elements',{id: newsList[4].id, userName: userName})}>
          <Text style={styles.listTitle}>{newsList[4].title}</Text>
        </TouchableOpacity>
    </View>
  </View>
  );
  }
}
export default List;
