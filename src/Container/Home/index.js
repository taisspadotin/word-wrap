import React from "react";
import { View, Text } from "react-native";
import { Keyboard } from "../../Components/";
import {
    Input,
    TextKey,
    Page,
    TitleShadowLeft,
    TitleContentLeft,
    TitleShadowRight,
    TitleContentRight,
    ButtonLeftShadow,
    ButtonContentLeft,
    ButtonRightShadow,
    ButtonContentRight
} from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';

import WordsRef from "./words.json";

const diciojs = require('dicionario.js')

export default function Home(){
    const [words, setWords] = React.useState(WordsRef);
    const [currentWord, setCurrentWord] = React.useState(WordsRef[0].toUpperCase());
    const [line, setLine] = React.useState([
        { values: [{ value: null }, { value: null }, { value: null }, { value: null }, { value: null }], complete: false, current: true },
        { values: [{ value: null }, { value: null }, { value: null }, { value: null }, { value: null }], complete: false, current: true },
        { values: [{ value: null }, { value: null }, { value: null }, { value: null }, { value: null }], complete: false, current: true },
        { values: [{ value: null }, { value: null }, { value: null }, { value: null }, { value: null }], complete: false, current: true },
        { values: [{ value: null }, { value: null }, { value: null }, { value: null }, { value: null }], complete: false, current: true }
    ]);

    const handleLetter = letter => {
        let newLine = line;
        let isValue = false;
        let currentIndex = newLine.findIndex(x => x.current === true);

        if (newLine[currentIndex].values.some(y => y.value === null && !isValue)){
            newLine[currentIndex].values.map(y => {
                if(y.value === null && !isValue){
                    y.value = letter;
                    isValue = true;
                }
            })
        }
        setLine(JSON.parse(JSON.stringify(newLine)))
        console.log("👽 newLine", newLine)
        console.log("👽 letter", letter)
        
    }

    const handleCheck = async () => {
        let newLine = JSON.parse(JSON.stringify(line))
        let currentIndex = newLine.findIndex(x => x.current === true);
        let word = "";
        
        newLine[currentIndex].values.map(x => {
            word += x.value;
        })
        console.log("👽 word", word)
        try{
            if(currentWord.toUpperCase() === word.toUpperCase()){
                /** Se é a palavra certa */
                console.log("ACERTOUUUU")
                newLine[currentIndex].values.map(x => x.success = true);
            }
            else{
                /** Se é uma palavra válida */
                const meaning = await diciojs.significado(word)
                console.log("👽 meaning", meaning)
                /** Altera o index de referência */
                newLine[currentIndex].current = false;
                newLine[currentIndex + 1].current = true;
                /** valida a palavra com as posições */
                word.split("").map((letter, index) => {
                    if(letter === currentWord.split("")[index]){
                        newLine[currentIndex].values[index].success = true;
                    }
                    else if(currentWord.split("").some(x => x === letter)){
                        newLine[currentIndex].values[index].anyValue = true;
                    }
                    else{
                        newLine[currentIndex].values[index].noValue = true;
                    }
                })

            }
        }
        catch(error){
            /** Se não é uma palavra válida */
            newLine[currentIndex]["error"] = true;
        }
        setLine(newLine);
    }

    const handleBackspace = () => {
        let newLine = JSON.parse(JSON.stringify(line))
        let currentIndex = newLine.findIndex(x => x.current === true);
        for(let i = 4; i >= 0; i--){
            if(newLine[currentIndex].values[i].value !== null){
                newLine[currentIndex]["error"] = false;
                newLine[currentIndex].values[i].value = null;
                break;
            }
        }
        setLine(newLine);
    }
    
    return(
    <Page>
        <View style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: 15, marginTop: 10 }}>
            <TitleShadowLeft/>
            <TitleContentLeft>
                <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                    WORD WRAP
                </Text>
            </TitleContentLeft>
        </View>
        <View style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end", marginBottom: 15, marginTop: 10 }}>
            <TitleShadowRight/>
            <TitleContentRight>
                <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                    CONFIGURAÇÕES
                </Text>
            </TitleContentRight>
        </View>
        <View style={{display: "flex", justifyContent: "center", marginTop: 10, alignItems: "center", marginBottom: 10 }}>
            {line.map((ln, i) => (
                <View key={i} style={{display: "flex", flexDirection: "row", padding: 5}}>
                {ln.values.map((l, j) => (
                    <Input key={`letter-${j}`} error={ln.error} success={l.success} anyValue={l.anyValue} noValue={l.noValue}>
                        {l.value}
                    </Input>
                ))}
                </View>
            ))}
        </View>
        <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "flex-start", marginBottom: 15, marginTop: 10 }}>
            <View style={{width: "50%"}}>
                <ButtonLeftShadow/>
                <ButtonContentLeft onPress={() => handleBackspace()}>
                    <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                        <Ionicons name="backspace" size={32} color="#F3E3E3"/>
                    </Text>
                </ButtonContentLeft>
            </View>
            <View style={{width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                <ButtonRightShadow/>
                <ButtonContentRight onPress={() => handleCheck()}>
                    <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                        <Ionicons name="checkmark" size={32} color="#F3E3E3"/>
                    </Text>
                </ButtonContentRight>
            </View>
        </View>
        <Keyboard handleLetter={handleLetter}/>
    </Page>
    )
}