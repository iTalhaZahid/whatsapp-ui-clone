import imagePath from '@/src/constants/imagePath'
import React from 'react'
import { FlatList, StyleSheet, View,Text } from 'react-native'
import MessageCard from './messageCard'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import AntDesign from '@expo/vector-icons/AntDesign'

const Status = () => {
    const data = [
        {
            name: "Talha Zahid",
            msg: 'Hello g!!!',
            pic: imagePath.logo,
        },
        {
            name: "Hamza",
            msg: '10 minutes ago',
            pic: imagePath.pp3,
        },
        {
            name: "Humair",
            msg: 'Today, 7:29 AM',
            pic: imagePath.pp1,
        }, {
            name: "Alex",
            msg: 'Yesterday, 5:32 PM',
            pic: imagePath.pp3,
        }, {
            name: "Faraz",
            msg: 'Yesterday, 8:32 PM',

            pic: imagePath.pp2,
        },
    ]
    // render
    return (
        <View style={styles.main}>
            <MessageCard
                name={"My Status"} pic={imagePath.pp3} msg={"Tap to add and update status "}
                imgComponent={<View style={styles.logoComponent}>
                    <AntDesign name="plus" size={moderateScale(20)} color="black" />
                </View>}
            />
            <View style={{paddingHorizontal:moderateScale(14)}}>
                <Text style={{fontSize:moderateScale(15),fontWeight:'500'}}>Recent Updates</Text>
            </View>
            <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({ item }) => {
                return (
                    <MessageCard
                        name={item.name} pic={item.pic} msg={item.msg}
                    />
                )
            }} />

        </View>
    )
}

export default Status
const styles = StyleSheet.create({
    main: {
        flex: 1,
        gap: moderateScale(10)
    },
    logoComponent:{
        height:verticalScale(20),
        width:moderateScale(25),
        backgroundColor:'#008069',
        position:'absolute',
        bottom:-4,
        right:-6,
        borderRadius:moderateScale(20),
        borderWidth:2,
        borderColor:'black',

    },
})
