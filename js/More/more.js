/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MoreHeader from './MoreHeader';
import {MoreCommonItem} from "./MoreCommonItem";
import {MoreMiddleCommonItem} from "./MoreMiddleCommonItem";

export default class More extends Component<Props> {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <MoreHeader/>
                <View style={{marginTop: 20}}>
                    <MoreCommonItem
                        leftIconName={require('../../res/images/collect.png')}
                        leftTitle='我的订单'
                        rightTitle='查看全部订单'
                    />
                    <MoreMiddleCommonItem/>
                </View>

                <View style={{marginTop: 20}}>
                    <MoreCommonItem
                        leftIconName={require('../../res/images/draft.png')}
                        leftTitle='动脑学院钱包'
                        rightTitle='账户余额'/>
                </View>
                <View >
                    <MoreCommonItem
                        leftIconName={require('../../res/images/card.png')}
                        leftTitle='积分商城'
                    />
                </View>
                <View >
                    <MoreCommonItem
                        leftIconName={require('../../res/images/new_friend.png')}
                        leftTitle='今日推荐'
                        rightIconName={require('../../res/images/me_new.png')}
                    />
                </View>
                <View >
                    <MoreCommonItem
                        leftIconName={require('../../res/images/card.png')}
                        leftTitle='我要合作'
                        rightTitle='轻松开店，招财进宝'
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: "#e8e8e8"
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
