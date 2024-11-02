import React ,{useRef, useState} from "react"; 
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";


const Tabs = (props) => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizonatal =  20;
    const TabWidth= {
        width:paddingHorizonatal*2+width
    }
    return (

        <Pressable 
         
            className={`  font-black self-center rounded-[200px] h-12   justify-center items-center ${props.isInactive ? 'bg-[#fff]' : 'bg-[#0d7667]'}`} 
            
            onPress={() => props.onPress(props.tabId)} style={[TabWidth]}
        >
            <Text onTextLayout={event=>{
                setWidth(event.nativeEvent.lines[0].width)
            }} ref={textRef} className={`   ${props.isInactive ? 'text-black' : 'text-white'}`} >{props.title}</Text>
        </Pressable>
    );
};

Tabs.defaultProps = {
    isInactive: false, 
    onPress: () => {},
};

Tabs.propTypes = {
    tabId : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func,
};

export default Tabs;
