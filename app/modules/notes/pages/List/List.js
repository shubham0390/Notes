import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableNativeFeedback,
  FlatList,
  InteractionManager
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/MaterialIcons";
import Swipeout from "react-native-swipeout";
import SideMenu from "react-native-side-menu";
import NoteListItem from "../../components/NoteListItem";
import Menu from "../../components/Menu";
import styles from "./style";
import {
  fetchNotes,
  toggleFavorite,
  toggleStar,
  deleteNote
} from "../../duck/home";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      activeRow: null,
      isOpen: false,
      selectedItem: "About",
      favourite: false,
      hearted: false
    };
  }

  componentDidMount = () => {
    InteractionManager.runAfterInteractions(() => {
      this.props.fetchNotes(this.state.favourite, this.state.hearted);
    });
  };

  render() {
    const menu = (
      <Menu
        onCloseMenuClicked={() => this.toggle()}
        onFilterApply={(favourite, hearted) => {
          this.setState({
            favourite,
            hearted
          });
          this.onFilterApply();
        }}
      />
    );
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        menuPosition="right"
        autoClosing={true}
        openMenuOffset={150}
        bounceBackOnOverdraw={true}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          {this.renderToolbar()}
          {this.renderNotesList()}
        </View>
      </SideMenu>
    );
  }

  renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <Text style={styles.title}> Notely</Text>
        <View style={styles.toolbarActionButtonContainer}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#AAF", true)}
            onPress={() => this.toggle()}
          >
            <View style={styles.actionStyle}>
              <Icon name="filter-list" size={24} color="#000000" />
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#AAF", true)}
            onPress={() => {
              Actions.push("edit");
            }}
          >
            <View style={styles.actionStyle}>
              <Icon name="add" size={24} color="#000000" />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  };

  renderNotesList = () => {
    return (
      <FlatList
        data={this.props.notes}
        extraData={this.state.activeRow}
        renderItem={item => this.renserNoteRowItem(item)}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={50}
      />
    );
  };

  renserNoteRowItem = info => {
    const swipeSettings = {
      autoClose: true,
      backgroundColor: "#FFFFFF",
      close: info.item.noteId !== this.state.activeRow,
      onClose: (secId, rowId, direction) =>
        this.onSwipeClose(info.item, rowId, direction),
      onOpen: (secId, rowId, direction) =>
        this.onSwipeOpen(info.item, rowId, direction),
      right: [
        {
          onPress: () => this.onDeleteItem(info.item),
          text: "Delete",
          type: "delete"
        }
      ],
      rowId: info.index,
      sectionId: 1
    };
    return (
      <Swipeout {...swipeSettings}>
        <NoteListItem
          onFavoriteButtonClicked={this.onFavoriteButtonClicked}
          onStarButtonClicked={this.onStarButtonClicked}
          onListItemClicked={this.onListItemClicked}
          note={info.item}
        />
      </Swipeout>
    );
  };

  renderSeparator = () => {
    return <View style={styles.seprator} />;
  };

  renderFooter = () => {
    if (!this.props.loading) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onFilterApply = () => {
    this.setState({
      isOpen: false
    });
    this.props.fetchNotes(this.state.favourite, this.state.hearted);
  };

  onFavoriteButtonClicked = note => {
    this.props.toggleFavorite(note);
  };

  onStarButtonClicked = note => {
    this.props.toggleStar(note);
  };

  onDeleteItem = note => {
    this.props.deleteNote(note);
  };

  onListItemClicked = note => {
    Actions.push("detail", { note });
  };

  handleRefresh = () => {};

  onSwipeOpen(item, rowId, direction) {
    this.setState({ activeRow: item.noteId });
  }

  onSwipeClose(item, rowId, direction) {
    if (
      item.noteId === this.state.activeRow &&
      typeof direction !== "undefined"
    ) {
      this.setState({ activeRow: null });
    }
  }
}

mapDispatchToProps = dispatch => {
  return {
    fetchNotes: (favourite, hearted) =>
      dispatch(fetchNotes(favourite, hearted)),
    toggleFavorite: note => dispatch(toggleFavorite(note)),
    toggleStar: note => dispatch(toggleStar(note)),
    deleteNote: note => dispatch(deleteNote(note))
  };
};

function mapStateToProps(state) {
  return {
    notes: state.notes.data,
    loading: state.notes.load.loading,
    error: state.notes.load.error,
    page: state.notes.load.page
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
