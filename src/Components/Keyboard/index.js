import React from "react";
import { View } from "react-native";
import { TextKey } from "./style";

export default function Keyboard(){
    return(
    <View style={{width: "100%"}}>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center"}}>
            <TextKey>Q</TextKey>
            <TextKey>W</TextKey>
            <TextKey>E</TextKey>
            <TextKey>R</TextKey>
            <TextKey>T</TextKey>
            <TextKey>Y</TextKey>
            <TextKey>U</TextKey>
            <TextKey>I</TextKey>
            <TextKey>O</TextKey>
            <TextKey>P</TextKey>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TextKey>A</TextKey>
            <TextKey>S</TextKey>
            <TextKey>D</TextKey>
            <TextKey>F</TextKey>
            <TextKey>G</TextKey>
            <TextKey>H</TextKey>
            <TextKey>J</TextKey>
            <TextKey>K</TextKey>
            <TextKey>L</TextKey>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TextKey>Z</TextKey>
            <TextKey>X</TextKey>
            <TextKey>C</TextKey>
            <TextKey>V</TextKey>
            <TextKey>B</TextKey>
            <TextKey>N</TextKey>
            <TextKey>M</TextKey>
        </View>
    </View>
    )
}