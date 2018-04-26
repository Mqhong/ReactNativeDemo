import React, {
    Component
} from 'react';

import {
    FlatList,
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';

let listData = [];
var index = 0;
export default class FlatListBasics extends Component {

    constructor(props){
        super(props);
        this.state = {mmdata:[{key:'1'}]};
    }

    fetchData = (enableCallback)=>{
        console.log('mqhong');
      fetch('http://bbs.reactnative.cn/api/category/3')
          .then((response) => response.json())
          .then((responseJson) => {
              let topics = responseJson['topics'];
              for (var i = 0;i<topics.length;i++){
                  // console.log(topics[i].title);
                  listData.push({key : topics[i].title});
              }


              this.setState((state) => {
                  console.log(this.state);
                  this.state.mmdata[0].key = '孟';

                  return {mmdata:listData};
              });

              // console.log(listData);
              console.log(this.state);
          })
          .catch((error) => {
              console.warn(error);
          });
    };

    render() {
        return (
            <View style={styles.container}>
                <Button onPress = {this.fetchData}  title="ddd" />
                <FlatList
                    data={this.state.mmdata}
                    renderItem={({item}) =>
                        <View style = {styles.itemViewStyle}>
                            <Text style={styles.item}>{item.key}</Text>
                        </View>
                    }
                    extraData = {this.state.mmdata}
                />
            </View>
        );
    }

    // MMRender() {
    //     return (
    //         <View style={styles.container}>
    //             <Button onPress = {this.fetchData}  title="ddd" />
    //             <FlatList
    //                 data={this.state.dataSource}
    //                 renderItem={({item}) => { return
    //                     <View style={{alignItems: 'center'}}>
    //                     <Text>
    //                         {item}
    //                         </Text>
    //                 </View> }}
    //                 ListEmptyComponent={this.emptyComponent}
    //                 ItemSeparatorComponent={this.separatorComponent}
    //                 ListFooterComponent={() => this.headerorfooterComponent(2)}
    //                 ListHeaderComponent={() => this.headerorfooterComponent(1)}
    //                 extraData={this.state}
    //                 onRefresh={() => this.refreshFlat()}
    //                 refreshing={this.state.isRefreshing} />
    //         </View>
    //     );
    // }

}

const styles = StyleSheet.create({
    itemViewStyle:{
        backgroundColor:'red',
    },
    container: {
        flex: 1,
        paddingTop: 22,
        // backgroundColor:'gray',
    },
    item: {
        // padding: 10,
        borderLeftWidth:60,
        borderRightWidth:60,
        // left:30,
        // right:30,
        // width:30,
        fontSize: 30,
        backgroundColor:'gray'
        // height: 44,
    },
})