import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getDisplaybleDate } from "../../../../utils/dateUtils";
import styles from "./style";

export default class NoteListItem extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#AAF", true)}
        onPress={this.onListItemClicked}
      >
        <View style={styles.container}>
          <View style={styles.detailContainer}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {this.props.note.title}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.description}
            >
              {this.props.note.description}
            </Text>
            <Text style={styles.date}>
              {getDisplaybleDate(this.props.note.createdDate)}
            </Text>
          </View>
          <View style={styles.statusContiner}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple("#AAF", true)}
              onPress={this.onStarButtonClicked}
            >
              <View style={styles.startActionStyle}>
                <Icon
                  name="star"
                  size={24}
                  color={this.getStarIconColor(this.props.note.starred)}
                />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple("#AAF", true)}
              onPress={this.onFavoriteButtonClicked}
            >
              <View style={styles.favoriteActionStyle}>
                <Icon
                  name="favorite"
                  size={24}
                  color={this.getFavoriteIconColor(this.props.note.favorite)}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  getFavoriteIconColor = favorite => {
    if (favorite) {
      return "#DB394F";
    } else {
      return "#F1F1F1";
    }
  };

  getStarIconColor = star => {
    if (star) {
      return "#EDCF39";
    } else {
      return "#F1F1F1";
    }
  };

  onFavoriteButtonClicked = () => {
    this.props.onFavoriteButtonClicked(this.props.note);
  };

  onStarButtonClicked = () => {
    this.props.onStarButtonClicked(this.props.note);
  };

  onListItemClicked = () => {
    this.props.onListItemClicked(this.props.note);
  };
}
