import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Keyboard,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Otp = () => {
  const route = useRouter();
  const onPress = () => {
    route.replace('/(auth)/login');
  };
  const [otp, setOtp] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onPress}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Enter OTP Code</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Code has been sent to number{' '}
            <Text style={{ fontWeight: 'bold' }}>+9230******08</Text>
          </Text>
          <OtpInput
            numberOfDigits={4}
            focusColor="green"
            hideStick={true}
            disabled={false}
            autoFocus={true}
            type="numeric"
            onTextChange={(text) => setOtp(text)}
            onFilled={(text) => setOtp(text)}
            theme={{
              containerStyle: styles.container,
              pinCodeContainerStyle: styles.pinCodeContainer,
            }}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, { opacity: otp.length === 4 ? 1 : 0.5 }]}
            disabled={otp.length !== 4}
          >
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Otp;


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        marginTop:moderateScale(20),
        gap: moderateScale(10),
        marginHorizontal:moderateScale(12),
        alignItems:'center',
    },
    headerText: {
        fontSize: moderateScale(20),
        fontWeight: '600',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        gap:moderateScale(15),
    },
    bodyText: {
        fontSize: moderateScale(20),
        textAlign: 'center',

    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:moderateScale(60),
    },
    button: {
        width: wp(80),
        height: moderateScale(55),
        borderRadius: moderateScale(8),
        backgroundColor: '#0CCC83',
        justifyContent: "center",
        marginTop: moderateScale(28),
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: moderateScale(18),
    },
    container:{
        width:wp(60),
    },
    pinCodeContainer:{
        borderColor:'#0CCC83'
    },

})