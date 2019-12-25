import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/screens/signIn";
import { TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Input } from "react-native-elements";

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  onChangeText = text => {
    this.setState({
      email: text
    });
  };

  login = () => {
    console.log("Login");
    this.props.navigation.navigate("App")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View
            style={{
              height: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              style={{
                width: 300,
                height: 100,
                resizeMode: "stretch",
                backgroundColor: "#000",
                margin: "auto"
              }}
              source={require("../assets/images/logo.png")}
            />
          </View>
          <Text style={styles.topText}>Sign in 24h-PTO System</Text>
        </View>
        <View style={styles.mainSection}>
          <Text style={{fontSize: 20}}>Sign In!</Text>
          <Input
            label="Email"
            placeholder="Please enter email!"
            leftIcon={<Icon name="email" size={24} color="black" />}
            leftIconContainerStyle={{ marginLeft: 0, padding: 0}}
          />
          <Input
            label="Password"
            placeholder="Please enter password!"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            inputStyle={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}
            leftIconContainerStyle={{ marginLeft: 0, padding: 0}}
          />
          <Button containerStyle={{padding: 20}} title="Login" onPress={this.login} />
          <Text style={{fontSize: 20}}><Icon name="lock" size={24} color="black" /> Forget Password!</Text>
        </View>
      </View>
    );
  }
}

export default SignInScreen;
