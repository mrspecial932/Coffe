import React  from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import Button from "./Button";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const GoBack = (props)=>{
  
    return (
        <Pressable onPress={()=> props.onPress()}>
            <FontAwesomeIcon icon={faArrowLeft} color="#fff"/>
            
        </Pressable>
    )
}
Button.propTypes = {
    onPress : PropTypes.func.isRequired
}
export default GoBack;