import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import { Challenge } from './model/Challenge'

export default class ChallengeList extends Component {

  constructor(props) {
    super(props);
    this.isLoggedIn = undefined;
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  componentDidMount(){
    //this.getChallengeData();
    this.setState({
      loading: false,
      //dataSource: data.length != 0 ? data : this.generateMockData()
      dataSource: this.generateMockData()
    })
  }  

  render() {
    //if (this.isLoggedIn) {
      if(this.state.loading){
        return( 
          <View style={styles.loader}> 
            <ActivityIndicator size="large" color="#0c9"/>
          </View>
        )
      }
      return(
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => 
              <this.ItemComponent itemData={item} />
            }
            keyExtractor={item => item.title}
          />
        </View>
      );
    //}
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

  getChallengeData() {
    fetch('https://stack-attack-bed.herokuapp.com/challenges')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        loading: false,
        //dataSource: data.length != 0 ? data : this.generateMockData()
        dataSource: this.generateMockData()
      })
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
    ]
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  listItem: {
    backgroundColor: "red"
  },
  itemData: {
    padding: 10,
    fontSize: 18
  },
})
