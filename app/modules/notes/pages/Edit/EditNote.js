import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Actions } from "react-native-router-flux";
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback
} from "react-native";

import styles from "./style";
import { saveNote, updateNote } from "../../duck/notes";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note ? props.note : { title: "", description: "" }
    };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.savingState === this.props.savingState) {
      return;
    }

    if (nextProps.savingState === "PENDING") {
      ToastAndroid.show("Saving note", ToastAndroid.SHORT);
      return
    }

    if (nextProps.savingState === "SUCCESSFUll") {
      ToastAndroid.show("Save compelete", ToastAndroid.SHORT);
      Actions.pop();
    }
  };
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
          multiline
          autoCapitalize="sentences"
          underlineColorAndroid="rgba(0,0,0,0)"
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
          underlineColorAndroid="rgba(0,0,0,0)"
          multiline
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
    if (this.props.note) {
      const note = {
        ...this.state.note,
        modifiedDate: Date.now()
      };
      this.props.updateNote(note);
      return;
    }
    const savingNote = {
      ...this.state.note,
      createdDate: Date.now(),
      modifiedDate: Date.now(),
      hearted: false,
      favorite: false
    };
    this.props.saveNote(savingNote);
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
    savingState: state.notes.save.state
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditNote);
