import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
export default class Notification extends React.Component {
    render() {
        return (
            <View style={{  flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    Notification
        </Text>
            </View>
        );
    }
}