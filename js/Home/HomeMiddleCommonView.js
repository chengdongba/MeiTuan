import React, {Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class HomeMiddleCommonView extends Component<Props> {

    static defaultProps = {
        title: "",
        subTitle: "",
        rightIcon: undefined,
        titleColor: ""
    };

    constructor(Props) {
        super(Props);
        this.state = {}
    }

    render(): React.ReactNode {
        return (
            <View style={styles.containerStyle}>
                <View>
                    <Text style={[{color:this.props.titleColor},styles.titleStyle]}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.subTitleStyle}>
                        {this.props.subTitle}
                    </Text>
                </View>
                <Image source={this.props.rightIcon} style={{width:64,height:43}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subTitleStyle:{
        color:'gray'
    },
    containerStyle:{
        width:width*0.5-1,
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'row',
        borderBottomColor:'gray',
        borderBottomWidth:0.2
    }
});