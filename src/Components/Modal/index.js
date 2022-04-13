import React from "react";
import { Modal as ModalNative } from "react-native";
import { OutsideModal, ModalContent } from "./style";

export default function Modal(props){
    return(
        <ModalNative
            animationType="slide"
            transparent={true}
            visible={props.open ? props.open : false}
        >
            <OutsideModal>
                <ModalContent>
                    {props.content}
                </ModalContent>
            </OutsideModal>
        </ModalNative>
    )
}