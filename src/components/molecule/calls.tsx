import imagePath from '@/src/constants/imagePath';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MessageCard from './messageCard';
import Feather from '@expo/vector-icons/Feather';

const Calls = () => {
    const call_type = ({type}:any) => {
        if (type === 'voice') {
            return <Ionicons name="call" size={24} color="#008069" />;
        } else if (type === 'video') {
            return <FontAwesome name="video-camera" size={24} color="#008069" />;
        }
    };

      const incoming_type = ({type}:any) => {
        if (type === 'incoming') {
            return <Feather name="arrow-down-left" size={20} color="red" />;
        } else if (type === 'outgoing') {
            return <Feather name="arrow-up-right" size={20} color="#008069" />;
        }
    };


    const data = [
        {
            name: "Talha Zahid",
            msg: 'Today, 2:20 PM',
            pic: imagePath.logo,
            call: 'video', 
            call_status:'incoming'
        },
        {
            name: "Hamza",
            msg: '26 June, 11:14 PM',
            pic: imagePath.pp3,
            call: 'voice',
            call_status:'outgoing'
        },
        {
            name: "Humair",
            msg: '25 June, 10:14 PM',
            pic: imagePath.pp1,
            call: 'video',
            call_status:'outgoing'
        },
        {
            name: "Alex",
            msg: '22 June, 09:14 AM',
            pic: imagePath.pp3,
            call: 'voice',
            call_status:'incoming'
        },

        {
            name: "Faraz",
            msg: '25 May, 10:14 PM',
            pic: imagePath.pp2,
            call: 'video',
            call_status:'outgoing'
        },
        {
            name: "Faraz",
            msg: '25 May, 10:14 PM',
            pic: imagePath.pp2,
            call: 'video',
            call_status:'incoming'
        },
        {
            name: "Faraz",
            msg: '25 May, 10:14 PM',
            pic: imagePath.pp2,
            call: 'video',
            call_status:'outgoing'
        },
        {
            name: "Faraz",
            msg: '25 May, 10:14 PM',
            pic: imagePath.pp2,
            call: 'video',
            call_status:'incoming'
        },
        {
            name: "Faraz",
            msg: '25 May, 10:14 PM',
            pic: imagePath.pp2,
            call: 'video',
            call_status:'outgoing'
        },
        {
            name: "Faraz",
            msg: '25 May, 10:14 PM',
            pic: imagePath.pp2,
            call: 'video',
            call_status:'incoming'
        },
        {
            name: "Faraz",
            msg: '25 May, 10:14 PM',
            pic: imagePath.pp2,
            call: 'video',
            call_status:'incoming'
        },
        {
            name: "Faraz",
            msg: '25 May, 10:14 PM',
            pic: imagePath.pp2,
            call: 'video',
            call_status:'incoming'
        },
    ];

    // Render
    return (
        <View style={styles.main}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <MessageCard
                            incoming={incoming_type({type:item.call_status})}
                            name={item.name}
                            pic={item.pic}
                            msg={item.msg}
                            callComponent={call_type({ type: item.call })} // Pass the call type component here
                        />
                    );
                }}
            />
        </View>
    );
}

export default Calls;

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
});
