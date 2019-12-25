import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { styles } from "../styles/screens/setting";

const list = [
  {
    name: "Dang Ngoc Vu",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Developer"
  }
];
const list2 = [
  {
    title: "Setting",
    icon: "settings"
  },
  {
    title: "Logout",
    icon: "exit-to-app"
  }
];

class SettingScreen extends Component {
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={
        <View style={styles.subtitleView}>
          <Text style={styles.subtitleText}>{item.subtitle}</Text>
        </View>}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      bottomDivider
      chevron
    />
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
        <View>
          {list2.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              chevron
            />
          ))}
        </View>
      </View>
    );
  }
}

export default SettingScreen;
