import React from "react";
import main from "./assets/jordan.jpg";
import sub from "./assets/jordan_logo.jpeg";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>조던에 대해 알아보자</Text>
      <Image source={main} style={styles.mainImage} />
      <ScrollView style={styles.buttonContainer} horizontal={true}>
        <TouchableOpacity style={styles.button01}>
          <Text style={styles.buttonText}>개요</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button02}>
          <Text style={styles.buttonText}>특징</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button03}>
          <Text style={styles.buttonText}>생애</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button04}>
          <Text style={styles.buttonText}>수상내역</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={sub}/>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>조던 로고</Text>
            <Text style={styles.cardDesc} numberOfLines={3}>가장 유명한 로고다. 조던이 공중에 뛰어있는 모습을 형상화했다. 정확히 어떤 상황인지는 찾아봐야함...</Text>
            <Text style={styles.cardDate}>2022.03.30</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
  },
  mainImage: {
    width: "90%",
    height: 400,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: 20,
    height: 60,
  },
  button01: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "red",
    borderRadius: 15,
    margin: 7,
  },
  button02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "skyblue",
    borderRadius: 15,
    margin: 7,
  },
  button03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "green",
    borderRadius: 15,
    margin: 7,
  },
  button04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "yellow",
    borderRadius: 15,
    margin: 7,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  card: {
    flexDirection: 'row',
    height: 200,
    margin: 10
  },
  cardImage: {
    flex: 1,
    borderRadius: 10,
    width: "100%",
    height : 100
  },
  cardText: {
    flex: 2,
    marginLeft: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  cardDesc: {
    fontSize: 15
  },
  cardDate: {
    fontSize: 10
  }
});
