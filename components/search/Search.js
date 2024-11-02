import React , {useRef , useState} from "react";
import { View ,TextInput, Pressable} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch , faExchange } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Seach = props => {

    const textInputRef = useRef(null);
    const [search , setSearch] = useState("");

    const handleFocus= ()=>{
        textInputRef.current.focus();
    }
    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        props.onSearch(searchValue);
    }  

    return(
        
        <Pressable className="flex flex-row items-center w-1/2 h-12 px-4 bg-white rounded-2xl" onPress={handleFocus}>
    <View className="mr-2"> 
        <FontAwesomeIcon icon={faSearch} size={20} color="#6b6e72" />
    </View>
    <TextInput
        className="flex-1 text-slate-900 font-medium text-base"
        placeholder="Search"
        placeholderTextColor="#c4c3c3" 
        ref={textInputRef}
        value={search}

        onChangeText={(value)=> handleSearch(value)}
    />
    <FontAwesomeIcon icon={faExchange} size={20} color="#6b6e72" />
</Pressable>
)
}
Seach.defaultProps ={
    onSearch :() =>{}
}
Seach.propTypes={
    onSearch:PropTypes.func,
}
export default Seach;