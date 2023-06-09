import React from "react";
import { View,Text,SectionList,Image} from "react-native";
import styles from "../../styles";

const Contact = () => {

  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", text: "Ahmed", img: require("../../assets/avatar1.png") },
        { id: "1", text: "Amire", img: require("../../assets/avatar2.png") },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        { id: "2", text: "Bahaa", img: require("../../assets/avatar1.png") },
        { id: "3", text: "Basma", img: require("../../assets/avatar2.png") },
      ],
    },
    {
      id: "2",
      title: "C",
      data: [
        { id: "4", text: "Camel", img: require("../../assets/avatar1.png") },
        { id: "5", text: "Carla", img: require("../../assets/avatar2.png") },
      ],
    },
    {
      id: "3",
      title: "D",
      data: [
        { id: "6", text: "Dina", img: require("../../assets/avatar2.png") },
        { id: "7", text: "Dalia", img: require("../../assets/avatar2.png") },
      ],
    },
    {
        id: "4",
        title: "M",
        data: [
          { id: "9", text: "Mohamed", img: require("../../assets/avatar1.png") },
          { id: "10", text: "Mazen", img: require("../../assets/avatar1.png") },
        ],
      },
  ];

  return (
    <View>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item: { text, img } }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingVertical: 6,
              paddingHorizontal: 6,
            }}
          >
            <Image
              source={img}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
            <Text style={[styles.itemStyle, { flexGrow: 2 }]}>{text}</Text>
          </View>
        )}
        keyExtractor={(props) => props.id}
      ></SectionList>
    </View>
  );
};

export default Contact;
