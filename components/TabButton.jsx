import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import home from "../assets/home.png"

function TabButton({currentTab,setCurrentTab,title, image}) {
    return (
        <TouchableOpacity onPress={ () => {
            if(title == "LogOut"){

            }else{
                setCurrentTab(title)
            }
        }}>
            <View style={{
              flexDirection:"row",
              alignItems:"center",
              paddingVertical:8,
              backgroundColor:currentTab== title?'white':'transparent',
              paddingLeft:13,
              paddingRight:35,
              borderRadius:8,
              marginTop:15
            }}>
            <Image source={image} style={{width:25,height:25,
            tintColor:currentTab==title? "#5359D1" :"white"
            }}></Image>
              <Text style={{
                fontSize:15,
                fontWeight:'bold',
                paddingLeft:15,
                color:currentTab == title? "#5359D1":"white"
              }}>
              {title}
              </Text>
            </View>
            </TouchableOpacity>
    )
}

export default TabButton
