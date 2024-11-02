import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <Pressable 
            disabled={props.isDisabled} 
            className="bg-[#ff8629] font-black self-center rounded-full  h-16 w-[140px] justify-center items-center" onPress={()=>props.onPress()}
        >
            <Text className="text-white text-lg">{props.title}</Text>
        </Pressable>
    );
};

Button.defaultProps = {
    isDisabled: false, 
    onPress:()=>{}
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func
};

export default Button;
