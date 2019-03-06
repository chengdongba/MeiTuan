import React, {Component} from "react";
import {StyleSheet, View, Text, Image} from 'react-native';

export class MoreCommonItem extends Component<Props> {

    static defaultProps = {
        leftIconName: undefined,
        leftTitle: '',
        rightIconName: undefined,
        rightTitle: ""
    };

    render(): * {
        return (
            <View style={styles.containerStyle}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={this.props.leftIconName} style={styles.leftIconStyle}/>
                    <Text style={{marginLeft: 10}}>
                        {this.props.leftTitle}
                    </Text>
                </View>
                {/*右边*/}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightSubView()}
                    <Image source={require('../../res/images/icon_cell_rightarrow.png')} style={{
                        width:8,height:13,marginLeft:8,marginRight:10
                    }}/>
                </View>
            </View>
        );
    }

    rightSubView() {
        if (this.props.rightIconName == undefined) {
            return (
                <Text style={{alignItems: 'center'}}>
                    {this.props.rightTitle}
                </Text>
            );
        } else {
            return (
                <Image source={this.props.rightIconName} style={{width: 24, height: 13}}/>
            );
        }
    }

}

const styles = StyleSheet.create(
    {
        leftIconStyle: {
            width: 30,
            height: 30,
            marginLeft: 6,
            borderRadius: 12
        },
        containerStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems: 'center',
            height: 40,
            borderColor: '#e8e8e8',
            borderWidth: 0.5
        },
        leftViewStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 8
        }
    }
);