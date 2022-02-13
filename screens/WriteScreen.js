import { useNavigation } from "@react-navigation/native";
import React ,{useState}from "react";
import {Pressable, StyleSheet, View } from "react-native";
import WriteHeader from "../component/WriteHeader";
import WriteEditer from "../component/WriteEditor";

function WriteScreen(){
    const[title, setTitle] = useState('')
    const [body,setBody] = useState('')
    return(
        <View style={styles.block}>
            <WriteHeader></WriteHeader>
            <WriteEditer
                title={title}
                body={body}
                onChangeBody={setBody}
                onChangeTitle={setTitle}></WriteEditer>        
        </View>

    )
}

const styles = StyleSheet.create({
    block:{
        flex:1,
        backgroundColor:'white'
    },
   
})

export default WriteScreen;