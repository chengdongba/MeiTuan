/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';

import {Platform, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MineCommonItem} from './MineCommonItem';

export default class Mine extends Component<Props> {

    _rendNavBar() {
        return (
            <View style={styles.rendNavStyle}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                    更多
                </Text>
                <Image source={require('../../res/images/icon_mine_setting.png')} style={styles.navImageStyle}/>
            </View>
        );
    }

    render() {
        return (
            <View>

                {this._rendNavBar()}

                <ScrollView>
                    <View style={{marginTop: 10}}>
                        <MineCommonItem title="扫一扫"/>
                    </View>

                    <View style={{marginTop: 10}}>
                        <MineCommonItem title="省流量提示" isSwitch={true}/>
                        <MineCommonItem title="消息提醒"/>
                        <MineCommonItem title="邀请好友使用码团"/>
                        <MineCommonItem title="清空缓存" rightTitle="1.99M"/>
                    </View>

                    <View style={{marginTop: 10}}>
                        <MineCommonItem title="问卷调查"/>
                        <MineCommonItem title="支付帮助"/>
                        <MineCommonItem title="网络诊断"/>
                        <MineCommonItem title="我要应聘"/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MineCommonItem title="精品应用"/>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    navImageStyle: {
        position: 'absolute',
        right: 10,
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    rendNavStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 50,
        justifyContent: 'center'
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
