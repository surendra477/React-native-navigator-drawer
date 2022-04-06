import { useState,useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity, Animated } from 'react-native';
import profile from "./assets/profile.png"
import home from "./assets/home.png"
import TabButton from './components/TabButton';
import search from "./assets/search.png"
import notifications from "./assets/bell.png"
import settings from "./assets/settings.png"
import logout from "./assets/logout.png"
import menu from "./assets/menu.png"
import close from "./assets/close.png"
import photo from "./assets/photo.jpg"



export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonoffset = useRef(new Animated.Value(0)).current;

  return ( 
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent:'flex-start',paddingTop:60, paddingLeft:20}}>
        <Image source={profile} style={{
          width:60,
          height:60,
          borderRadius:10,
          marginTop:8
        }}>

        </Image>
        <Text style={{
          fontSize:20,
          fontWeight:'bold',
          color:'white',
          marginTop:20
        }}>Surendra Ediga</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop:6,
            color:'white'
          }}>View profile</Text>
        </TouchableOpacity>

          <View style={{flexGrow:1, marginTop:60}}>

            {

            }
<TabButton currentTab= {currentTab} setCurrentTab= {setCurrentTab} title={"Home"} image={home}/>
<TabButton currentTab= {currentTab} setCurrentTab= {setCurrentTab} title={"search"} image={search}/>
<TabButton currentTab= {currentTab} setCurrentTab= {setCurrentTab} title={"notifications"} image={notifications}/>
<TabButton currentTab= {currentTab} setCurrentTab= {setCurrentTab} title={"settings"} image={settings}/>
          </View>
<View>
<TabButton currentTab= {currentTab} setCurrentTab= {setCurrentTab} title={"LogOut"} image={logout}/>
</View>
      </View>

<Animated.View style={{
  flexGrow:1,
  backgroundColor:'white',
  position:'absolute',
  top:0,
  bottom:0,
  left:0,
  right:0,
  paddingHorizontal:15,
  paddingVertical:20,
  borderRadius:showMenu?15:0,
  transform:[
    {scale:scaleValue},
    {translateX:offsetValue}
  ]
}}>
{

}

<TouchableOpacity onPress={() => {
  Animated.timing(scaleValue,{
    toValue:showMenu? 1: 0.88,
    duration:300,
    useNativeDriver:true
  })
  .start()

  Animated.timing(offsetValue,{
    toValue:showMenu? 0: 220,
    duration:300,
    useNativeDriver:true
  })
  .start()

  setShowMenu(!showMenu)
}}>

  <Image  source={menu} style={{width:20,height:20, tintColor:'black',marginTop:40 }}></Image>

</TouchableOpacity>
  <Text style={{fontSize:30,fontWeight:'bold', tintColor:'black',paddingTop:20}}>{currentTab}</Text>

<Image source={photo} style={{width:'100%',height:300,borderRadius:15,marginTop:20}}></Image>
<Text style={{fontSize:20,fontWeight:'bold',paddingTop:15,paddingBottom:5}}>
Surendra Ediga
  </Text>

  <Text style={{fontWeight:'bold'}}>Techie, YouTuber, Animal Lover, Blogger</Text>
</Animated.View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
