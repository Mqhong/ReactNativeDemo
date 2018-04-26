import React, { Component } from 'react';
import{ ScrollView, Image, Text, View } from 'react-native'
export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component{
    render() {
        return(
            <ScrollView>
                <Text style={{fontSize:48}}>Scroll me plz</Text>
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Text style={{fontSize:48}}>If you like</Text>
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Text style={{fontSize:48}}>Scrolling down</Text>
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Text style={{fontSize:48}}>Framework around?</Text>
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Image source={require('../image/Menu_User_icon.png')} />
                <Text style={{fontSize:48}}>React Native</Text>
            </ScrollView>
        );
    }
}