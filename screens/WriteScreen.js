import { useNavigation } from "@react-navigation/native";
import React ,{useContext, useState}from "react";
import {Alert, Pressable, StyleSheet, View } from "react-native";
import WriteHeader from "../component/WriteHeader";
import WriteEditer from "../component/WriteEditor";
import LogContext from "../context/LogContext";

function WriteScreen({route}){
    const log = route.params?.log;

    const [title, setTitle] = useState(log?.title ?? '')
    const [body, setBody] = useState(log?.body ?? '')
    const navigation = useNavigation();

    const {onCreate,onModify,onRemove} = useContext(LogContext);
    
    const onAskRemove = () =>{
        Alert.alert('삭제', 
                    '정말로삭제하시겠습니까?',
            [
                {text: '취소' ,style: 'cancel'},
                {
                    text:'삭제',
                    onPress: ()=>{
                        onRemove(log?.id)
                        navigation.pop()
                    },
                    style: 'destructive'
                },
            ],
            {
                cancelable:true
            },
            );
    };
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
            <WriteHeader onSave ={onSave} onAskRemove={onAskRemove} isEditing={!!log}></WriteHeader>
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