import React from "react";
import { View, TouchableOpacity } from "react-native";
import { TextKey } from "./style";

export default function Keyboard(props){
    const handleLetter = (letter) => {
        props.handleLetter(letter);
    }

    return(
    <View style={{width: "100%"}}>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center"}}>
            <TouchableOpacity onPress={() => handleLetter("Q")}><TextKey>Q</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("W")}><TextKey>W</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("E")}><TextKey>E</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("R")}><TextKey>R</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("T")}><TextKey>T</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("Y")}><TextKey>Y</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("U")}><TextKey>U</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("I")}><TextKey>I</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("O")}><TextKey>O</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("P")}><TextKey>P</TextKey></TouchableOpacity>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => handleLetter("A")}><TextKey>A</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("S")}><TextKey>S</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("D")}><TextKey>D</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("F")}><TextKey>F</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("G")}><TextKey>G</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("H")}><TextKey>H</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("J")}><TextKey>J</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("K")}><TextKey>K</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("L")}><TextKey>L</TextKey></TouchableOpacity>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => handleLetter("Z")}><TextKey>Z</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("X")}><TextKey>X</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("C")}><TextKey>C</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("V")}><TextKey>V</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("B")}><TextKey>B</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("N")}><TextKey>N</TextKey></TouchableOpacity>
            <TouchableOpacity onPress={() => handleLetter("M")}><TextKey>M</TextKey></TouchableOpacity>
        </View>
    </View>
    )
}