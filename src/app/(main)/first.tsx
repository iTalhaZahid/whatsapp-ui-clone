import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomStatusBar from '@/src/components/atom/customStatusBar';
import Calls from '@/src/components/molecule/calls';
import Chats from '@/src/components/molecule/chats';
import Status from '@/src/components/molecule/status';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const First = () => {
  const [currentScreen, setCurrentScreen] = useState('chats');

  const renderContent = () => {
    switch (currentScreen) {
      case 'calls':
        return <Calls />;
      case 'status':
        return <Status />;
      default:
        return <Chats />;
    }
  };

  return (
    <View style={styles.safeArea}>
      <CustomStatusBar backgroundColor="#008069" />

      <View style={styles.header}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>WhatsApp</Text>
          <View style={styles.iconContainer}>
            <AntDesign name="search1" size={20} color="white" />
            <Entypo name="dots-three-vertical" size={20} color="white" />
          </View>
        </View>

        <View style={styles.buttoncontainer}>
          {['chats', 'status', 'calls'].map((item) => (
            <TouchableOpacity
              key={item}
              activeOpacity={0.5}
              style={[
                styles.buttons,
                item === currentScreen && { borderColor: 'white' },
              ]}
              onPress={() => setCurrentScreen(item)}
            >
              <Text style={styles.buttons_text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.content}>{renderContent()}</View>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#008069', // match your header bg
  },
  header: {
    backgroundColor: '#008069',
  },
  topContainer: {
    flexDirection: 'row',
    paddingVertical: verticalScale(17),
    paddingHorizontal: scale(15),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: moderateScale(25),
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: scale(10),
    alignItems: 'center',
  },
  buttoncontainer: {
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    borderBottomWidth: 3,
    borderColor: '#008069',
  },
  buttons_text: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: moderateScale(13),
    fontWeight: '600',
    paddingVertical: moderateScale(10),
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
