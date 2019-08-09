import React from "react";
import { View, StatusBar } from "react-native";
import { Constants } from "expo";

export default function UdaciStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: StatusBar.currentHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
};