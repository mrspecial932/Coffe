import React ,{useRef, useState} from "react"; 
import { Pressable, Text , View} from "react-native";
import PropTypes from "prop-types";



const Badge = (props) => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizonatal = 2;
    const TabWidth= {
        width:paddingHorizonatal*6+width
    }
    return (

        <View
            
            className="font-black  rounded-[10px] justify-center items-center"
             style={[TabWidth]}  
        >
            <Text onTextLayout={event=>{
                setWidth(event.nativeEvent.lines[0].width)
            }} ref={textRef} className=" font-semibold">{props.title}</Text>
        </View>
    );
};

Badge.defaultProps = {
    isInactive: false, 
    onPress: () => {},
};

Badge.propTypes = {
    title: PropTypes.string.isRequired,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func,
};

export default Badge;
