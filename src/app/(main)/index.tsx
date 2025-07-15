import imagePath from '@/src/constants/imagePath'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
const Index = () => {

  const router = useRouter();

  const [isLoading, setisLoading] = useState(false)
  
  let navigate_to = ()=>{
    router.replace('/first')
  }

  let loading_timeout=()=>{
     setisLoading(true)
     setTimeout(()=>{
      navigate_to()
     },2000)
  }
  
   useEffect(() => {
    setTimeout(() => {
     loading_timeout()
    }, 2000)
  }, [])


 

 
  // render
  return (
    <SafeAreaView style={style.main}>
       <StatusBar style="dark" />
      <View style={style.header}>

      </View>
      <View style={style.body}>
        <Image
          source={imagePath.logo}
          style={style.imageLogo}
        />
      </View>
      <View style={style.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0CCC83"} />

          </>) : (
          <>
            <Text style={style.from}>From</Text>
            <Text style={style.fb}>Facebook</Text>
          </>

        )}

      </View>
    </SafeAreaView>
  )
}

export default Index;

const style = StyleSheet.create({
  main: {
    flex: 1,
    padding: moderateScale(18),
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  header: {
    width: wp(90),
    height: hp(10),
  },
  body: {
    width: wp(80),
    height: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: wp(80),
    height: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(0),
  },
  imageLogo: {
    width: moderateScale(70),
    height: moderateScale(70),
  },
  from: {
    textAlign: 'center',
    fontSize: moderateScale(15),
    color: 'rgb(56, 55, 55)'
  },
  fb:
  {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: 'rgb(0, 0, 0)'
  }
})