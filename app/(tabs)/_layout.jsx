import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {Colors} from "../../constants/Colors"

export default function _layout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY
    }}>
        <Tabs.Screen name={'home'}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} />
          }}
        ></Tabs.Screen>
        <Tabs.Screen name={'explore'}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color}) => <AntDesign name="search1" size={24} color={color} />
          }}
        ></Tabs.Screen>
        <Tabs.Screen name={'profile'}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color} />
          }}
        ></Tabs.Screen>
    </Tabs>
  )
}