import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { Challenge } from './model/Challenge'
import ApiService from "./rest/ApiService";

export default class ChallengeList extends Component {

  constructor(props) {
    super(props);
    this.isLoggedIn = undefined;
    this.apiService = new ApiService();

    this.state = {
      loading: true,
      challenges: []
    };
  }

  componentDidMount(){
    this.setState({
      loading: false,
      challenges: this.getChallengeData(),
    })
  }  

  render() {
    const listComponent = <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => 
        <this.ItemComponent itemData={item} />
      }
      keyExtractor={item => item.title}
    />;

    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    if (this.isLoggedIn) {
      return(
        <View style={styles.container}>
          <FlatList
            data={this.state.challenges}
            renderItem={({item}) => 
              <this.ItemComponent itemData={item} />
            }
            keyExtractor={item => item.title}
          />
          {listComponent}
        </View>
      );
    }
    return(
      <View style={styles.container}>
        {listComponent}
        <View style={styles.containerButton}>
          <Button 
            style={styles.button}
            color="#5661B3"
            title="New Challenge"
            onPress={this.onNewChallenge}/>
        </View>
      </View>
    );
  }

  ItemComponent({ itemData }) {
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemData}>{itemData.title}</Text>
        <Text style={styles.itemData}>{itemData.description}</Text>
        <Text style={styles.itemData}>{itemData.dateToString()}</Text>
      </View>
    );
  }

  onNewChallenge() {
    // TODO
    console.log("I'm a New Challenge View!")
  }

  getChallengeData() {
    this.apiService.getChallenges()
    .then((res) => res.json())
    .then((data) => {
      let challenges;

      if (data.length > 0) {
        challenges = data;
      } else {
        challenges = this.generateMockData()
      }

      this.setState({
        loading: false,
        challenges: challenges
      });
      console.log(this.state.challenges);
      console.log('Refreshed data')
    })
    .catch((err) => {
      console.error(err);
    });
  }

  generateMockData() {
    return [
      new Challenge(
        'Challenge-1',
        'First challenge lol',
        new Date(2020, 3, 24) 
      ),
      new Challenge(
        'Challenge-2',
        'Another',
        new Date(2020, 10, 4) 
      ),
      new Challenge(
        'Challenge-3',
        'Last one',
        new Date(2020, 9, 2) 
      )
    ]
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  containerButton: {
    alignItems: 'center',
    padding: 10,
    height: 64,
    backgroundColor: "black"
  },
  button: {
    height: 100
  },
  listItem: {
    backgroundColor: "red"
  },
  itemData: {
    padding: 10,
    fontSize: 18
  },
})
