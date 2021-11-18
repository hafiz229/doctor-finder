import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  doctorName: {
    color: "white",
    fontSize: 20,
    backgroundColor: "black",
    paddingVertical: 5,
    textAlign: "center",
    marginVertical: 5,
    width: 200,
    borderRadius: 5,
    fontWeight: "bold",
  },
  doctorEmail: {
    color: "white",
    fontSize: 10,
    backgroundColor: "black",
    paddingVertical: 5,
    textAlign: "center",
    width: 200,
    borderRadius: 5,
    fontWeight: "bold",
  },
});

export default function Doctor({ doctor }) {
  const { name, email, image } = doctor;
  return (
    <View>
      <Image
        source={{
          uri: `data:image/;base64,${image}`,
        }}
        style={{ width: 200, height: 200, borderRadius: 10 }}
      />
      <Text style={styles.doctorName}>{name}</Text>
      <Text style={styles.doctorEmail}>{email}</Text>
      <Text></Text>
      {/* src={`data:image/jpeg;base64,${data}`} */}
    </View>
  );
}
