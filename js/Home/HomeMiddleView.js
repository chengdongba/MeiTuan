import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import HomeMiddleCommonView from './HomeMiddleCommonView'

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class HomeMiddleView extends Component<Props> {

    constructor(Props) {
        super(Props);
        this.state = {
            rightData: [{
                "title": "天天特价", "subTitle": "特惠不打烊",
                img1: require('../../res/images/tttj.png'),
                rightImage: require('../../res/images/tttj.png'),
                "titleColor": "orange"
            },
                {
                    "title": "一元吃", "subTitle": "一元吃美食",
                    img1: require('../../res/images/tttj.png')
                    , rightImage: require('../../res/images/yyms.png'),
                    "titleColor": "red"
                }]

        }
    }

    render(): React.ReactNode {
        return (
            <View style={styles.containerStyle}>
                {this.renderLeftView()}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    }

    renderLeftView() {
        var data = {img1: require('../../res/images/mdqg.png'), img2: require('../../res/images/yyms.png')}
        return (
            <View style={styles.leftViewStyle}>
                <Image source={data.img1} style={styles.leftIconStyle}/>
                <Image source={data.img2} style={{width: 44, height: 30}}/>
                <Text style={{color: 'gray'}}>
                    探路者烤鱼
                </Text>
                <Text style={{color: 'blue', fontSize: 10}}> 9.5 </Text>
            </View>
        );
    }


    renderRightView() {
        var itemArr = [];
        for (let i = 0; i < this.state.rightData.length; i++) {
            var data = this.state.rightData[i];
            itemArr.push(<HomeMiddleCommonView
                key={i}
                title={data.title}
                subTitle={data.subTitle}
                rightIcon={data.rightImage}
                titleColor={data.titleColor}/>)
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    leftIconStyle: {
        width: 129,
        height: 42,
        marginTop: 10
    },
    leftViewStyle: {
        width: width * 0.5,
        height: 119,
        backgroundColor: 'white',
        alignItems: 'center',
        marginRight: 1
    },
    containerStyle: {
        marginTop: 10,
        flexDirection: 'row'
    }
});