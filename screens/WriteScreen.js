import { useNavigation } from "@react-navigation/native";
import React ,{useContext, useState}from "react";
import {Pressable, StyleSheet, View } from "react-native";
import WriteHeader from "../component/WriteHeader";
import WriteEditer from "../component/WriteEditor";
import LogContext from "../context/LogContext";

function WriteScreen({route}){
    const log = route.params?.log;

    const [title, setTitle] = useState(log?.title ?? '')
    const [body, setBody] = useState(log?.body ?? '')
    const navigation = useNavigation();

    const {onCreate,onModify} = useContext(LogContext);
    const onSave = () =>{
        if(log) {
            onModify({
                id: log.id,
                date: log.date,
                title,
                body,
            }
            ); navigation.pop();
        } else{

        
        onCreate({
            title,
            body,

            date:new Date().toString()
        })
        navigation.pop();
    }
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