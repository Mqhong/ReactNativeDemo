import React, { Component } from 'react';
import {
    Image,
    Text,
    StyleSheet,
    View} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (

        <View style={styles.container}>
            <Text style={styles.textStyle}>
                222222
            </Text>
            <Image source={pic} style={styles.picStyle}/>
        </View>
    );
  }
}

// const App = StackNavigator({
//     Main: {screen: MainScreen},
//     Profile: {screen: ProfileScreen},
// });

// class MainScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Welcome',
//     };
//     render() {
//         const { navigate } = this.props.navigation;
//         return (
//             <Button
//                 title="Go to Jane's profile"
//                 onPress={() =>
//                     navigate('Profile', { name: 'Jane' });
//                 }
//             />
//         );
//     }
// }

// class ProfileScreen extends React.Component {
//     static navigationOptions = {
//         title: 'ProfileScreen',
//     };
//     render() {
//         const { navigate } = this.props.navigation;
//         return (
//             <Button
//                 title="Go to Jane's ProfileScreen"
//                 onPress={() =>
//                     navigate('Profile', { name: 'Jane' });
//                 }
//             />
//         );
//     }
// }


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    textStyle:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    picStyle:{
        width:193,
        height:110,
    }

})