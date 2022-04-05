import React, { useState, useEffect } from "react";
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
import Card from "../components/Card";
import Loading from "../components/Loading";
import { StatusBar } from "expo-status-bar";

export default function MainPage({ navigation, route }) {
  console.disableYellowBox = true;

  const [state, setState] = useState([]);
  const [cateState, setCateState] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        title: "나만의 꿀팁",
      });
      let tip = data.tip;
      setState(tip);
      setCateState(tip);
      setReady(false);
    }, 1000);
  }, []);

  const category = (cate) => {
    if (cate == "전체") {
      setCateState(state);
    } else {
      setCateState(
        state.filter((d) => {
          return d.category == cate;
        })
      );
    }
  };

  let todayWeather = 10 + 17;
  let todayCondition = "흐림";

  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.weather}>
        오늘의 날씨: {todayWeather + "°C " + todayCondition}
      </Text>
      <TouchableOpacity
        style={styles.introduceButton}
        onPress={() => {
          navigation.navigate("AboutPage");
        }}
      >
        <Text style={styles.introduceText}>소개 페이지</Text>
      </TouchableOpacity>
      <Image source={main} style={styles.mainImage} />
      <ScrollView style={styles.buttonContainer} horizontal={true}>
        <TouchableOpacity
          style={styles.button01}
          onPress={() => {
            category("전체");
          }}
        >
          <Text style={styles.buttonText}>전체</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button02}
          onPress={() => {
            category("생활");
          }}
        >
          <Text style={styles.buttonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button03}
          onPress={() => {
            category("재테크");
          }}
        >
          <Text style={styles.buttonText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button04}
          onPress={() => {
            category("반려견");
          }}
        >
          <Text style={styles.buttonText}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button05}
          onPress={() => {
            navigation.navigate("LikePage");
          }}
        >
          <Text style={styles.buttonText}>찜하기</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {cateState.map((content, i) => {
          return <Card content={content} key={i} navigation={navigation} />;
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
  introduceButton: {
    alignSelf: "flex-end",
    borderRadius: 10,
    backgroundColor: "pink",
    marginRight: 20,
    marginTop: 10,
    padding: 5,
  },
  introduceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
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
  button05: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "grey",
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
