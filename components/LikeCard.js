import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { firebase_db } from "../firebaseConfig";
import Constants  from "expo-constants";

//LikePage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikeCard({ content, navigation, reload }) {
  const user_id = Constants.installationId;
  
  const detail = () => {
    navigation.navigate("DetailPage", { idx: content.idx });
  };

  const remove = () => {
    firebase_db
      .ref(`/like/${user_id}/${content.idx}`)
      .remove()
      .then(() => {
        Alert.alert("해당 찜목록이 삭제되었습니다!");
        // navigation.navigate("LikePage");
        reload()
      })
      .catch((error) => {
        console.log("삭제를 실패했습니다ㅠㅠ : " + error.message);
      });
  };

  return (
    //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
    <View style={styles.cardContainer}>
      <View style={styles.card}>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            detail();
          }}
        >
          <Text style={styles.buttonText}>자세히보기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            remove();
          }}
        >
          <Text style={styles.buttonText}>찜 해제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    margin: 10,
    paddingBottom: 10,
  },
  card: {
    flex: 1,
    flexDirection: "row",
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    width: 90,
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "deeppink",
    borderRadius: 7,
  },
  buttonText: {
    color: "deeppink",
    textAlign: "center",
  },
});
