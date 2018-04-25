import React, { Component } from 'react';
import { View } from 'react-native';


export default class FlexDirectionBasics extends Component {
    render() {
        return (

            //在组件的style中指定flexDirection可以决定布局的主轴。
            //子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢
            // 默认值是竖直轴(column)方向。

            // 尝试把`flexDirection`改为`column`看看
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};