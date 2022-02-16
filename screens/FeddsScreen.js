import React, { useContext } from "react";
import { StyleSheet, View} from "react-native";
import FloatingWriteButton from "../component/FloatingWriteButton";
import LogContext from "../context/LogContext";
import FeedList from "../component/FeedList";
function FeedsScreen(){
    const {logs} = useContext(LogContext)
    return(
        <View style={styles.blocks}>
            <FeedList logs={logs}/>
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