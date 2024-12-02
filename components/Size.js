import React ,{useRef, useState} from "react"; 
import { Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faStar ,faCoffee, faObjectGroup} from "@fortawesome/free-solid-svg-icons";

const Size = (props) => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizonatal =  20;
    const TabWidth= {
        width:paddingHorizonatal*2+width
    }
    return (

        <TouchableOpacity 
            onPress={() => props.onPress(props.tabId)} style={[TabWidth]}
        >
            <View className={`font-black self-center rounded-full h-16 w-16 justify-center items-center  ${props.isInactive ? 'bg-[#ff8629]' : 'bg-[#0d7667]'}`}>
      <Image
        source={require('./../Screens/sas.png')}  // Replace with your actual image path
        className="h-8 w-8 rounded-full"  // Adjust image size to fit within the circle
        resizeMode="cover"  // Ensures the image scales to cover the entire area
      /></View>
      
            <Text onTextLayout={event=>{
                setWidth(event.nativeEvent.lines[0].width)
            }} ref={textRef} className={` text-center  mt-2 text-base  ${props.isInactive ? 'text-black' : 'text-white'}`} >{props.title}</Text>
        </TouchableOpacity>
    );
};

Size.defaultProps = {
    isInactive: false, 
    onPress: () => {},
};

Size.propTypes = {
    tabId : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func,
};

export default Size;
