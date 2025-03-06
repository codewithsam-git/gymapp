import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

function Header() {
  const profile = {
    name: 'Username',
    point: 200,
  };

  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
      }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={icons.menu_icon} // You can use any menu icon for the drawer
            style={styles.menuIcon}
          />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>Home</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ marginRight: SIZES.padding }}>
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>Hello,</Text>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            {profile.name}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          height: 40,
          paddingLeft: 3,
          paddingRight: SIZES.radius,
          borderRadius: 20,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25
            }}>
            <Image
              source={icons.plus_icon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>

          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.white,
              ...FONTS.body3,
            }}>
            {profile.point} point
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    alignItems: 'center',
    height: 60,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.white,
  },
  headerText: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Header;
