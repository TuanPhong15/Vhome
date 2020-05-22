import React, { Component } from "react";
import { Image, Text, findNodeHandle, StyleSheet ,View} from "react-native";
import { BlurView } from "@react-native-community/blur";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { viewRef: null };
    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hi, I am some unblurred text</Text>
                <BlurView
                    style={styles.absolute}
                    viewRef={this.state.viewRef}
                    blurType="light"
                    blurAmount={10}
                />
                <Image
                    ref={img => {
                        this.backgroundImage = img;
                    }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick.png')}
                    style={styles.absolute}
                    onLoadEnd={this.imageLoaded.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});