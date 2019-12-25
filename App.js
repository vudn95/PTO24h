import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/Home";
import SettingScreen from "./src/screens/Setting";
import LeaveScreen from "./src/screens/Leave/Leave";
import NewLeaveScreen from "./src/screens/Leave/New";
import DetailLeaveScreen from "./src/screens/Leave/Detail";
import SignInScreen from "./src/screens/SignIn";
import Icon from "react-native-vector-icons/AntDesign";

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: {
  screen: SignInScreen,
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      height: 0
    },
  })
} }, {
  headerMode: "screen"
});
const LeaveTab = createStackNavigator({
  Leave: {
    screen: LeaveScreen,
    navigationOptions: ({ navigation }) => ({
      title: `List Leave Request`
    })
  },
  NewLeave: {
    screen: NewLeaveScreen,
    navigationOptions: ({ navigation }) => ({
      title: `New Leave Request`
    })
  },
  DetailLeave: {
    screen: DetailLeaveScreen,
    path: 'DetailLeave/:id',
    navigationOptions: ({ navigation }) => ({
      title: `Request #${navigation.state.params.id}`
    })
  }
});
const MainTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="home" size={24} color={tintColor} />;
        }
      },
      headerStyle: { marginTop: 24 }
    },
    Leave: {
      screen: LeaveTab,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="infocirlceo" size={24} color={tintColor} />;
        }
      },
      headerStyle: { marginTop: 24 }
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="bars" size={24} color={tintColor} />;
        }
      },
      headerStyle: { marginTop: 24 }
    }
  },
  {
    tabBarOptions: {
      style: {
        border: "1px solid black"
      }
    }
  }
);
const switchRouter = createSwitchNavigator({
  // Loading: {
  //   screen: AuthLoadingScreen,
  // },
  Auth: {
    screen: AuthStack
  },
  App: {
    screen: MainTabs
  }
});
// const switchRouter = createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: MainTabs,
//     Auth: AuthStack
//   },
//   {
//     initialRouteName: "AuthLoading"
//   }
// );

export default createAppContainer(switchRouter);
