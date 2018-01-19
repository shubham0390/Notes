import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getDisplaybleDate } from '../../../../utils/dateUtils';
import styles from './style';

export default class NoteListItem extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#AAF', true)}
        onPress={this.onListItemClicked}
      >
        <View style={styles.container}>
          <View style={styles.detailContainer}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {this.props.note.title}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.description}>
              {this.props.note.description}
            </Text>
            <Text style={styles.date}>{getDisplaybleDate(this.props.note.modifiedDate)}</Text>
          </View>
          <View style={styles.statusContiner}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('#AAF', true)}
              onPress={this.onFavoriteButtonClicked}
            >
              <View style={styles.startActionStyle}>
                <Icon
                  name="star"
                  size={24}
                  color={this.getFavoriteIconColor(this.props.note.favorite)}
                />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('#AAF', true)}
              onPress={this.onHeartButtonClicked}
            >
              <View style={styles.favoriteActionStyle}>
                <Icon
                  name="favorite"
                  size={24}
                  color={this.getHeartIconColor(this.props.note.hearted)}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  getHeartIconColor = hearted => {
    if (hearted) {
      return '#DB394F';
    }
    return '#F1F1F1';
  };

  getFavoriteIconColor = favorite => {
    if (favorite) {
      return '#EDCF39';
    }
    return '#F1F1F1';
  };

  onHeartButtonClicked = () => {
    this.props.onHeartButtonClicked(this.props.note);
  };

  onFavoriteButtonClicked = () => {
    this.props.onFavoriteButtonClicked(this.props.note);
  };

  onListItemClicked = () => {
    this.props.onListItemClicked(this.props.note);
  };
}
