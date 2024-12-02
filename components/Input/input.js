import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import PropTypes from "prop-types";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Input = (props) => {
    const [value, setValue] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View className="py-2 mb-4">
            <Text className="text-lg font-semibold">{props.label}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 2, borderColor: "#2c5f5d" }}>
                <TextInput
                    placeholder={props.placeholder || null}
                    secureTextEntry={props.secureTextEntry && !isPasswordVisible}
                    keyboardType={props.keyboardType}
                    style={{ flex: 1, paddingVertical: 10 }}
                    value={value}
                    onChangeText={(val) => {
                        setValue(val);
                        props.onChangeText(val);
                    }}
                />
                {props.secureTextEntry && (
                    <Pressable onPress={togglePasswordVisibility} style={{ paddingHorizontal: 10 }}>
                        <FontAwesomeIcon 
                            icon={isPasswordVisible ? faEyeSlash : faEye} 
                            size={20} 
                            color="#6b6e72" 
                        />
                    </Pressable>
                )}
            </View>
        </View>
    );
};

Input.defaultProps = {
    onChangeText: (val) => {},
    keyboardType: "default",
    secureTextEntry: false,
};

Input.propTypes = {
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    secureTextEntry: PropTypes.bool,
};

export default Input;
