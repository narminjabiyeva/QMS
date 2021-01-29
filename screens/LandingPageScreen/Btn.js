import React from 'react';
import { StyleSheet, View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';

import {Txt} from "../../components/Txt";

export const Btn = ({title,onPress,style,...rest}) => {
    const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return(
        <View style={[style,styles.container]}>
            <Touchable onPress={onPress} {...rest} >
                <View style={styles.btn}>
                    <Txt weight="bold" style={styles.title}>
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
        borderColor: "#21ADE3",
        borderWidth: 1
    },
    btn:{
        width:"100%",
        padding:10,
        alignItems: "center",
        
    },        
    title:{
        color:"#5E5F61",
        textAlign: "center",
        fontSize:20,
    },

});