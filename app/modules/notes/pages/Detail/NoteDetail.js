import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableNativeFeedback
} from "react-native";
import { getDisplaybleDate } from "../../../../utils/dateUtils";
import styles from "./style";
import { Actions } from "react-native-router-flux";

class NoteDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        {this.renderNote()}
      </View>
    );
  }

  renderToolbar = () => {
    return (
      <View>
        <View style={styles.toolbar}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#AAF", true)}
            onPress={() => {
              Actions.pop();
            }}
          >
            <View style={styles.favoriteActionStyle}>
              <Icon name="arrow-back" size={24} color="#000000" />
            </View>
          </TouchableNativeFeedback>
          <View style={styles.toolbarActionButtonContainer}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple("#AAF", true)}
              onPress={() => {
                Actions.push("edit", { note: this.props.note });
              }}
            >
              <View style={styles.actionStyle}>
                <Text style={styles.actionText}>Edit</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.note.title}</Text>
          <Text style={styles.date}>
            {"Last updated: " + getDisplaybleDate(this.props.note.modifiedDate)}
          </Text>
        </View>
      </View>
    );
  };

  renderNote = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.description}>{this.props.note.description}</Text>
      </View>
    );
  };

  onSaveClicked = () => {};
  onUndoClicked = () => {};
}
export default NoteDetail;