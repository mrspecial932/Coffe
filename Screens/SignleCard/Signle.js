import React from "react";
import { Image, SafeAreaView, ScrollView, View, Text, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import GoBack from "../../components/Button/GoBack";
import Size from '../../components/Size';
import { updateSelectedSize } from "../../Redux/reducer.js/size";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAdd, faSubtract } from "@fortawesome/free-solid-svg-icons";

const SingleCard = ({ navigation, route }) => {
    const CardITemInformation = useSelector(
        state => state.cards.selectedCardInformation
    );
    const dispatch = useDispatch();
    const Sizes = useSelector(state => state.Size);

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#015d5a" barStyle="light-content" />
            <ScrollView className="bg-[#ff8629] h-full pt-6">
                <View className="bg-[#015d5a] absolute mt-96 h-[4000px] w-full rounded-[60px] pt-28 px-6">
                    <View className="justify-between items-center flex-row">
                        <View className="w-[250px]">
                            <Text className="text-3xl font-extrabold text-slate-100">{CardITemInformation.title}</Text>
                            <Text className="text-slate-300">{CardITemInformation.description}</Text>
                        </View>
                        <View>
                            <Text className="text-orange-300 text-4xl">${CardITemInformation.price}</Text>
                        </View>
                    </View>

                    <View className="mt-5">
                        <Text className="text-2xl text-slate-200">Size Option</Text>
                        {Sizes.length > 0 && (
                            <View className="ml-6 mt-6" key={Sizes.categoryid}>
                                {Sizes.map((value) => (
                                    <Size
                                        key={value.id}
                                        tabId={value.id}
                                        onPress={() => dispatch(updateSelectedSize(value))}
                                        title={value.name}
                                        isInactive={item.categoryid !== categories.selectedCategoryId}
                                    />
                                ))}
                            </View>
                        )}
                    </View>

                    <View className="flex-row mt-24">
                        <View className="flex-row items-center justify-between">
                            <View className="bg-[#0d7667] rounded-full p-4 mx-2">
                                <FontAwesomeIcon icon={faSubtract} size={20} color="#f18e29" />
                            </View>
                            <Text className="text-3xl text-white font-bold">1</Text>
                            <View className="bg-[#0d7667] rounded-full p-4 mx-2">
                                <FontAwesomeIcon icon={faAdd} size={20} color="#f18e29" />
                            </View>
                        </View>
                        <View className="ml-20">
                            <Button title="Add to cart" />
                        </View>
                    </View>
                </View>

                <View className="ml-5 bg-white w-8 rounded-full p-2 mb-5">
                    <GoBack onPress={() => navigation.goBack()} />
                </View>
                
                <View className="items-center">
                    <Image source={{ uri: CardITemInformation.uri }} className="rounded-3xl h-[400px] w-[380px] object-center" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SingleCard;
