import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from  'react-native';
import LotsOfGreetings from "./1.1_Props";


export default class LotsOfStyles extends Component{
    render(){
        return(
            <View>
                <Text style = {styles.red}>Just red</Text>
                <Text style = {styles.bigBlue}> Just BigBlue</Text>
                <Text style = {[styles.bigBlue,styles.red]}>bigblue, then red</Text>
                <Text style = {[styles.red, styles.bigBlue]}>red , then bigblue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigBlue:{
        color:'blue',
        fontWeight:'bold',
        fontSize: 30,
    },
    red:{
        color:'red',
    },
});

AppRegistry.registerComponent('LotsOfStyles',()=> LotsOfStyles)