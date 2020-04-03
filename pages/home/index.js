

import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    goDetail() {
        this.props.navigation.push('HomeDetail', { owner: 'test' });
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: 'lightblue' }}>
                <Text>
                    首页
               </Text>
                <Button
                    onPress={() => this.goDetail()}
                    title='详情页' color="#841584"
                    accessibilityLabel="Learn more about this purple button" />
            </View>
        )
    }
};
