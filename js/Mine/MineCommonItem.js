import React,{Component} from "react";
import {StyleSheet, View,Text,Switch,Image} from 'react-native';
export class MineCommonItem extends Component<Props>{

    //组件的封装.一,确定参数
    static defaultProps = {
        title:"",//标题
        isSwitch:false,//是否显示switch按钮
        rightTitle:""//右边的文字
    }

    constructor(props){
        super(props);
        this.state={
            isOn : false//switch开关默认关
        }
    }

    render(): * {
        return (
            <View style={styles.navContain}>
                <Text style={{marginLeft:8}}>{this.props.title}</Text>
                {this.rightSubView()}
            </View>
        );
    }

    rightSubView() {
        if (this.props.isSwitch) {
            return <Switch value={this.state.isOn} onValueChange={(isOn)=>{this.setState({isOn:isOn})}}/>
        }
        return (
            <View style={{flexDirection : 'row',alignItems: 'center'}}>
                {this.rightTitle()}
                <Image source={require('../../res/images/icon_cell_rightarrow.png')} style={{width:8,height:13,marginRight:8}}/>
            </View>
        );
    }

    rightTitle(){
       if (this.props.rightTitle.length > 0) {
           return (
               <Text style={{color:'gray',marginRight: 5 }}>
                   {this.props.rightTitle}
               </Text>
           );
       }
    }
}

const styles = StyleSheet.create(
    {
        navContain:{
            flexDirection:'row',
            alignItems:'center',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            height:40,
            borderBottomColor: '#dddddd',
            borderBottomWidth: 0.5
        }
    }
);