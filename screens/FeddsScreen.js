import React, {useContext} from "react";
import { StyleSheet, View, TextInput } from "react-native";
import LogContext from "../context/LogContext";
function FeedsScreen(){
    const {text,setText} = useContext(LogContext)
    return(
        <View style={styles.blocks}>
            <TextInput 
                value={text}
                onChangeText={setText}
                placeholder="텍스트를 입력하세요"
                style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    blocks:{},
    input:{
        padding:16,
        backgroundColor:'white'
    }
})

export default FeedsScreen;