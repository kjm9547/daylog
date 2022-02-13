import React from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

function TransparentCircleButton({name,color,hasMarginRight,onPress}){
    return(
        <View style={[styles.iconButtonwrapper, hasMarginRight && styles.marginright]}>
            <Pressable 
             style={({pressed})=>{
                styles.iconButton,
                Platform.OS === 'android' &&
                    pressed && {
                        backgroundColor: '#efefef'
                    }
            }}
            onPress={onPress}
            android_ripple={{color:'#ededed'}}>
                <Icon name={name} size={24} color={color}></Icon>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    iconButtonwrapper:{
        width:32,
        height:32,
        borderRadius:16,
        overflow:'hidden'
    },
    iconButton:{
        alignContent:'center',
        justifyContent: 'center',
        width:32,
        height:32,
        borderRadius:16
    },
    marginright:{
        marginRight
        :8
    }
})

export default TransparentCircleButton