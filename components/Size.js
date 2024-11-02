import React ,{useRef, useState} from "react"; 
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faStar ,  faObjectGroup} from "@fortawesome/free-solid-svg-icons";

const Size = (props) => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizonatal =  20;
    const TabWidth= {
        width:paddingHorizonatal*2+width
    }
    return (

        <Pressable 
         
        
            
            onPress={() => props.onPress(props.tabId)} style={[TabWidth]}
        >
            <Text className={`  font-black self-center rounded-[200px]    justify-center items-center ${props.isInactive ? 'bg-[#ff8629]' : 'bg-[#0d7667]'}`} 
            >
            <FontAwesomeIcon icon={faObjectGroup} size={50} color="#ffcc5b" className="" />
            </Text>
            <Text onTextLayout={event=>{
                setWidth(event.nativeEvent.lines[0].width)
            }} ref={textRef} className={`   ${props.isInactive ? 'text-black' : 'text-white'}`} >{props.title}</Text>
        </Pressable>
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
