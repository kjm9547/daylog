import React from "react";
import { StyleSheet, View} from "react-native";
import FloatingWriteButton from "../component/FloatingWriteButton";
function FeedsScreen(){
   
    return(
        <View style={styles.blocks}>
            <FloatingWriteButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    blocks:{
        flex:1
    },
    
})

export default FeedsScreen;