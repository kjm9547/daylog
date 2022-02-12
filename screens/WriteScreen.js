import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Pressable, StyleSheet, View } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialIcons";
function WriteScreen(){
    const navigation= useNavigation();
    const goback = () =>{
        navigation.pop();
    }
    return(
        <View style={styles.block}/>
    )
}

const styles = StyleSheet.create({
    block:{}
})

export default WriteScreen;