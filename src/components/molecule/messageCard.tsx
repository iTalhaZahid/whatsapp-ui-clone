import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const MessageCard = ({ name, msg, time, pic, msgnumber, imgComponent, callComponent, incoming }: any) => {
    // render
    return (
        <View style={styles.main}>
            <View style={styles.leftContainer}>
                <View >
                    <Image source={pic} style={styles.image} />
                    {imgComponent}
                </View>

                <View style={styles.msgContainer}>
                    <Text style={styles.name}>{name}</Text>
                   <View style={{flexDirection:'row',gap:moderateScale(4)}}>
                    {incoming}
                    <Text style={styles.textMessage}>{msg}</Text>
                   </View>
                </View>
            </View>
            <View style={styles.rightContainer}>
                {callComponent}
                {!!time && (
                    <Text style={styles.time}>{time}</Text>
                )
                }
                {!!msgnumber && (
                    <View style={styles.unreadmsgContainer}>
                        <Text style={styles.unreadmsgsnumber}>{msgnumber}</Text>
                    </View>

                )
                }
            </View>
        </View>
    )
}

export default MessageCard
const styles = StyleSheet.create({
    main: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(9),
        // marginTop: moderateScale(2),
        alignItems: 'center',
    },
    leftContainer: {
        flexDirection: 'row',
        gap: moderateScale(14),
        justifyContent: 'center'
    },
    image: {
        width: moderateScale(52),
        height: moderateScale(52),
        borderRadius: moderateScale(50),
    },
    name: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'black'
    },
    textMessage: {
        fontSize: moderateScale(14),
        color: '#889095'
    },
    rightContainer: {
        alignItems: 'flex-end',
        gap: moderateScale(5),
    },
    time: {
        fontSize: moderateScale(14),
        color: '#998E8E'
    },
    msgContainer: {
        justifyContent: 'center',
        gap: verticalScale(3),
    },
    unreadmsgContainer: {
        backgroundColor: '#036A01',
        height: moderateScale(22),
        width: moderateScale(22),
        borderRadius: moderateScale(22),
        justifyContent: 'center',
        alignItems: 'center',

    },
    unreadmsgsnumber: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '500',
    },
})