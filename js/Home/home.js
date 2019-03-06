/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar,ScrollView} from 'react-native';
import HomeDetail from './HomeDetail';
import {HomeTopView} from './HomeTopView';
import HomeMiddleView from'./HomeMiddleView';

var Dimensions =require('Dimensions');
var {width, height} = Dimensions.get('window');
export default class Home extends Component<Props> {
    _pressButton(){
        const {navigator} = this.props;
        if (navigator) {
            //startActivity
            navigator.push({
                name:"详情页面",
                component:HomeDetail
            })
        }
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor='rgba(255,96,0,1.0)' barStyle='light-content'/>
                {this.renderNavBar()}
                <ScrollView>
                    <HomeTopView/>
                    <HomeMiddleView/>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
       return (
           <View style={styles.navBarStyle}>
            <Text>
                长沙
            </Text>
               <TextInput
                    placeholder="养生" style={styles.topInputStyle}>
               </TextInput>

               <View style={{flexDirection:'row'}}>
                   <Image source={require('../../res/images/icon_homepage_message.png')}  style={styles.navRightImg}/>
                   <Image source={require('../../res/images/icon_homepage_scan.png')} style={styles.navRightImg}/>
               </View>
           </View>
       )



    }
}

const styles = StyleSheet.create({
    navBarStyle:{
        backgroundColor:'rgba(255,96,0,1.0)',
        height:60,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        position:'relative',
        top:-10

    },
    navRightImg:{
        width:30,
        height:30
    },
    topInputStyle:{
        width:width*0.7,
        height:40,
        backgroundColor: 'white',
        borderRadius:16,
        paddingLeft:10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
