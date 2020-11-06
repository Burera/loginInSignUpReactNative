import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Logo = () => {
    return (

        <View style={styles.cont}>

            <Image
                source={require("../images/cloud4.png")}

                style={styles.imageStyling}
            />


        </View>

    );
};

const styles = StyleSheet.create({
    cont: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 30,
        // flex: 1

    },
    imageStyling: {


        width: 120,
        height: 120,
        borderRadius: 100,
        alignSelf: "center",



        justifyContent: "space-around",
    },


});

export default Logo;
