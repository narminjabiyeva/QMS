import React from "react";
import {Text} from 'react-native';

const fontFamilies = {
    regular: "RobotoRegular",
    medium: "RobotoMedium",
    bold: "RobotoBold",

};
export const Txt = ({children,style,weight, ...rest}) => {
return (
<Text {...rest} style={[{fontFamily:fontFamilies[weight] || fontFamilies.regular},style]}>
    {children}
</Text>
)
}
