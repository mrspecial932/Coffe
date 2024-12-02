import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faTruck, faTimesCircle, faSadTear } from '@fortawesome/free-solid-svg-icons';

const orders = [
 
    {
      id: '1',
      order_date: '2024-11-16',
      order_status: 'Delivered',
      total_price: 19.99,
    },
    {
      id: '2',
      order_date: '2024-11-10',
      order_status: 'Processing',
      total_price: 12.99,
    },
    {
      id: '3',
      order_date: '2024-11-01',
      order_status: 'Cancelled',
      total_price: 15.49,
    },
  
]; // Empty array for testing "No orders" state

const TimelineOrderHistory = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <FontAwesomeIcon icon={faTruck} size={24} color="#34D399" />;
      case 'Processing':
        return <FontAwesomeIcon icon={faHome} size={24} color="#FACC15" />;
      case 'Cancelled':
        return <FontAwesomeIcon icon={faTimesCircle} size={24} color="#F87171" />;
      default:
        return null;
    }
  };

  const renderItem = ({ item, index }) => (
    <View
      className="flex-row bg-white rounded-xl shadow-xl p-4 mb-8 relative overflow-hidden"
      style={{
        backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(240,255,255,0.85)',
      }}
    >
      {/* Gradient Background Effect */}
      <View className="absolute h-full w-2 bg-gradient-to-b from-teal-400 to-green-300 left-0 rounded-full"></View>

      {/* Timeline Marker */}
      <View className="items-center w-16">
        <View className="bg-gradient-to-br from-green-400 to-teal-500 p-2 rounded-full">
          {getStatusIcon(item.order_status)}
        </View>
        {/* Curved Connector */}
        {index !== orders.length - 1 && (
          <View className="h-[50px] w-[2px] bg-gradient-to-b from-gray-300 to-gray-500" />
        )}
      </View>

      {/* Order Details */}
      <View className="flex-1 pl-6">
        <Text className="text-sm text-gray-500 font-light">{item.order_date}</Text>
        <Text
          className={`text-xl font-semibold mb-1 ${
            item.order_status === 'Delivered' ? 'text-green-500' :
            item.order_status === 'Processing' ? 'text-yellow-500' : 
            'text-red-500'
          }`}
        >
          {item.order_status}
        </Text>
        <Text className="text-base text-gray-700 font-medium">${item.total_price.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-[#015d5a] p-6">
      <Text className="text-2xl font-bold text-white mb-6">Order History</Text>

      {orders.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <FontAwesomeIcon icon={faSadTear} size={60} color="#fff" />
          <Text className="text-lg text-white mt-4">No orders placed yet!</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      )}
    </View>
  );
};

export default TimelineOrderHistory;
