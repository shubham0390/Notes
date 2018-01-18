import React from "react";
import PropTypes from "prop-types";
import {
  Dimensions,
  View,
  Image,
  Text,
  TouchableNativeFeedback
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./style";

const window = Dimensions.get("window");

export default class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Favourite: false,
      Hearted: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <View style={styles.titleContaier}>
            <Text style={{ color: "#FFFFFF" }}>Filter</Text>
            <TouchableNativeFeedback
              onPress={() => this.props.onCloseMenuClicked()}
              background={TouchableNativeFeedback.Ripple("#AAF", true)}
            >
              <Icon
                style={styles.filterIcon}
                name="clear"
                size={24}
                color="#FFFFFF"
              />
            </TouchableNativeFeedback>
          </View>

          {this.renderMenuRow(
            "Hearted",
            this.getSelectedColor(this.state.Hearted)
          )}
          {this.renderMenuRow(
            "Favourite",
            this.getSelectedColor(this.state.Favourite)
          )}
        </View>
        <View style={styles.actionButtonContainer}>
          <TouchableNativeFeedback
            onPress={this.onFilterApply}
            background={TouchableNativeFeedback.Ripple("#AAF", true)}
          >
            <Text style={styles.actionButton}>APPLY</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }

  renderMenuRow = (name, color) => {
    return (
      <TouchableNativeFeedback
        onPress={() => this.onItemSelected(name)}
        background={TouchableNativeFeedback.Ripple("#AAF", true)}
      >
        <View style={styles.item}>
          <Text style={{ color }}>{name}</Text>
          <Icon style={styles.filterIcon} name="done" size={24} color={color} />
        </View>
      </TouchableNativeFeedback>
    );
  };

  getSelectedColor = isSelected => {
    if (isSelected) {
      return "#89D7BA";
    } else {
      return "#DDDDDD";
    }
  };

  onFilterApply = () => {
    this.props.onFilterApply(this.state.Favourite, this.state.Hearted);
  };

  onItemSelected = name => {
    this.setState(previousState => {
      return { [name]: !previousState[name] };
    });
  };
}
Menu.propTypes = {};
