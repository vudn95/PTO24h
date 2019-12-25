import React from "react";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default Dropdown = ({
    items,
    onValueChange = () => {
      value => console.log(value);
    }
  }) => {
    return (
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        Icon={() => {
          return <Icon name="chevron-down" size={24} color="black" />;
        }}
        style={{
          inputIOS: {
            fontSize: 18,
            minHeight: 40,
            color: "#000",
            flex: 1
          },
          inputIOSContainer: {
            borderBottomWidth: 1,
            borderColor: "#86939e"
          },
          inputAndroidContainer: {
            borderBottomWidth: 1,
            borderColor: "#86939e"
          },
          inputAndroid: {
            fontSize: 18,
            minHeight: 40,
            alignSelf: "center",
            color: "#000",
            opacity: 0.5,
            flex: 1
          },
          iconContainer: {
            top: 5,
            right: 15,
            color: "#000",
            opacity: 0.5
          }
        }}
      />
    );
  };