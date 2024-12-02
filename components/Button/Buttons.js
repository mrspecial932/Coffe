import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";

const Buttons = (props) => {
    return (
        <Pressable 
            disabled={props.isDisabled} 
            className="bg-[#ff8629] font-black self-center rounded-xl  h-12 w-full justify-center items-center" onPress={()=>props.onPress()}
        >
            <Text className="text-white text-lg">{props.title}</Text>
        </Pressable>
    );
};

Buttons.defaultProps = {
    isDisabled: false, 
    onPress:()=>{}
};

Buttons.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func
};

export default Buttons;
