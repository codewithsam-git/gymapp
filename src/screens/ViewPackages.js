import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Platform,
  Modal,
} from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import Header from '../components/Header';
import BASE_URL from '../api/CommonApi';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ViewPackages = ({ navigation }) => {
  const members = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      mobileNo: '123-456-7890',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      mobileNo: '987-654-3210',
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      mobileNo: '123-456-7890',
    },
    {
      id: 4,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      mobileNo: '987-654-3210',
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      mobileNo: '123-456-7890',
    },
    {
      id: 6,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      mobileNo: '987-654-3210',
    },
    {
      id: 7,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      mobileNo: '123-456-7890',
    },
    {
      id: 8,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      mobileNo: '987-654-3210',
    },
    {
      id: 8,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      mobileNo: '987-654-3210',
    },
    {
      id: 8,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      mobileNo: '987-654-3210',
    },
    {
      id: 8,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      mobileNo: '987-654-3210',
    },
  ];

  // const [members, setMembers] = useState([]);

  const handleAddMemberClick = () => {
    navigation.navigate('addMember');
  };

  const [menuVisible, setMenuVisible] = useState(false); // To toggle menu visibility

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible); // Toggle the visibility of the menu
  };

  useEffect(() => {
    console.log(`${BASE_URL}` + `/get-member`);
    fetch(`${BASE_URL}/get-member`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setMembers(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function renderMemberCard(member) {
    return (
      <View style={styles.memberCard}>
        <View style={styles.avatarContainer}>
          <Image
            source={icons.profile_icon}
            style={styles.avatar}
            resizeMode="contain"
          />
        </View>

        <View style={styles.memberDetails}>
          <Text style={styles.memberName}>
            {member.firstName} {member.lastName}
          </Text>
          <Text style={styles.memberPlan}>Plan : {member.packageType}</Text>
        </View>

        <TouchableOpacity style={styles.menuButton} onPress={handleMenuToggle}>
          <Icon name="more-vert" size={24} color="white" />
        </TouchableOpacity>

        {/* Modal or dropdown for Edit and Delete options */}
        {menuVisible && (
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menuOption}
              onPress={() => {
                navigation.navigate('EditMember', { memberId: member.id });
                setMenuVisible(false); // Close the menu after selecting
              }}>
              <Text style={styles.menuOptionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuOption}
              onPress={() => {
                handleDelete(member.id);
                setMenuVisible(false); // Close the menu after selecting
              }}>
              <Text style={styles.menuOptionText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}

        {/*<View style={styles.actions}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate('EditMember', { memberId: member.id })
            }>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDelete(member.id)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>*/}
      </View>
    );
  }

  const handleDelete = (id) => {
    // Logic to delete the member (e.g., remove from state or make API call)
    console.log(`Member with ID ${id} deleted.`);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
      <SafeAreaView style={styles.safeArea}>
        <View
          style={{
            marginTop: Platform.OS === 'ios' ? 20 : 60,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: SIZES.padding,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={icons.menu_icon} // You can use any menu icon for the drawer
                  style={styles.menuIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerSection}>
              <Text style={styles.header}>Packages</Text>
            </View>

            <View></View>
          </View>
        </View>

        <ScrollView>
          {members.map((member, index) => (
            <View key={member.id}>
              {renderMemberCard(member)}
              {index < members.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.white,
  },
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
  headerSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  scrollView: {
    padding: 10,
    marginTop: 10,
  },
  memberCard: {
    flexDirection: 'row',
    padding: SIZES.base,
    marginTop: SIZES.font,
    marginHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.base,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
  },
  memberDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  memberName: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  memberPlan: {
    ...FONTS.body4,
    color: COLORS.lightGray,
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  editButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.base / 2,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.base,
  },
  deleteButton: {
    backgroundColor: COLORS.lightRed,
    paddingVertical: SIZES.base / 2,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
  buttonText: {
    ...FONTS.body4,
    color: COLORS.white,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.lightGray,
    margin: SIZES.base,
  },
  menuButton: {
    padding: 5,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 1000,
  },
  menuOption: {
    paddingVertical: 10,
  },
  menuOptionText: {
    fontSize: 14,
    color: '#007bff',
  },
});

export default ViewPackages;
