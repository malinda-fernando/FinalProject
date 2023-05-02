import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import { Button } from "react-native-elements";
import SearchTrainHeader from "../components/SearchTrainHeader";
import { parameters } from "../global/styles";
import DatePicker from "@react-native-community/datetimepicker";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";

const HomeScreen = ({ navigation }) => {
  const [children, setChildren] = useState(0);
  const [Trains, setTrains] = useState(1);
  const [adults, setAdults] = useState(2);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();


  const [departureDate, setDepartureDate] = useState(new Date());

  const [datePickerVisibility, setDatePickerVisibility] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return `${formattedDate.getDate()}/${formattedDate.getMonth() + 1
      }/${formattedDate.getFullYear()}`;
  };
  console.log(route.params);


  const searchPlaces = (place) => {
    if (!route.params || !selectedDate) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );

    }

    if (route.params && selectedDate) {
      navigation.navigate("PlacesScreen", {
        Trains: Trains,
        adults: adults,
        children: children,
        selectedDate: selectedDate,
        place: place
      })
    }

  }


  return (
    <>
      <View style={styles.container}>
        <SearchTrainHeader />

        <View style={{ marginLeft: 20, marginTop: 16 }}>
          <Text style={styles.title2}> Where do you</Text>
          <Text style={styles.title2}> want to go?</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View>
            <Pressable
              onPress={() => navigation.navigate("SearchScreen")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 9,
                borderColor: "#86939e",
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 10,
                marginHorizontal: 20,
                borderRadius: 12,
                marginBottom: 20,
                height: 50,
                paddingLeft: 15,
              }}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder={route?.params?.input ? route.params.input : "Enter your destination"}
              />
            </Pressable>
          </View>
        </View>



        <View style={styles.datePickerContainer}>
          <Text style={styles.label}>Departure Date</Text>
          <Pressable
            style={styles.TextInput3}
            onPress={() => setDatePickerVisibility(true)}
          >
            <Feather
              style={styles.calender}
              name="calendar"
              size={24}
              color="black"
              gap="10"
            />
          </Pressable>
          {datePickerVisibility && (
            <DatePicker
              style={styles.datePicker}
              value={departureDate}
              mode="date"
              placeholder="Select date"
              format="DD/MM/YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              minDate={new Date()}
              onChange={(event, date) => {
                setDepartureDate(date || departureDate);
                setDatePickerVisibility(false);
                setSelectedDate(formatDate(date));
              }}
            />
          )}
          {selectedDate !== "" && (
            <Text style={styles.date}>{selectedDate}</Text>
          )}
        </View>
        <View style={{ marginTop: 30 }}>
          <View>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 9,
                borderColor: "#86939e",
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 10,
                marginHorizontal: 20,
                borderRadius: 12,
                marginBottom: 20,
                marginTop: -15,
                height: 50,
                paddingLeft: 15,
              }}
            >
              <Ionicons name="md-person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                style={{ marginLeft: 10 }}
                placeholder={`${adults}Adults - ${children}Children`}
              />
            </Pressable>
          </View>
        </View>

        <View style={{ marginHorizontal: 70, marginTop: 24 }}>
          <Button
            title="Search your Train"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() =>
              searchPlaces(route?.params.input)}

          />
        </View>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#1e90ff",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select  passengers" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 190 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title2: {
    fontSize: 30,
    color: "#1F41BB",
    fontWeight: "bold",
  },

  TextInput3: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    height: 50,
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  datePicker: {
    width: 190,
    height: 300,
    marginTop: 2,
    paddingLeft: 15,
    marginLeft: 2,
    paddingVertical: 8,
    borderColor: "white",
    borderWidth: 0,
  },
  selectedDate: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginBottom: 10,
    marginHorizontal: 20,
    marginLeft: 25,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "#1F41BB",
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginLeft: 25,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  countContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  boxContainer: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#86939e",
    borderRadius: 1,
    padding: 10,
    marginLeft: 27,
    marginRight: 27,
    marginTop: 6,
  },
  count: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  calender: {
    marginTop: 10,
    gap: 10,
  },
  date: {
    transform: [{ translateX: 20 }, { translateY: -50 }],
    marginLeft: 50,
  },
});
