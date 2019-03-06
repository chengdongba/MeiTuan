import React,{Component} from 'react';
import {View, StyleSheet, ScrollView,Text} from 'react-native';
import {HomeTopListView} from './HomeTopListView';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export class HomeTopView extends Component<Props>{

    constructor(Props){
        super(Props);
        const data = [[
            {"title": "美食", "image": require('../../res/images/ms.png')},
            {"title": "电影", "image": require('../../res/images/dy.png')},
            {"title": "酒店", "image": require('../../res/images/jd.png')},
            {"title": "休闲娱乐", "image": require('../../res/images/xxyl.png')},
            {"title": "外卖", "image": require('../../res/images/wm.png')},
            {"title": "自助餐", "image": require('../../res/images/zzc.png')},
            {"title": "KTV", "image": require('../../res/images/ktv.png')},
            {"title": "火车票机票", "image": require('../../res/images/hcpjp.png')},
            {"title": "丽人", "image": require('../../res/images/lr.png')},
            {"title": "周边游", "image": require('../../res/images/zby.png')}], [
            {"title": "足疗按摩", "image": require('../../res/images/zlam.png')},
            {"title": "购物", "image": require('../../res/images/gw.png')},
            {"title": "今日新单", "image": require('../../res/images/jrxd.png')},
            {"title": "小吃快餐", "image": require('../../res/images/xckc.png')},
            {"title": "生活服务", "image": require('../../res/images/shfw.png')},
            {"title": "甜点饮品", "image": require('../../res/images/tdyp.png')},
            {"title": "美甲", "image": require('../../res/images/mj.png')},
            {"title": "景点门票", "image": require('../../res/images/jdmp.png')},
            {"title": "旅游", "image": require('../../res/images/ly.png')},
            {"title": "全部分类", "image": require('../../res/images/qbfl.png')}]
        ];
        this.state={
            data,
            currentPage : 0
        }
    }

    render(): React.ReactNode {
        return (
            <View style={styles.containerStyle}>
                {/*ViewPager ScrollView*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={
                        (e)=>{
                            this.setState({currentPage:(e.nativeEvent.contentOffset.x/width-1)})
                        }
                    }>
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={styles.indicatorStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    renderScrollItem() {
        var itemArr = [];
        for (let i = 0; i < this.state.data.length; i++) {
            itemArr.push(<HomeTopListView key={i} dataArr={this.state.data[i]}/>)
        }
        return itemArr;
    }

    renderIndicator() {
        var indicatorArr = [];
        for (let i = 0; i < 2; i++) {
            var style = (i===this.state.currentPage)?{color:'red'}:{color:'gray'};
            indicatorArr.push(<Text key={i} style={[{fontSize:25},style]}> &bull; </Text>)
        }
        return indicatorArr;
    }
}

const styles = StyleSheet.create({
    indicatorStyle:{
        flexDirection:'row',
        justifyContent: 'center'
    },
    containerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    }
});