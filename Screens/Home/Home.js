import React,{ useEffect, useState} from 'react';
import { SafeAreaView, Text, View, Pressable, StatusBar, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button/Button';
import Tabs from '../../components/Button/Tabs';
import Badge from '../../components/badge/badge';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCat , faBars , faCartShopping } from "@fortawesome/free-solid-svg-icons";;
import Seach from '../../components/search/Search';
import Card from '../../components/singlec/Card';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { updateSelectedCategoryId } from '../../Redux/reducer.js/categories';
import { resetCard, updateSelectedCardId } from '../../Redux/reducer.js/card';
import { Routes } from '../../navigation/Route';
import SingleCard from '../SignleCard/Signle';
import { toggleItem, addItem } from '../../Redux/reducer.js/Wishlist';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Home({navigation}) {
  const dispatch = useDispatch();
  const categories = useSelector(state=> state.categories);
  const card = useSelector(state => state.cards)
  const wishlist = useSelector((state) => state.Wishlist.items);
  const [Cards, setCards] = useState([]);
  const [categoryPage, setCategoryPage]= useState(1);
  const [categoryList , setCategoryList] = useState([]);
  const [isLoadingCategories , setIsLoadingCategories] = useState(false);
  const categoryPageSize=3


  const x = useSelector((state)=> state.cards.items.reduce((sum, item) => sum + parseInt(item.NumOrder, 10), 0));  


  useEffect(()=>{
   const items = card.items;
   const filteredItems = items.filter((value)=>value.categoryIds.includes(categories.selectedCategoryId))
   setCards(filteredItems)
  }, [categories.selectedCategoryId])

  useEffect(()=>{
    setIsLoadingCategories(true)
    setCategoryList(pagination(categories.categories, categoryPage, categoryPageSize));
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, [])
  const pagination =(items, pageNumber, pageSize)=>{
    const startIndex = (pageNumber-1) * pageSize;
    const endIndex = startIndex + pageSize;

    if(startIndex >= items.length){
      return[]
    }
    return items.slice(startIndex, endIndex);
  }

  const handleWishlistToggle = (item) => {
    const x = dispatch(toggleItem(item));  // Dispatch the full item, not just the id
    console.log(x); // You can check the result of the dispatch here
  };
 

  return (

    <SafeAreaView  className=" py-3 bg-[#ff8629]" >
         <StatusBar backgroundColor="#85400b" barStyle="light-content" />
        <View className="px-6 pt-5">
        <View className="flex flex-row justify-between">
          <View className= "bg-white p-4 rounded-full w-10 h-10 flex items-center justify-center">
            
           
          <FontAwesomeIcon icon={faBars} size={20}  />
          </View>
       
          <View className="bg-white p-4 rounded-full w-10 h-10 flex items-center justify-center relative">
         
          <FontAwesomeIcon icon={faCartShopping} size={20}  />
          <View className="absolute right-1 top-1 bg-[#ff8629] rounded-full h-4 w-4 items-center justify-center">
          <Text className="text-white text-xs bg font-bold">{x}</Text>
        </View>
          </View>
        </View>

        </View>
        <View className="flex flex-row justify-between  mt-5 px-3  pb-6">
          <View className="text-left">
          <Text className="text-3xl font-bold text-white"> Coffee</Text>
          <Text className="text-base font-bold text-white left-2"> Ignite this morning</Text>
        
        </View>
        <Seach onSearch={(value ) =>{console.log(value)}}/>

        
        
        </View>


        <View  className="bg-[#015d5a]  w-full   h-full pt-2  rounded-[35px] ">
        <View className=" h-[100] ">

        <FlatList 
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          if(isLoadingCategories) {return ;}
          setIsLoadingCategories(true)
         
          let newData = pagination(categories.categories , categoryPage, categoryPageSize);

          if (newData.length > 0 ){
           
            setCategoryList(prevState=>[...prevState ,...newData] );
            setCategoryPage(prevState =>prevState + 1);
          }
          setIsLoadingCategories(false)
        }}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} data={categoryList} renderItem={({item}) => 
          <View className=" ml-6 mt-6 abosulte" key={item.categoryid}  >

          <Tabs 
          tabId={item.categoryid}
          onPress={(value) => dispatch(updateSelectedCategoryId(value))}
          title={item.name} 
          isInactive={item.categoryid !== categories.selectedCategoryId} />
          </View>
        } />
        </View>
       




<FlatList 
        onEndReachedThreshold={0.5}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} data={Cards} renderItem={({item}) => 
          <TouchableOpacity>
          <View className=" ml-2" key={item.id}  >
            <Card 
               onPress={selectedCardId=>{
                dispatch(updateSelectedCardId(selectedCardId))
                navigation.navigate(Routes.SingleCard);
                
               }}
               uri={item.uri}
               Cardid={item.id}
               title ={item.title} price={parseFloat(item.sizeOptions?.[0]?.price || 0)}
               badge={item.badge}
               />
             
             <Pressable
                onPress={() => handleWishlistToggle(item)}
                className="absolute top-2 right-2 bg-white rounded-full p-2"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  size={20}
                  color={wishlist.some((wishlistItem) => wishlistItem.id === item.id) ? 'red' : 'gray'}
                />
              </Pressable>
        
          </View>
          </TouchableOpacity>
        } />
       
        
     </View>
     
      
      </SafeAreaView>
  );
}

export default Home;
