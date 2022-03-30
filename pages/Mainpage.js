import React from "react";
import main from "../assets/jordan.jpg";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import data from "../data.json";

export default function MainPage() {
  console.disableYellowBox = true;

  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림";

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Text style={styles.weather}>
        오늘의 날씨: {todayWeather + "°C " + todayCondition}
      </Text>
      <Image source={main} style={styles.mainImage} />
      <ScrollView style={styles.buttonContainer} horizontal={true}>
        <TouchableOpacity style={styles.button01}>
          <Text style={styles.buttonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button02}>
          <Text style={styles.buttonText}>재태크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button03}>
          <Text style={styles.buttonText}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button04}>
          <Text style={styles.buttonText}>기타</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {tip.map((content, i) => {
          return (
            <View style={styles.card} key={i}>
              <Image style={styles.cardImage} source={{ uri: content.image }} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {content.title}
                </Text>
                <Text style={styles.cardDesc} numberOfLines={3}>
                  {content.desc}
                </Text>
                <Text style={styles.cardDate}>{content.date}</Text>
              </View>
            </View>
          );
        })}
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
  weather: {
    alignSelf: "flex-end",
    paddingRight: 20,
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
    flexDirection: "row",
    height: 100,
    margin: 10,
  },
  cardImage: {
    flex: 1,
    borderRadius: 10,
    width: "100%",
    height: 100,
  },
  cardText: {
    flex: 2,
    marginLeft: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
  },
});
