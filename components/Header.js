import React from 'react'
import {View , Text} from "react-native"
import PropTypes from 'prop-types'

const Header = props=>{
    return (
        <View>
            <Text className="text-2xl font-bold text-gray-950">{props.title}</Text>
        </View>
    )
}
Header.default={
   title:"" ,
}

Header.protoTypes= {
    title:PropTypes.string
}
export default Header;