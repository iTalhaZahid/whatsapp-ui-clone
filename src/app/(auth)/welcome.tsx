import imagePath from '@/src/constants/imagePath'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'


const Welcome = () => {
    const route = useRouter();
    let onPress = () => {
        route.push('/(auth)/login')
    }
    // render
    return (
        <SafeAreaView style={style.main}>
            <StatusBar style="dark" />
            <View style={style.image_container}>
                <Text style={style.welcome_text}>Welcome to WhatsApp</Text>
                <Image source={imagePath.termsncondition} style={style.image} />
                <Text style={style.privacytext}>
                    Read our <Text style={{ fontWeight: 'bold', color: '#007AFF', }}>Privacy Policy</Text>. Tap <Text style={{ fontWeight: 'bold' }}>"Agree and Continue"</Text> to accept the <Text style={{ fontWeight: 'bold', color: '#007AFF' }}>"Terms of Service"</Text>.
                </Text>

                <TouchableOpacity style={style.btn} activeOpacity={0.8} onPress={onPress}>
                    <Text style={style.btntext}>Agree and Continue</Text>
                </TouchableOpacity>
            </View>
            <View style={style.footer}>
                <Text style={style.from}>From</Text>
                <Text style={style.fb}>Facebook</Text>
            </View>
        </SafeAreaView>
    )
}

export default Welcome
const style = StyleSheet.create({
    main: {
        flex: 1,
        padding: moderateScale(18),
        backgroundColor:'white',
        
    },
    image_container: {
        flex: 1,
        width: wp(90),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(12),
    },
    image: {
        width: moderateScale(290),
        height: moderateScale(290),
        borderRadius: moderateScale(180),
        marginTop: moderateScale(50),
    },
    welcome_text: {
        textAlign: 'center',
        fontSize: moderateScale(30),
        fontWeight: 'bold',
        color: "#0CCC83",
    },
    privacytext: {
        textAlign: 'center',
        marginTop: moderateScale(38),
        fontSize: moderateScale(15),
    },

    btn: {
        width: wp(80),
        height: moderateScale(55),
        borderRadius: moderateScale(8),
        backgroundColor: '#0CCC83',
        justifyContent: "center",
        marginTop: moderateScale(28),
    },
    footer: {
        width: wp(90),
        height: hp(10),
        justifyContent: 'center',
        alignItems: 'center',
          marginBottom: moderateScale(0),
    },
    btntext: {
        textAlign: 'center',
        color: 'white',
        fontSize: moderateScale(18),
    }, from: {
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
