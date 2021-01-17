import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const ActivityIndicators = () => (
  /* to apply multiple styles to same component */
  <View style={[styles.container, styles.horizontal]}> 
   <Text style={styles.text}>Default Loading</Text>
    <ActivityIndicator />
    <Text style={styles.text}>Large Loading</Text>
    <ActivityIndicator size="large" />
    <Text style={styles.text}>Small Loading</Text>
    <ActivityIndicator size="small" color="#0000ff" />
    <Text style={styles.text}>Large with Color Loading</Text>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10,
    backgroundColor:'skyblue'
  },

  horizontal: {
    flexDirection: "column",
   },
  text:{
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems:"center"
  }
});

export default ActivityIndicators;