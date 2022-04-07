import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import LikeCard from "../components/LikeCard";
import { firebase_db } from "../firebaseConfig";
import Constants, { UserInterfaceIdiom } from "expo-constants";
import Loading from "../components/Loading";

export default function LikePage({ navigation, route }) {
  let user_id = Constants.installationId;

  const [tip, setTip] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: "꿀팁 찜",
    });
    firebase_db
      .ref(`/like/${user_id}`)
      .once("value")
      .then((snapshot) => {
        console.log("파이어베이스에서 찜하기 데이터 가져왔습니다!!");
        let tip = snapshot.val();
        console.log(tip);
        if (tip.length) {
          setTip(tip);
          setReady(false);
        }
      });
  }, []);

  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      {tip.map((content, i) => {
        return <LikeCard content={content} key={i} navigation={navigation} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
