import React, { Component } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Card, Input, Button, CheckBox } from "react-native-elements";
import { styles } from "../../styles/screens/leave";
import MultiSelect from "react-native-multiple-select";
import Dropdown from "../../components/Dropdown";

items = [
  {
    id: "92iijs7yta",
    name: "ngocvudut1995@gmail.com"
  },
  {
    id: "a0s0a8ssbsd",
    name: "admin@gmail.com"
  }
];
class NewLeaveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      hideResults: false,
      selectedItems: [],
      paidTime: true,
      maternityLeave: false,
      paternityLeave: false,
      sickLeave: false,
      otherLeave: false,
      marriage: false,
      bereavementLeave: false
    };
  }
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
  _filterData = query => {
    return data.filter(
      item => item.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };
  renderGeneral = () => {
    const { selectedItems } = this.state;
    return (
      <Card title="General">
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Input disabled label="Employee Name" value="Dang Ngoc Vu" />
          </View>
          <View style={{ flex: 1 }}>
            <Input disabled label="Employee ID" value="24h-0004" />
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingHorizontal: 10
            }}
          >
            <Text
              style={{ fontSize: 16, color: "#86939e", fontWeight: "bold" }}
            >
              Direct Manager:
            </Text>
            <Dropdown
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" }
              ]}
            />
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Input disabled label="Team" value="IMF" />
          </View>
          <View style={{ flex: 1 }}>
            <Input disabled label="Department" value="Engineering" />
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingHorizontal: 10
            }}
          >
            <Text
              style={{ fontSize: 16, color: "#86939e", fontWeight: "bold" }}
            >
              Inform to:
            </Text>
            <MultiSelect
              hideTags
              items={items}
              uniqueKey="id"
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Pick Emails"
              searchInputPlaceholderText="Search Email..."
              onChangeInput={text => console.log(text)}
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{ color: "#CCC" }}
              submitButtonColor="#CCC"
              submitButtonText="Submit"
              fontSize={18}
            />
          </View>
        </View>
      </Card>
    );
  };
  toogleCheckbox = name => e => {
    this.setState({
      [name]: !this.state[name]
    });
  };
  renderTimeOff = () => {
    const {
      paidTime,
      maternityLeave,
      paternityLeave,
      sickLeave,
      otherLeave,
      marriage,
      bereavementLeave
    } = this.state;
    return (
      <Card title="Detail of time off">
        {/* Paid Time Off */}
        <CheckBox
          title="Paid Time Off"
          checked={paidTime}
          onPress={this.toogleCheckbox("paidTime")}
        />
        {paidTime && null}
        {/* Maternity Leave */}
        <CheckBox
          title="Maternity Leave"
          checked={maternityLeave}
          onPress={this.toogleCheckbox("maternityLeave")}
        />
        {maternityLeave && (
          <View style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  paddingHorizontal: 10
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#86939e", fontWeight: "bold" }}
                >
                  Number of babies:
                </Text>
                <Dropdown
                  items={[
                    { label: "Singleton - 6 months off", value: "singleton-6" },
                    { label: "Twin - 7 months off", value: "twin" },
                    { label: "Triplets - 8 months off", value: "triplets" },
                    { label: "Singleton - 1 months off", value: "singleton-1" }
                  ]}
                />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 16 }}>2019-11-11: </Text>
              </View>
              <View style={{ flex: 2 }}>
                <CheckBox
                  title="Full day"
                  checked={false}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  //   onPress={this.toogleCheckbox("paternityLeave")}
                />
                <CheckBox
                  title="Half day"
                  checked={true}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  //   onPress={this.toogleCheckbox("paternityLeave")}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Input label="Further Explanation" value="" />
            </View>
          </View>
        )}
        {/* Paternity Leave */}
        <CheckBox
          title="Paternity Leave"
          checked={paternityLeave}
          onPress={this.toogleCheckbox("paternityLeave")}
        />
        {paternityLeave && (
          <View style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  paddingHorizontal: 10
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#86939e", fontWeight: "bold" }}
                >
                  Number of babies:
                </Text>
                <Dropdown
                  items={[
                    { label: "Singleton - 6 months off", value: "singleton-6" },
                    { label: "Twin - 7 months off", value: "twin" },
                    { label: "Triplets - 8 months off", value: "triplets" },
                    { label: "Singleton - 1 months off", value: "singleton-1" }
                  ]}
                />
              </View>
            </View>
          </View>
        )}
        {/* Sick Leave */}
        <CheckBox
          title="Sick Leave"
          checked={sickLeave}
          onPress={this.toogleCheckbox("sickLeave")}
        />
        {sickLeave && (
          <View style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  paddingHorizontal: 10
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#86939e", fontWeight: "bold" }}
                >
                  Number of babies:
                </Text>
                <Dropdown
                  items={[
                    { label: "Singleton - 6 months off", value: "singleton-6" },
                    { label: "Twin - 7 months off", value: "twin" },
                    { label: "Triplets - 8 months off", value: "triplets" },
                    { label: "Singleton - 1 months off", value: "singleton-1" }
                  ]}
                />
              </View>
            </View>
          </View>
        )}
        {/* Marriage */}
        <CheckBox
          title="Marriage"
          checked={marriage}
          onPress={this.toogleCheckbox("marriage")}
        />
        {marriage && (
          <View style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  paddingHorizontal: 10
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#86939e", fontWeight: "bold" }}
                >
                  Number of babies:
                </Text>
                <Dropdown
                  items={[
                    { label: "Singleton - 6 months off", value: "singleton-6" },
                    { label: "Twin - 7 months off", value: "twin" },
                    { label: "Triplets - 8 months off", value: "triplets" },
                    { label: "Singleton - 1 months off", value: "singleton-1" }
                  ]}
                />
              </View>
            </View>
          </View>
        )}
        {/* Bereavement Leave */}
        <CheckBox
          title="Bereavement Leave"
          checked={bereavementLeave}
          onPress={this.toogleCheckbox("bereavementLeave")}
        />
        {marriage && (
          <View style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  paddingHorizontal: 10
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#86939e", fontWeight: "bold" }}
                >
                  Number of babies:
                </Text>
                <Dropdown
                  items={[
                    { label: "Singleton - 6 months off", value: "singleton-6" },
                    { label: "Twin - 7 months off", value: "twin" },
                    { label: "Triplets - 8 months off", value: "triplets" },
                    { label: "Singleton - 1 months off", value: "singleton-1" }
                  ]}
                />
              </View>
            </View>
          </View>
        )}
        {/* Other Leave */}
        <CheckBox
          title="Other"
          checked={otherLeave}
          onPress={this.toogleCheckbox("otherLeave")}
        />
        {otherLeave && (
          <View style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  paddingHorizontal: 10
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#86939e", fontWeight: "bold" }}
                >
                  Number of babies:
                </Text>
                <Dropdown
                  items={[
                    { label: "Singleton - 6 months off", value: "singleton-6" },
                    { label: "Twin - 7 months off", value: "twin" },
                    { label: "Triplets - 8 months off", value: "triplets" },
                    { label: "Singleton - 1 months off", value: "singleton-1" }
                  ]}
                />
              </View>
            </View>
          </View>
        )}
      </Card>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {this.renderGeneral()}
          {this.renderTimeOff()}
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="Submit new request"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default NewLeaveScreen;
