import React from "react";

import { TouchableOpacity,   StyleSheet, } from "react-native";
import { Feather } from "@expo/vector-icons";

function BackButton({goBack}) {
    return (
        <TouchableOpacity
            style={styles.backButton}
            onPress={goBack}
        >
            <Feather name="chevron-left" size={30} color="white" style={{ marginTop: 25 }} />
        </TouchableOpacity>
    );
}

export default BackButton;

const styles =   StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 2,
    },
})