import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Platform,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/home';
import Find from '../Find/find';
import Mine from '../Mine/mine';
import More from '../More/more';
import {Navigator} from "react-native-deprecated-custom-components"
export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'  //默认选中主页
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="首页"
                    renderIcon={() => <Image source={require('../../res/images/icon_tabbar_homepage.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/icon_tabbar_homepage_selected.png')} style={styles.iconStyle} />}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.setState({ selectedTab: 'home' }) }
                >
                    <Navigator
                        initialRoute={{
                            name:"首页",
                            component:Home
                        }
                        }
                        renderScene={
                            (router,navigator)=>{
                                   let Component= router.component;
                                   return <Component {...router.params} navigator={navigator}/>
                            }

                        }/>

                </TabNavigator.Item>
                <TabNavigator.Item

                    title="发现"
                    renderIcon={() => <Image source={require('../../res/images/icon_tabbar_merchant_normal.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/icon_tabbar_merchant_selected.png')} style={styles.iconStyle} />}
                    selected={this.state.selectedTab === 'shop'}
                    onPress={() => this.setState({ selectedTab: 'shop' }) }
                >

                    <Find />

                </TabNavigator.Item>
                <TabNavigator.Item

                    title="订单"
                    renderIcon={() => <Image source={require('../../res/images/icon_tabbar_mine.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/icon_tabbar_mine_selected.png')} style={styles.iconStyle} />}
                    selected={this.state.selectedTab === 'more'}
                    onPress={() => this.setState({ selectedTab: 'more' }) }
                >
                    <More />
                </TabNavigator.Item>
                <TabNavigator.Item

                    title="我的"
                    renderIcon={() => <Image source={require('../../res/images/icon_tabbar_mine.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/icon_tabbar_mine_selected.png')} style={styles.iconStyle} />}
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => this.setState({ selectedTab: 'mine' }) }
                >
                    <Mine />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    }

});