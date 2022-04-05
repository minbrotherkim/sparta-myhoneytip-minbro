import React, {useEffect} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

export default function AboutPage({navigation, route}) {
  console.disableYellowBox = true;

  useEffect(() => {
    
    navigation.setOptions({
      title: '소개 페이지',
      headerStyle: {
        backgroundColor: "#1F266A",
        shadowColor: "#1F266A",
      },
      headerTintColor: "#fff",
    });
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        HI! 스파르타코딩 앱개발반에 오신 것을 환영합니다!
      </Text>
      <View style={styles.introContainer}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4",
          }}
          style={styles.image}
        />
        <Text style={styles.introTitleText}>
          많은 내용을 간결하게 담아내려 노력했습니다!
        </Text>
        <Text style={styles.introdescText}>
          꼭 완주하셔서 꼭 여러분의 것으로 만들어가시길 바랍니다!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL("https://www.instagram.com/minbrotherkim/");
          }}
        >
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1F266A",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginTop: 50,
  },
  introContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 500,
    marginTop: 40,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  introTitleText: {
    width: 250,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  introdescText: {
    width: 250,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",

    marginTop: 20,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
});
