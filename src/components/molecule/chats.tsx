import imagePath from '@/src/constants/imagePath'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MessageCard from './messageCard'

const Chats = () => {
    const data = [
        {
            name: "Talha Zahid",
            msg: 'Hello g!!!',
            time: "5:42 AM",
            pic: imagePath.logo,
        },
         {
            name: "Hamza",
            msg: 'Hello g!!!',
            time: "5:42 AM",
            msgnumber: 2,
            pic: imagePath.pp3,
        },
         {
            name: "Humair",
            msg: 'lorem ipsum dior',
            time: "5:42 AM",
            msgnumber: 1,
            pic: imagePath.pp1,
        }, {
            name: "Alex",
            msg: 'Time?',
            time: "5:42 AM",
            msgnumber: 2,
            pic: imagePath.pp3,
        }, {
            name: "Faraz",
            msg: 'Will be there!',
            time: "5:45 AM",
            pic: imagePath.pp2,
        }, {
            name: "Ahmad",
            msg: 'Hello g!!!',
            time: "5:42 AM",
            msgnumber: 5,
            pic: imagePath.logo,
        }, {
            name: "Talha",
            msg: 'Hello g!!!',
            time: "5:42 AM",
  
            pic: imagePath.logo,
        }, {
            name: "Usama",
            msg: 'Hello g!!!',
            time: "5:42 AM",
            pic: imagePath.logo,
        }, {
            name: "Naeem",
            msg: 'Hello g!!!',
            time: "5:42 AM",
            pic: imagePath.logo,
        }, {
            name: "Faisal",
            msg: 'Hello g!!!',
            time: "5:42 AM",
            pic: imagePath.logo,
        },
         {
            name: "Wali",
            msg: 'Hello g!!!',
            time: "5:42 AM",
            pic: imagePath.logo,
        }
    ]
    // render
    return (
        <View style={styles.main}>
            <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({ item }) => {
                return (
                    <MessageCard 
                    name={item.name} msgnumber={item.msgnumber} time={item.time} pic = { item.pic } msg={item.msg}
                    />
                )
            }} />
        
        </View>
    )
}

export default Chats
const styles = StyleSheet.create({
    main: {
        flex: 1,

    },
})
