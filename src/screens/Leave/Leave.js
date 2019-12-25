import React, { Component } from "react";
import { View, Text, Image, FlatList, SafeAreaView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { styles } from "../../styles/screens/leave";

const list = [
  {
    id: "3342",
    title: "Request #3342"
  },
  {
    id: "3343",
    title: "Request #3343"
  },
  {
    id: "3344",
    title: "Request #3344"
  },
  {
    id: "3345",
    title: "Request #3345"
  },
  {
    id: "3346",
    title: "Request #3346"
  },
  {
    id: "3347",
    title: "Request #3347"
  }
];

class LeaveScreen extends Component {
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => (
    <Card title={item.title}>
      <Text style={{ marginBottom: 10 }}>Type: Comp.Time</Text>
      <Text style={{ marginBottom: 10 }}>Total day(s): 3</Text>
      <Text style={{ marginBottom: 10 }}>From: 2019-09-09</Text>
      <Text style={{ marginBottom: 10 }}>To: 2019-09-11</Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="VIEW NOW"
        onPress={() => this.openDetail(item.id)}
      />
    </Card>
  );
  openCreate = () => {
    this.props.navigation.push("NewLeave")
  }
  openDetail = (id) => {
    this.props.navigation.push(`DetailLeave`, {id: id})
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.topBanner}>
          <Card title="New Request">
            <Text style={{ marginBottom: 10 }}>Create new leave request</Text>
            <Button
              icon={<Icon name="add" color="#ffffff" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
              }}
              title="CREATE NOW"
              onPress={this.openCreate}
            />
          </Card>
        </SafeAreaView>
        <SafeAreaView style={styles.listBanner}>
          <FlatList
            style={{paddingBottom: 200}}
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default LeaveScreen;
