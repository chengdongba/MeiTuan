import React,{Component}from 'react';
import {View,Image,Text,StyleSheet}from'react-native';

export class MoreMiddleCommonItem extends Component<Props>{
    constructor(Props){
        super(Props);
        this.state={

        }
    }

    render(): * {
        return (
            <View style={styles.containStyle}>
                {this.renderAllItem()}
            </View>
        );
    }

    renderAllItem() {
        var imags = [require('../../res/images/order1.png'), require('../../res/images/order2.png'), require('../../res/images/order3.png'), require('../../res/images/order4.png')];
        var middleData=["待付款", "待使用", "待评价", "退款/售后"];
        var itemArr = [];
        for (var i = 0; i < imags.length; i++) {
            itemArr.push(<InnerView key={i} iconName={imags[i]} title={middleData[i]}/>)
        }
        return itemArr;
    }
}

class InnerView extends Component<Props>{
    static defaultProps={
        iconName:undefined,
        title:''
    }
    render(): React.ReactNode {
        return (
            <View style={{alignItems:'center'}}>
                <Image source={this.props.iconName} style={{width:30,height: 20}}/>
                <Text>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        height:60,
        paddingLeft:20,
        paddingRight:20
    }
});