import React from "react";
import PropTypes from "prop-types";
import { Image,View, Text, Pressable} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar , faAdd } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Badge from "../badge/badge";

const Card =(props)=>{

    return(
        <Pressable onPress={()=>{ props.onPress(props.Cardid)}}>
        <View className="bg-zinc-100  rounded-lg shadow-md w-[250px] m-2 pb-4 ">
            <View className=" w-[250px] h-[350px] p-2">
            
            <Image 
            source={{ uri: props.uri }} 
            resizeMode={"cover"}
            className="w-full h-full rounded-lg shadow-md" />

            </View>
            <View className="flex flex-row  justify-between px-4 py-2" >        
            <Header title={props.title}/> 
            <Text className="text-xl font-bold  text-[#bf6622]">${props.price}</Text>
            </View>

            <View className="flex flex-row  px-3 justify-between">
            
             <View className="flex flex-row  ">  
            <FontAwesomeIcon icon={faStar} size={20} color="#ffcc5b" className="" />
            <Badge title={props.badge}/>
            </View>

            <Pressable className="border rounded-full p-1  mr-2" >
            <FontAwesomeIcon icon={faAdd} size={12}  />
            </Pressable>
            </View>
         </View>   
         </Pressable>
    )
}
Card.prototype={
    Cardid: PropTypes.number.isRequired,
    uri:PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price : PropTypes.string.isRequired,
    Category : PropTypes.string.isRequired,
    onPress : PropTypes.func
};
Card.defaultProps ={
    onPress: ()=>{

    },
}

export default Card

