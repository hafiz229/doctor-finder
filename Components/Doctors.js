import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Doctor from "./Doctor";

const styles = StyleSheet.create({
  doctorsHeading: {
    color: "white",
    fontSize: 10,
    backgroundColor: "indigo",
    paddingVertical: 5,
    textAlign: "center",
    marginVertical: 5,
    borderRadius: 5,
    fontWeight: "bold",
  },
});

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://still-sands-25307.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <View>
      <Link to="/home">
        <Text style={styles.doctorsHeading}>Home</Text>
      </Link>
      <Text style={styles.doctorsHeading}>Our Doctors</Text>
      <ScrollView>
        {doctors.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
        <Text></Text>
        <Text></Text>
      </ScrollView>
    </View>
  );
}
