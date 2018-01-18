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

import styles from "./style";
import { Actions } from "react-native-router-flux";
import { saveNote, updateNote } from "../../duck/home";

class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note ? props.note : { note: { titile: "", description: "" } }
    };
  }
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
            onPress={this.onUndoClicked}
          >
            <View style={styles.actionStyle}>
              <Text style={styles.actionText}>Undo</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#AAF", true)}
            onPress={this.onSaveClicked}
          >
            <View style={styles.actionStyle}>
              <Text style={styles.actionText}>Save</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  };

  renderNote = () => {
    return (
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.title}
          value={this.state.note.title}
          multiline={true}
          autoCapitalize="sentences"
          underlineColorAndroid={"rgba(0,0,0,0)"}
          returnKeyType="next"
          spellCheck
          placeholder="Enter title here!"
          onChangeText={text =>
            this.setState(state => ({
              note: {
                ...state.note,
                title: text
              }
            }))
          }
        />

        <TextInput
          style={styles.description}
          placeholder="Enter description here!"
          value={this.state.note.description}
          underlineColorAndroid={"rgba(0,0,0,0)"}
          multiline={true}
          autoGrow
          returnKeyType="done"
          spellCheck
          autoCapitalize="sentences"
          onChangeText={text =>
            this.setState(state => ({
              note: {
                ...state.note,
                description: text
              }
            }))
          }
        />
      </View>
    );
  };

  onSaveClicked = () => {
    const date = new Date();
    if (this.props.note) {
      let note = {
        ...this.state.note,
        modifiedDate: date.getUTCMilliseconds,
        hearted: false,
        favorite: false
      };
      this.props.updateNote(note);
    } else {
      let note = {
        ...this.state.note,
        createdDate: date.getUTCMilliseconds,
        modifiedDate: date.getUTCMilliseconds,
        hearted: false,
        favorite: false
      };
      this.props.saveNote(note);
    }
  };
  onUndoClicked = () => {};
}

mapDispatchToProps = dispatch => {
  return {
    saveNote: note => dispatch(saveNote(note)),
    updateNote: note => dispatch(updateNote(note))
  };
};

function mapStateToProps(state) {
  return {
    note: state.notes.load.loading
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
