import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

export default function ExpoCamera() {
    const [hasPermission, setHasPermission] = useState<boolean>();
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    camera: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '80%',
        height: '70%',
        alignSelf: 'center',
    },
    buttonContainer: {
        // flex: 0.1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    button: {
        flex: 0.2,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
