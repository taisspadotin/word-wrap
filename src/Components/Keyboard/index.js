import React from "react";
import { View, TouchableOpacity } from "react-native";
import { TextKey, ButtonKey } from "./style";

export default function Keyboard(props){
    const [usedWords, setUsedWords] = React.useState(props.usedWords ? props.usedWords : { useless: [], used: [], right: [] });
    
    React.useEffect(() => {
        setUsedWords(props.usedWords);
    }, [props.usedWords])
    
    const handleLetter = (letter) => {
        props.handleLetter(letter);
    }
    
    return(
    <View style={{width: "100%"}}>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center"}}>
            <ButtonKey useless={usedWords.useless.indexOf("Q") !== -1} used={usedWords.used.indexOf("Q") !== -1} right={usedWords.right.indexOf("Q") !== -1} onPress={() => handleLetter("Q")}><TextKey>Q</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("W") !== -1} used={usedWords.used.indexOf("W") !== -1} right={usedWords.right.indexOf("W") !== -1} onPress={() => handleLetter("W")}><TextKey>W</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("E") !== -1} used={usedWords.used.indexOf("E") !== -1} right={usedWords.right.indexOf("E") !== -1} onPress={() => handleLetter("E")}><TextKey>E</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("R") !== -1} used={usedWords.used.indexOf("R") !== -1} right={usedWords.right.indexOf("R") !== -1} onPress={() => handleLetter("R")}><TextKey>R</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("T") !== -1} used={usedWords.used.indexOf("T") !== -1} right={usedWords.right.indexOf("T") !== -1} onPress={() => handleLetter("T")}><TextKey>T</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("Y") !== -1} used={usedWords.used.indexOf("Y") !== -1} right={usedWords.right.indexOf("Y") !== -1} onPress={() => handleLetter("Y")}><TextKey>Y</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("U") !== -1} used={usedWords.used.indexOf("U") !== -1} right={usedWords.right.indexOf("U") !== -1} onPress={() => handleLetter("U")}><TextKey>U</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("I") !== -1} used={usedWords.used.indexOf("I") !== -1} right={usedWords.right.indexOf("I") !== -1} onPress={() => handleLetter("I")}><TextKey>I</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("O") !== -1} used={usedWords.used.indexOf("O") !== -1} right={usedWords.right.indexOf("O") !== -1} onPress={() => handleLetter("O")}><TextKey>O</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("P") !== -1} used={usedWords.used.indexOf("P") !== -1} right={usedWords.right.indexOf("P") !== -1} onPress={() => handleLetter("P")}><TextKey>P</TextKey></ButtonKey>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <ButtonKey useless={usedWords.useless.indexOf("A") !== -1} used={usedWords.used.indexOf("A") !== -1} right={usedWords.right.indexOf("A") !== -1} onPress={() => handleLetter("A")}><TextKey>A</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("S") !== -1} used={usedWords.used.indexOf("S") !== -1} right={usedWords.right.indexOf("S") !== -1} onPress={() => handleLetter("S")}><TextKey>S</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("D") !== -1} used={usedWords.used.indexOf("D") !== -1} right={usedWords.right.indexOf("D") !== -1} onPress={() => handleLetter("D")}><TextKey>D</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("F") !== -1} used={usedWords.used.indexOf("F") !== -1} right={usedWords.right.indexOf("F") !== -1} onPress={() => handleLetter("F")}><TextKey>F</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("G") !== -1} used={usedWords.used.indexOf("G") !== -1} right={usedWords.right.indexOf("G") !== -1} onPress={() => handleLetter("G")}><TextKey>G</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("H") !== -1} used={usedWords.used.indexOf("H") !== -1} right={usedWords.right.indexOf("H") !== -1} onPress={() => handleLetter("H")}><TextKey>H</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("J") !== -1} used={usedWords.used.indexOf("J") !== -1} right={usedWords.right.indexOf("J") !== -1} onPress={() => handleLetter("J")}><TextKey>J</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("K") !== -1} used={usedWords.used.indexOf("K") !== -1} right={usedWords.right.indexOf("K") !== -1} onPress={() => handleLetter("K")}><TextKey>K</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("L") !== -1} used={usedWords.used.indexOf("L") !== -1} right={usedWords.right.indexOf("L") !== -1} onPress={() => handleLetter("L")}><TextKey>L</TextKey></ButtonKey>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <ButtonKey useless={usedWords.useless.indexOf("Z") !== -1} used={usedWords.used.indexOf("Z") !== -1} right={usedWords.right.indexOf("Z") !== -1} onPress={() => handleLetter("Z")}><TextKey>Z</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("X") !== -1} used={usedWords.used.indexOf("X") !== -1} right={usedWords.right.indexOf("X") !== -1} onPress={() => handleLetter("X")}><TextKey>X</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("C") !== -1} used={usedWords.used.indexOf("C") !== -1} right={usedWords.right.indexOf("C") !== -1} onPress={() => handleLetter("C")}><TextKey>C</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("V") !== -1} used={usedWords.used.indexOf("V") !== -1} right={usedWords.right.indexOf("V") !== -1} onPress={() => handleLetter("V")}><TextKey>V</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("B") !== -1} used={usedWords.used.indexOf("B") !== -1} right={usedWords.right.indexOf("B") !== -1} onPress={() => handleLetter("B")}><TextKey>B</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("N") !== -1} used={usedWords.used.indexOf("N") !== -1} right={usedWords.right.indexOf("N") !== -1} onPress={() => handleLetter("N")}><TextKey>N</TextKey></ButtonKey>
            <ButtonKey useless={usedWords.useless.indexOf("M") !== -1} used={usedWords.used.indexOf("M") !== -1} right={usedWords.right.indexOf("M") !== -1} onPress={() => handleLetter("M")}><TextKey>M</TextKey></ButtonKey>
        </View>
    </View>
    )
}