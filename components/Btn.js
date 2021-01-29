import React from 'react';
import { StyleSheet, View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';

import {Txt} from "./Txt";

export const Btn = ({title,onPress,style,...rest}) => {
    const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return(
        <View style={[style,styles.container]}>
            <Touchable onPress={onPress} {...rest} >
                <View style={styles.btn}>
                    <Txt  style={styles.title}>
                        {title}
                    </Txt>
                </View>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: "90%",
        justifyContent:"center",
        overflow:"hidden",
        borderRadius:40,
    },
    btn:{
        width:"100%",
        padding: 10,
        alignItems: "center",
        backgroundColor: "#21ADE3"
    },        
    title:{
        textTransform: "lowercase",
        color:"white",
        textAlign: "center",
        fontSize:20,
    },

});