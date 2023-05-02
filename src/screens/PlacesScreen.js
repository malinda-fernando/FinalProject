import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../components/Header'
import { BottomModal, ModalContent } from "react-native-modals";
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import PropertyCard from '../components/PropertyCard';
import { ModalFooter, SlideAnimation, ModalTitle } from 'react-native-modals';
const PlacesScreen = () => {
   const route = useRoute();
   const data = [
      {
         id: "0",
         place: "Colombo ",
         placeImage:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/fd/0b/7b/caption.jpg?w=500&h=400&s=1",
         properties: [
            {
               id: "10",
               name: "Negambo Train Station",
               image: "https://live.staticflickr.com/1891/43561949645_67a068c1ef_b.jpg",
               distance: "Negambo to Colombo: 38.9 KM",
               address: "Negambo,Sri Lanka",
               ChildPrice: "LKR 200 ",
               AdultPrice: "LKR 300",
               Trains: [
                  {
                     id: "202",
                     name: "Express train"


                  },
                  {
                     id: "203",
                     name: "Normal Train"
                  },
                  {
                     id: "210",
                     name: "Intercity Train"
                  },
                  {
                     id: "209",
                     name: "Luxury Train"
                  },

               ],
            },

            {
               id: "11",
               name: "Ella Train Station",
               image: "https://fastly.4sqi.net/img/general/width960/22329506_dndPVK-mUgZhJUdKnKb8h3eXYA7IjDvQvDqzmGX_On8.jpg",
               distance: "Ella to Colombo: 306.5 KM",
               address: "Ella,Sri Lanka",
               ChildPrice: "LKR 530 ",
               AdultPrice: "LKR 830",
               stations: [
                  {
                     id: "105",
                     name: "Express Train",
                  },
                  {
                     id: "106",
                     name: "Local Train",
                  },
                  {
                     id: "107",
                     name: "Intercity Train",
                  },
                  {
                     id: "108",
                     name: "Luxury Train",
                  }

               ],

            },
            {
               id: "12",
               name: "Galle Train Station",
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bVONcxD-V5TJ7ekzpegtpFs2YbuGxlwtgA&usqp=CAU",
               distance: "Galle to Colombo: 125.3 KM",
               address: "Galle,Sri Lanka",
               ChildPrice: "LKR 400 ",
               AdultPrice: "LKR 600",
               stations: [
                  {
                     id: "101",
                     name: "Express Train",
                  },
                  {
                     id: "102",
                     name: "Local Train",
                  },
                  {
                     id: "103",
                     name: "Intercity Train",
                  },
                  {
                     id: "109",
                     name: "Luxury Train",
                  }

               ],

            }

         ],


      },

      {
         id: "1",
         place: "Negambo",
         placeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHbZWxR7JduU8Lr0w_OI94z_H2COIQ5HvCfbn0n3a_7B6dnS1D9Uo8fbg4HbrWSBrwiE&usqp=CAU",
         properties: [
            {
               id: "13",
               name: "Colombo Train Station",
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1z2V1zWbzTptOiCLehWZJ4riAeUlZuMBRXEhhpELgEdlA6LefHSQwqFQStDkXbI7Uhfo&usqp=CAU",
               distance: "Colombo to Negambo: 37.4 KM",
               address: "Colombo,Sri Lanka",
               ChildPrice: "LKR 260 ",
               AdultPrice: "LKR 340",

               stations: [
                  {
                     id: "25",
                     name: "Express Train",
                  },
                  {
                     id: "26",
                     name: "Local Train",
                  },
                  {
                     id: "27",
                     name: "Intercity Train",
                  },
                  {
                     id: "28",
                     name: "Luxury Train",
                  }

               ],

            },
            {
               id: "14",
               name: "Waikkala Train Station",
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreN0L_goOHZHyvcjUSvbr3Nzcxg6TqoRslQ&usqp=CAU",
               distance: "Waikkala to Negambo:7.8 KM",
               address: "Waikkala,Sri Lanka",
               ChildPrice: "LKR 40",
               AdultPrice: "LKR 60",
               stations: [
                  {
                     id: "45",
                     name: "Express Train",
                  },
                  {
                     id: "46",
                     name: "Local Train",
                  },
                  {
                     id: "47",
                     name: "Intercity Train",
                  },
                  {
                     id: "48",
                     name: "Luxury Train",
                  }

               ],

            },
            {
               id: "15",
               name: "Chilaw Train Station",
               image: "https://slrailwayforum.com/content/images/2021/11/Chilaw-Railway-Station.jpg",
               distance: "Chilaw to Negambo:49.7 KM",
               address: "Chilaw,Sri Lanka",
               ChildPrice: "LKR 400 ",
               AdultPrice: "LKR 600",
               stations: [
                  {
                     id: "29",
                     name: "Express Train",
                  },
                  {
                     id: "30",
                     name: "Local Train",
                  },
                  {
                     id: "31",
                     name: "Intercity Train",
                  },
                  {
                     id: "32",
                     name: "Luxury Train",
                  }

               ],

            }
         ],


      },

      {
         id: "2",
         place: "Ella",
         placeImage: "https://www.charlotteplansatrip.com/wp-content/uploads/2020/03/Things-to-do-in-Ella.jpg",
         properties: [
            {
               id: "35",
               name: "Colombo Train Station",
               image: "https://slrailwayforum.com/content/images/2021/11/Chilaw-Railway-Station.jpg",
               distance: "Colombo to Ella:49.7 KM",
               address: "Colombo,Sri Lanka",
               ChildPrice: "LKR 400 ",
               AdultPrice: "LKR 600",
               stations: [
                  {
                     id: "29",
                     name: "Express Train",
                  },
                  {
                     id: "30",
                     name: "Local Train",
                  },
                  {
                     id: "31",
                     name: "Intercity Train",
                  },
                  {
                     id: "32",
                     name: "Luxury Train",
                  }

               ],

            },
            {
               id: "36",
               name: "Badulla Train Station",
               image: "https://lh5.googleusercontent.com/p/AF1QipNsNFEUnvZr03m1Aelx9SSOKr9f369aVQIoJipd=w408-h306-k-no",
               distance: "Badulla to Ella:12 KM",
               address: "Badulla,Sri Lanka",
               ChildPrice: "LKR 285 ",
               AdultPrice: "LKR 500",
               stations: [
                  {
                     id: "29",
                     name: "Express Train",
                  },
                  {
                     id: "30",
                     name: "Local Train",
                  },
                  {
                     id: "31",
                     name: "Intercity Train",
                  },
                  {
                     id: "32",
                     name: "Luxury Train",
                  }

               ],

            },
            {
               id: "36",
               name: "Nanuoya Train Station",
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoAX_c46e0lU8tuPepI8Kyq92cJVOQ2tKVQ&usqp=CAU",
               distance: "Nanuoya to Ella:12 KM",
               address: "Nanuoya,Sri Lanka",
               ChildPrice: "LKR 385 ",
               AdultPrice: "LKR 600",
               stations: [
                  {
                     id: "33",
                     name: "Express Train",
                  },
                  {
                     id: "34",
                     name: "Local Train",
                  },
                  {
                     id: "35",
                     name: "Intercity Train",
                  },
                  {
                     id: "37",
                     name: "Luxury Train",
                  }

               ],

            }
         ],


      },

   ]
   console.log(route.params)
   const navigation = useNavigation();
   const [modalVisible, setModalVisible] = useState(false)
   const [selectedFilter, setSelectedFilter] = useState([]);


   const filters = [
      {
         id: "0",
         filter: "cost:Low to High",
      },
      {
         id: "1",
         filter: "cost:High to Low",
      },
   ];
   const searchPlaces = data?.filter((item) => item.place === route.params.place);
   const [sortedData, setSortedData] = useState(data);
   console.log(searchPlaces)

   const compare = (a, b) => {
      if (a.AdultPrice > b.AdultPrice) {
         return -1;
      }
      if (a.AdultPrice < b.AdultPrice) {
         return 1;
      }
      return 0;
   }

   const comparision = (a, b) => {
      if (a.AdultPrice < b.AdultPrice) {
         return -1;
      }
      if (a.AdultPrice > b.AdultPrice) {
         return 1;
      }
      return 0;
   }

   const applyFilter = (filter) => {
      setModalVisible(false)
      switch (filter) {
         case "cost:High to Low":
            searchPlaces.map((val) => val.properties.sort(compare));
            setSortedData(searchPlaces);
            break;
         case "cost:Low to High":
            searchPlaces.map((val) => val.properties.sort(comparision));
            setSortedData(searchPlaces);
            break;
      }
   }
   return (
      <View style={styles.container}>
         <Header title="Arrival Places" type="arrow-left" navigation={navigation} />

         <Pressable style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            padding: 12,
            backgroundColor: "white"
         }}>
            <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flexDirection: "row", alignItems: "center" }}>
               <Octicons name="arrow-switch" size={22} color="gray" />
               <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
                  Sort</Text>
            </Pressable>
            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
               <Ionicons name="filter" size={22} color="gray" />
               <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
                  Filter</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Map", {
               searchResults: searchPlaces,
            })} style={{ flexDirection: "row", alignItems: "center" }}>
               <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
               <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
                  Map</Text>
            </Pressable>
         </Pressable>

         <ScrollView styles={{ backgroundColor: "#F5F5F5" }}>
            {sortedData
               ?.filter((item) => item.place === route.params.place)
               .map((item) => item.properties.map((property, index) => (
                  <PropertyCard
                     key={index}
                     Trains={route.params.Trains}
                     children={route.params.children}
                     adults={route.params.adults}
                     selectedDate={route.params.selectedDate}
                     property={property}
                     availableTrains={property.Trains}
                  />))
               )}
         </ScrollView>

         <BottomModal style={{ height: 800 }} onBackdropPress={() => setModalVisible(!modalVisible)}
            swipeDirection={["up", "down"]} swipeThreshold={700} footer={<ModalFooter>
               <Pressable onPress={() => applyFilter(selectedFilter)} style={{ paddingRight: 10, marginLeft: "auto", marginRight: "auto", marginVertical: 15 }}>
                  <Text>Apply</Text>
               </Pressable>
            </ModalFooter>}
            modalTitle={<ModalTitle title="Sort and Filter" />}
            modalAnimation={
               new SlideAnimation({
                  slideFrom: "bottom",
               })
            }
            onHardwareBackPress={() => setModalVisible(!modalVisible)}
            visible={modalVisible}
            onTouchOutside={() => setModalVisible(!modalVisible)}
         >
            <ModalContent style={{ width: "100%", height: 280 }}>
               <View style={{ flexDirection: "row" }}>
                  <View style={{ marginVertical: 10, flex: 2, height: 280, borderRightWidth: 1, borderColor: "#E0E0E0", marginRight: 10 }}>
                     <Text style={{ textAlign: "center" }}>Sort</Text>
                  </View>
                  <View style={{ flex: 3 }}>
                     {filters.map((item, index) => (
                        <Pressable onPress={() => setSelectedFilter(item.filter)} style={{
                           flexDirection: "row",
                           alignItems: "center",
                           marginVertical: 10,
                        }}
                           key={index} >
                           {selectedFilter.includes(item.filter) ? (
                              <FontAwesome name="circle" size={18} color="green" />
                           ) : (
                              <Entypo name="circle" size={18} color="black" />
                           )}

                           <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 6 }}>{item.filter}</Text>
                        </Pressable>

                     ))}

                  </View>
               </View>
            </ModalContent>
         </BottomModal>
      </View >
   )
}

export default PlacesScreen

const styles = StyleSheet.create({
   container: {
      flex: 1
   }
})
