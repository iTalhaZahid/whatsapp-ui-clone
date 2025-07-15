import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';



const Login = () => {
    const insets = useSafeAreaInsets();
    const route = useRouter();
    let onPress = () => {
        route.push('/(auth)/otp')
    }
    const [visible, setVisible] = useState(false)
    const [countryCode, setCountryCode] = useState("+92");
    const [country, setCountry] = useState("Pakistan")
    return (
        <SafeAreaView style={[style.main , { paddingTop: insets.top }]}>
               <StatusBar style="dark" />
            <View style={style.header}>
                <View style={style.phone_container}>
                    <Text style={style.phone}>Enter your Phone Number</Text>
                    <Text style={style.need_number_container}>
                        WhatsApp will need to verify your phone number.
                        <Text style={{ color: 'blue' }}> What's my number?</Text>
                    </Text>
                </View>

                <View style={style.main_number_container}>
                    <TouchableOpacity style={style.contry_container} activeOpacity={0.8} onPress={() => { setVisible(true) }}>
                        <View></View>
                        <Text style={style.country}>{country}</Text>
                        <AntDesign name="caretdown" size={moderateScale(16)} color="black" />
                    </TouchableOpacity>

                    <View style={style.line} />

                    <View>
                        <View style={style.phoneRow}>
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Text style={style.countrycode}>{countryCode}</Text>
                                <View style={style.line} />
                            </View>

                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={style.phoneInput}
                                    placeholder="(555) 656-2356"
                                    keyboardType="phone-pad"
                                    placeholderTextColor="#888"
                                />
                                <View style={style.line} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={style.footer}>
                <TouchableOpacity style={style.button} onPress={onPress} >
                    <Text style={style.button_text}>Next</Text>
                </TouchableOpacity>
            </View>
            {
                visible && (<CountryPicker visible={visible} onClose={() => { setVisible(false) }} withFilter withFlag withCallingCode onSelect={(e) => {
                    setCountry(`${e.name}`);
                    setCountryCode(`+${e.callingCode}`);
                }} />)
            }

        </SafeAreaView>

    );
};

export default Login;

const style = StyleSheet.create({
    main: {
        flex: 1,
        padding: moderateScale(18),
    },
    header: {
        flex: 1,
        width: wp(90),
    },
    button: {
        backgroundColor: '#0CCC83',
        paddingHorizontal: wp(8),
        paddingVertical: moderateScale(12),
        borderRadius: moderateScale(8),
    },
    button_text: {
        fontSize: moderateScale(18),
        color: 'white',
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: moderateScale(100),
    },
    phone_container: {
        justifyContent: 'center',
        marginVertical: moderateScale(38),
        gap: moderateScale(18),
    },
    phone: {
        textAlign: 'center',
        fontSize: moderateScale(20),
        fontWeight: 'bold',
    },
    need_number_container: {
        fontSize: moderateScale(16),
        textAlign: 'center',
    },
    main_number_container: {
        gap: moderateScale(8),
    },
    contry_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
    },
    line: {
        marginTop: verticalScale(11),
        height: moderateScale(1),
        backgroundColor: 'green',
    },
    country: {
        fontSize: moderateScale(16),
    },
    phoneRow: {
        flexDirection: 'row',
        paddingHorizontal: moderateScale(15),
        gap: verticalScale(14),
    },
    phoneInput: {
        fontSize: moderateScale(16),
        paddingVertical: moderateScale(5),
        color: 'black',
    },
    countrycode: {
        fontSize: moderateScale(16),
        paddingVertical: moderateScale(5),
        color: 'black',
    },
});
