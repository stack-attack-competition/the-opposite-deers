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

export default class ChallengeList extends Component {

  BASE_URL = 'https://stack-attack-bed.herokuapp.com';

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
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
      data={this.state.challenges}
      renderItem={({item}) => 
        <this.ItemComponent itemData={item} />
      }
      keyExtractor={item => item.title}
      ItemSeparatorComponent = {this.ItemSeparator}
    />;

    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    if (!this.props.isAuthenticated) {
      return(
        <View style={styles.container}>
          {listComponent}
        </View>
      );
    } else {
      return(
        <View style={styles.container}>
          {listComponent}
          <View style={styles.containerButton}>
            <Button
              style={styles.button}
              color="#5661B3"
              title="New Challenge"
              onPress={() => {
                this.props.navigation.navigate('NewChallenge');
              }}/>
          </View>
        </View>
      );
    }
  }

  ItemComponent({ itemData }) {
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemData}>{itemData.title}</Text>
        <Text style={styles.itemData}>{itemData.description}</Text>
        <Text style={styles.itemData}>{itemData.endDate}</Text>
      </View>
    );
  }

  ItemSeparator() {
    return (
      <View style={{
         height: .5,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
        }}
      />
    );
  }

  getChallengeData() {
    fetch(`${this.BASE_URL}/challenges`)
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
   paddingTop: 22,
   backgroundColor: "white"
  },
  containerButton: {
    alignItems: 'center',
    padding: 10,
    height: 64,
  },
  button: {
    height: 100
  },
  listItem: {
  },
  itemData: {
    padding: 10,
    fontSize: 18
  },
});
