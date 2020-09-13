import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0, // tirar sombra no Android
          shadowOpacity: 0, //tirar sobra no IOS
          height: 64,
        },
        tabStyle: {
          flexDirection: "row", // mudar padrao do icone com text para row, por padrao eh column
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          //estilizacao do texto da aba
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc", //a cor da aba quando nao tiver selecionada
        activeBackgroundColor: "#ebebf5", //a cor quando tiver selecionada
        inactiveTintColor: "#c1bccc", //a cor da aba quando nao tiver selecionada
        activeTintColor: "#32264d", //a cor do texto quando tiver selecionado
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys", //quando texto que essa screen vai ter dentro da aba
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritor", //quando texto que essa screen vai ter dentro da aba
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
