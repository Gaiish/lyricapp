import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Content,
  Right,
  Left,
  Body,
  Icon,
  Input,
  Item,
  Text,
  Spinner

} from 'native-base';
import axios from 'axios';
import {Alert,View} from 'react-native';

export default class App extends Component{
  state =
  {
    track: '' ,
    loading :false
  };

  search(){
    //Alert.alert('hey')
    this.setState({loading:true})
    var startApi= 'https://api.musixmatch.com/ws/1.1/track.search?format=json&q_track='
    var endApi='&quorum_factor=1&apikey=0298623f90e69244737105d190f71df6'

    axios.get(startApi+this.state.track+ endApi).then((res)=>{
      console.log(res.data.message.body.track_list.length);
      /*res.data.callback((dt)=>{
        console.log(dt)
      })*/
      //Alert.alert(JSON.stringify(res))
    }).catch((err)=>{
      console.log(err);
      //Alert.alert(err)
    })

  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Lyrics Mania</Title>
          </Body>
          <Right >
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <Content searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search"
            onChangeText={(track) => this.setState({track})}
            onSubmitEditing={()=> this.search()}
            />

          </Item>
          {this.state.loading?(
            <Spinner color='green' />
          ):(<View/>)}
        </Content>
      </Container>
    );
  }
}
