/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar} from 'react-native';
var Demensions = require('Dimensions');

import Main from '../Main/main';
//初始化宽高
var {width, height} = Demensions.get('window');
// import HomeDetail from './HomeDetail';
export default class Luancher extends Component<Props> {
    //onResume  1次
    componentDidMount(): void {
        setTimeout(()=>{
            this.props.navigator.replace({
                component:Main
            })
        },1000)
    }

    render() {

        return (
            <View>
                <StatusBar
                    backgroundColor='rgba(0,0,0,0.0)'
                    hidden={true}
                />
                <Image source={require('../../res/images/luancher.png')}  style={styles.luanchImageStyle}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    luanchImageStyle:{
        width:width,
        height:height,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应（拉伸整个屏幕）
        resizeMode:'cover',
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    }
});
