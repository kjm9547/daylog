import { useNavigation } from "@react-navigation/native";
import React ,{useContext, useState}from "react";
import {Pressable, StyleSheet, View } from "react-native";
import WriteHeader from "../component/WriteHeader";
import WriteEditer from "../component/WriteEditor";
import LogContext from "../context/LogContext";

function WriteScreen(){
    const[title, setTitle] = useState('')
    const [body,setBody] = useState('')
    const navigation = useNavigation();

    const {onCreate} = useContext(LogContext);
    const onSave = () =>{
        onCreate({
            title,
            body,

            date:new Date().toString()
        })
        navigation.pop();
    }
    return(
        <View style={styles.block}>
            <WriteHeader onSave ={onSave}></WriteHeader>
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