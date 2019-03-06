/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList,RefreshControl,ActivityIndicator} from 'react-native';

const CITY_NAMES = ['北京', '上海', '广州', '深圳', '杭州', '苏州', '成都', '武汉', '郑州', '洛阳', '厦门', '青岛', '拉萨'];
export default class Find extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataArray: CITY_NAMES,
            response: ""
        }
    }

    render(): React.ReactNode {
        return (
            <View style={styles.containerStyle}>
                <Text>{this.state.responce}</Text>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(data) => this._renderItem(data)}
                    refreshing={this.state.isLoading}
                    onRefresh={()=>{
                        console.log("---1------>"+this.state.isLoading);
                        this.loadData(true);
                    }}
                    refreshControl={
                        <RefreshControl
                            title={'loading'}
                            color={['red']}
                            tintColor={'orange'}
                            titleColor={'red'}
                        />
                    }
                    ListFooterComponent={()=>this.genIndicator()}
                    onEndReached={()=>{
                        this.loadData()
                    }}
                />


            </View>
        );
    }
    genIndicator(){
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }
    _renderItem(data) {
        return (<View style={styles.item}>
            <Text style={styles.text}>
                {data.item}
            </Text>
        </View>)
    }

    loadData(refreshing) {
        console.log("----2----->"+refreshing);
        if (refreshing) {
            this.setState({isLoading: true})
        }
        // okhttp.createClitent().sendPost(new CallBack(){
        //    public void  onScucess(Responce responce){
        //     }
        // })
        fetch( `http://192.168.1.109:8090/weixinapp/studentinfo/reactlist`)
            .then((responce)=>responce.json()).then(responceJson=>{
            this.setState({
                responce:responceJson[0].mainTitle
            })
        }).done()
        //    网络请求
        setTimeout(()=>{
            let dataArray = [];
            if (refreshing) {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i]);
                }
            }else {
                dataArray = this.state.dataArray.concat(CITY_NAMES);
            }
            this.setState({
                dataArray:dataArray,
            })
            this.setState({
                isLoading:false
            })

        },2000)
    }

}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
    },
    item: {
        backgroundColor: '#169',
        height: 200,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containStyle: {
        flex: 1
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
