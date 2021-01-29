import * as Font from "expo-font"

import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf"
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf"
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf"

export const loadFonts = () => {
return Font.loadAsync({
        RobotoRegular,
         RobotoMedium,
         RobotoBold
        }
        )
};
