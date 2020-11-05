import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Logo = () => {
    return (
        <View>
            <View style={styles.cont}>

                <Image
                    source={require("../images/cloud4.png")}

                    style={styles.imageStyling}
                />


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cont: {
        flexDirection: "row",
        justifyContent: "center"

    },
    imageStyling: {
        width: 120,
        height: 120,
        borderRadius: 100,
        alignSelf: "center",
        marginBottom: 30,


        justifyContent: "space-around",
    },


});

export default Logo;
