import React from "react";
import { Image, SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import GoBack from "../../components/Button/GoBack";
import Size from '../../components/Size';
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAdd, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { addItem,
    updateSelectedSize, 
    increaseItemQuantity, 
    decreaseItemQuantity
} from "../../Redux/reducer.js/card";
import { Routes } from "../../navigation/Route";

const SingleCard = ({ navigation }) => {
    const CardItemInformation = useSelector(state => state.cards.selectedCardInformation) || {};
    const dispatch = useDispatch();

    const handleSizeSelect = (size) => {
        dispatch(updateSelectedSize({ id: CardItemInformation.id, selectedSize: size }));
    };
    const handleIncreaseQuantity = () => {
        dispatch(increaseItemQuantity({ id: CardItemInformation.id, selectedSize:  CardItemInformation.selectedSize }));
    };
    
    const handleDecreaseQuantity = () => {
        dispatch(decreaseItemQuantity({ id: CardItemInformation.id, selectedSize:  CardItemInformation.selectedSize }));
    };

    const handleAddToCart = () => {
        if (CardItemInformation && CardItemInformation.NumOrder !== undefined) {
            dispatch(addItem(CardItemInformation));  // Pass the item details
            navigation.navigate(Routes.Cart);  // Navigate to the Cart screen
        } else {
            console.warn("CardItemInformation or NumOrder is missing");
        }
    };

    
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#015d5a" barStyle="light-content" />
            <ScrollView className="bg-[#ff8629] h-full ">
                <View className="bg-[#015d5a] absolute  mt-[400px] h-[4000px] w-full rounded-[60px] pt-32 px-6">
                    <View className="justify-between items-center flex-row">
                        <View className="w-[250px]">
                            <Text className="text-3xl font-extrabold text-slate-100">{CardItemInformation.title}</Text>
                            <Text className="text-slate-300">{CardItemInformation.description}</Text>
                        </View>
                        <View>
                            <Text className="text-orange-300 text-4xl">
                                ${CardItemInformation.totalPrice || 0}
                            </Text>
                        </View>
                    </View>

                    <View className="mt-2  ">
                        <Text className="text-2xl text-slate-200">Size Option</Text>
                        <View className=" mt-3 flex-row">
                            {(CardItemInformation.sizeOptions || []).map((option) => (
                                <Size
                                    key={option.size}
                                    onPress={() => handleSizeSelect(option.size)}
                                    title={option.size}
                                    isActive={CardItemInformation.selectedSize === option.size}
                                />
                            ))}
                        </View>
                    </View>

                    <View className="flex-row pt-5 justify-between items-center">
                        <View className="flex-row items-center justify-between">
                            <TouchableOpacity onPress={handleDecreaseQuantity} className="bg-[#0d7667] rounded-full p-2 mx-2">
                                <FontAwesomeIcon icon={faSubtract} size={20} color="#f18e29" />
                            </TouchableOpacity>
                            <Text className="text-3xl text-white font-bold">{CardItemInformation.NumOrder}</Text>
                            <TouchableOpacity onPress={handleIncreaseQuantity} className="bg-[#0d7667] rounded-full p-2 mx-2">
                                <FontAwesomeIcon icon={faAdd} size={20} color="#f18e29" />
                            </TouchableOpacity>
                        </View>
                        <View className="">
                        <Button title="Add to cart" onPress={handleAddToCart} />
                        </View>
                    </View>
                </View>

                <View className="ml-5 bg-[#184946] w-8 rounded-full mt-3 p-2 mb-2">
                    <GoBack onPress={() => navigation.goBack()} />
                </View>
                
                <View className="items-center  ">
                    <Image source={{ uri: CardItemInformation.uri }} className="rounded-3xl h-[450px] w-[380px] object-center"
                      resizeMode="cover" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SingleCard;
