import { useNavigation } from "@react-navigation/native";
import React from "react";
import {StyleSheet,View} from 'react-native'
import TransparentCircleButton from "./TransparentCircleButton";

function WriteHeader({onSave,onAskRemove,isEditing}){
    const navigation=useNavigation()
    const goback=() => navigation.pop()
    return(
        <View style={styles.block}>
            <View style={styles.iconButtonwrapper}>
                <TransparentCircleButton
                onPress={goback}
                name="arrow-back"
                color="#424242"></TransparentCircleButton>
            </View>
            
            <View style={styles.buttons}>
                {isEditing &&(
                <TransparentCircleButton
                name="delete-forever"
                color="#ef5350"
                hasMarginRight
                onPress={onAskRemove}
                >
                </TransparentCircleButton>
                )}
                <TransparentCircleButton name="check" color="#009688"
                onPress={onSave}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    block:{
        height:48,
        paddingHorizontal: 8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    iconButtonwrapper:{
        width:32,
        height:32,
        borderRadius:16,
        overflow:'hidden'
    },
    buttons:{
        flexDirection:'row',
        alignContent:'center'
    }
})

export default WriteHeader;