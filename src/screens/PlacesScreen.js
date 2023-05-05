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
               oldPrice:  200 ,
               newPrice:  300,
               photos: [
                  {
                     id: "100",
                     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGfcGVqBOfIHvSIwp1JexyBBX0yti1QVwIA&usqp=CAU",
                  },
                  {
                     id: "101",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjU0T0cyIIjE_9ZhgES6DpSbB76XOEC45xA&usqp=CAU",
                  },
                  {
                     id: "102",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80gTvougf9eR4KtV_dwSf1uqgONMWTijl-ItI8PWs7NbS8WuhkI7OY0Qd-mopq4E_FwQ&usqp=CAU",
                  },
                  {
                     id: "103",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFf7uaUjK12_x_lxOo4NGmGLTtHY8RNXBbcw&usqp=CAU",
                  },
                  {
                     id: "104",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YbAKRl9nM4su-j4ZPCCGamcaTLJRxgRgow&usqp=CAU",
                  },
                  {
                     id: "105",
                     image:
                        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845662.jpg?k=94bdc326cbec92e658a262a7d81387e65ede9d250489b1a3cc6d22d6b9c935ff&o=&hp=1",
                  },
                  {
                     id: "106",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZTR8LwWdfiVojXO_RKaIiMxSwECMPGepkQ&usqp=CAU",
                  },
                  {
                     id: "107",
                     image:
                        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845623.jpg?k=dc33256ff9ff9eda46683c776c1cf9af04910364ec8d1d9523b8cf80d18cca65&o=&hp=1",
                  },
                  {
                     id: "108",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNwnsbr5CtKmMmQQ_D4RZOn8VzoQgJ2K2ew&usqp=CAU",
                  },
                  {
                     id: "109",
                     image:
                        "2",
                  },
               ],
               Trains: [
                  {
                     id: "202",
                     name: "Express train",
                     departureTime:"05.45 a.m",
                     arrivalTime:"06.45 a.m"



                  },
                  {
                     id: "203",
                     name: "Normal Train",
                     departureTime:"06.30 a.m",
                     arrivalTime:"08.05 p.m"
                  },
                  {
                     id: "210",
                     name: "Intercity Train",
                     departureTime:"08.50a.m",
                     arrivalTime:"10.15 p.m"
                  },
                 

               ],
            },

            {
               id: "11",
               name: "Ella Train Station",
               image: "https://fastly.4sqi.net/img/general/width960/22329506_dndPVK-mUgZhJUdKnKb8h3eXYA7IjDvQvDqzmGX_On8.jpg",
               distance: "Ella to Colombo: 306.5 KM",
               address: "Ella,Sri Lanka",
               oldPrice: 530, 
               newPrice:  600,
               photos: [{
                  id: "130",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvQmgove_u14Q1XzJoDwvRkhWRun5JOfRQg&usqp=CAU",

               },
               {
                  id: "120",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPq9IpM0lSURR4ACrO-hIhAi_vUrttVhYAA&usqp=CAU",
               },
               {
                  id: "121",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwojM_BETO5AsVrdFevTPrXCCY90c0wu-GQ&usqp=CAU"
               },
               {
                  id: "122",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5UdHOUKKDzvPs6suYcCyg4t2ssPv4z5gG6zGBaYyiPwlQryoWtsRMvY5yit-IfQ5oIM&usqp=CAU",
               },
               {
                  id: "123",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMw6oNbNBsMHKlJuDJmnp8eFVAFWQdCLS9MQ&usqp=CAU",
               },
               {
                  id: "124",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugwcxctyIReFqw1YNp_XVfhGac7vhNBtQPOeTPJpVDzDn0FYPcKthD3nIJYTLYF6Nlwc&usqp=CAU",
               },
               {
                  id: "125",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01dzhMbAyr0fz-zTYfWwOfTvZzrz2J64gOFY-e6kPIav_c5VIK2X4HfEb8ZvAdl6Fzdw&usqp=CAU",
               },
               {
                  id: "126",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvhyxc2auLwQ7SWVk7HKgVb8WhSfxhXq9XOT3ZrKJyKoXfAas04NN7fEw7_Xz8A382Xg&usqp=CAU",

               },
               {
                  id: "127",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXuOjBsGP_GECehuJjPDmpmSms_nEvurbvA&usqp=CAU",



               },
               {
                  id: "128",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9TxHbVz1UnMHhe7uMZnrX9Mxm865CIyAMQ&usqp=CAU",
               },
               ],
               Trains: [
                  {
                     id: "105",
                     name: "Express Train",
                     departureTime:"8.00 a.m",
                     arrivalTime:"18.00 p.m"
                  },
                  {
                     id: "106",
                     name: "Local Train",
                     departureTime:"9.40 a.m",
                     arrivalTime:"21.15 p.m"
                  },
                  {
                     id: "107",
                     name: "Intercity Train",
                     departureTime:"11.40 a.m",
                     arrivalTime:"23.15 p.m"
                  },
                  {
                     id: "108",
                     name: "Luxury Train",
                     departureTime:"5.40 a.m",
                     arrivalTime:"14.15 p.m"
                  }

               ],

            },
            {
               id: "12",
               name: "Galle Train Station",
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bVONcxD-V5TJ7ekzpegtpFs2YbuGxlwtgA&usqp=CAU",
               distance: "Galle to Colombo: 125.3 KM",
               address: "Galle,Sri Lanka",
               oldPrice:  550 ,
               newPrice:  900,
               photos: [{
                  id: "110",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQDJhfnIhi1cJbzF1yXTMtP4RnbAIrCOJdw&usqp=CAU",
               },
               {
                  id: "111",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bNDa1Bs7FtI01jb8ig9JDE9Ww_jA8gUAzw&usqp=CAU",
               },
               {
                  id: "112",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_w46gh4Qrpb1iQI_y9NCUkaxlGVrgMSwXmA&usqp=CAU"
               },
               {
                  id: "113",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0gCwn1U5uZsoMJGrps5GFtn1J4Eby94sCQ&usqp=CAU",
               },
               {
                  id: "114",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqQPapAhNjtFoPlyhTYM6Cfx7PiTLw0fvbw&usqp=CAU",
               },
               {
                  id: "115",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_Cus5kTHxLM2VJFbXvZwVPByhuTY1ed8tA&usqp=CAU",
               },
               {
                  id: "116",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVR5o_BKQLsp8mMbylNjQyq2OfktL2Jf5C3A&usqp=CAU",
               },
               {
                  id: "117",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRES-3hMPM2DZ2QjG75uV57LHWqYjw00lyAuw&usqp=CAU",

               },
               {
                  id: "118",
                  image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpCeZKN7Fy5RuNjoRzEKaB5kTnVIxCSnX1g&usqp=CAU",
               },
               {
                  id: "119",
                  image: "https://www.elysiumsrilanka.com/images/satin-doll-home.jpg",
               },
               ],

               Trains: [
                  {
                     id: "101",
                     name: "Express Train",
                     departureTime:"9.30 a.m",
                     arrivalTime:"12.55 a.m"
                  },
                  {
                     id: "102",
                     name: "Local Train",
                     departureTime:"6.30 a.m",
                     arrivalTime:"10.15 p.m"
                  },
                  {
                     id: "103",
                     name: "Intercity Train",
                     departureTime:"03.40 a.m",
                     arrivalTime:"05.21 a.m"
                  }
                 
               ],

            }

         ],


      },

      {
         id: "1",
         place: "Negombo",
         placeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHbZWxR7JduU8Lr0w_OI94z_H2COIQ5HvCfbn0n3a_7B6dnS1D9Uo8fbg4HbrWSBrwiE&usqp=CAU",
         properties: [
            {
               id: "13",
               name: "Colombo Train Station",
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1z2V1zWbzTptOiCLehWZJ4riAeUlZuMBRXEhhpELgEdlA6LefHSQwqFQStDkXbI7Uhfo&usqp=CAU",
               distance: "Colombo to Negambo: 37.4 KM",
               address: "Colombo,Sri Lanka",
               oldPrice:  260 ,
               newPrice:  340,
               photos: [
                  {
                     id: "140",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHohw9KNXXZIJDXRPwQ5vtjGoh-61-VuZxA&usqp=CAU",
                  },
                  {
                     id: "141",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGl_uteXtO6_HouCnFCG_HO8XrRm9OLGdEA&usqp=CAU",
                  },
                  {
                     id: "142",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTnLs6w9Hosc1nNAHzfXzz3VVysKGY7Jemg&usqp=CAU",
                  },
                  {
                     id: "143",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03HfHATr3T92QVYH7gG11dnhjArFUqz5S0g&usqp=CAU",
                  },
                  {
                     id: "144",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-Ihmlc4nsUmsCzIT5MQdjDHMTk1IFI0e_Q3-ex3VtLVDcNIlwoOlcZdAzdLfRRlD8jQ&usqp=CAU",
                  },
                  {
                     id: "145",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShj4jT7n26OhCyOX7-Kfbx1DvX19ZDQnR1HA&usqp=CAU",
                  },
                  {
                     id: "146",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9Yqz6Rkgwii9xEebOqtKmwwgVS3Bj1BwHQ&usqp=CAU",
                  },
                  {
                     id: "147",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXK0daZbKzBHA4jkKnpIpcF2aRN75euJaYlw&usqp=CAU",
                  },
                  {
                     id: "148",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9_lig0V8naDCy59gShVeEvLnC7EeW04ueQ&usqp=CAU",
                  },
                  {
                     id: "149",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01oo0arU4-MyQqc7RJnl6u_8j1FTjNmTLUw&usqp=CAU",
                  },
               ],

               Trains: [
                  {
                     id: "25",
                     name: "Express Train",
                     departureTime:"9.30 a.m",
                     arrivalTime:"12.55 p.m"
                  },
                  {
                     id: "26",
                     name: "Local Train",
                     departureTime:"6.30 a.m",
                     arrivalTime:"10.15 a.m"
                  },
                  {
                     id: "27",
                     name: "Intercity Train",
                     departureTime:"03.40 a.m",
                     arrivalTime:"05.21 a.m"
                  }
                  

               ],

            },
            {
               id: "14",
               name: "Waikkala Train Station",
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreN0L_goOHZHyvcjUSvbr3Nzcxg6TqoRslQ&usqp=CAU",
               distance: "Waikkala to Negambo:7.8 KM",
               address: "Waikkala,Sri Lanka",
               oldPrice:  40,
               newPrice:  100,
               photos: [
                  {
                     id: "160",
                     image:
                        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244256022.jpg?k=039b6ea2059809603206e35aa336d9ef97ca8b793327277580ce19001ba3a492&o=&hp=1",
                  },
                  {
                     id: "161",
                     image:
                        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258918.jpg?k=0e9b069b0719ba5cdbfba03fa7420a8c6096dad9c699c2a1baca3d1f7c80d2f1&o=&hp=1",
                  },
                  {
                     id: "162",
                     image: "https://pbs.twimg.com/media/ExpemGeWYAM9Lh5.jpg:large",

                  },
                  {
                     id: "163",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVaDqhB3XqzkYbbykLDYAc6LCpxmRWfMFmw&usqp=CAU",
                  },
                  {
                     id: "164",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT686_I841m_TiRB-7z2qoEy2kfKpvLtLUc-w&usqp=CAU",
                  },
                  {
                     id: "165",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPcX-EtdUqxhGdkGuYwwDnvvTNsAbyR941g&usqp=CAU",
                  },
                  {
                     id: "166",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUal9rmx_hhH-mjqhiepgi7nC2LhF6cxfq-g&usqp=CAU",
                  },
                  {
                     id: "167",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8xrmadyYLa_FPF2qd7xMpKnZXxfKItjXWg&usqp=CAU",
                  },
                  {
                     id: "168",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-coZuB6E9hqFoSwmmEQFEj507yJtgjVaDUD-Nu44RrOJGPXtNdkmwZym4wBwi_vyGQ8&usqp=CAU",
                  },
                  {
                     id: "169",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlaBLexkdkx-thPPe-yUDoUMRSBVanL1iNOA&usqp=CAU",
                  },
               ],
               Trains: [
                  {
                     id: "45",
                     name: "Express Train",
                     departureTime:"04.52 a.m",
                     arrivalTime:"05.05 a.m"
                  },
                  {
                     id: "46",
                     name: "Local Train",
                     departureTime:"05.22 a.m",
                     arrivalTime:"05.44 a.m"
                  },
                  {
                     id: "47",
                     name: "Intercity Train",
                     departureTime:"06.54 a.m",
                     arrivalTime:"07.10 a.m"
                  }
                  

               ],

            },
            {
               id: "15",
               name: "Chilaw Train Station",
               image: "https://slrailwayforum.com/content/images/2021/11/Chilaw-Railway-Station.jpg",
               distance: "Chilaw to Negambo:49.7 KM",
               address: "Chilaw,Sri Lanka",
               oldPrice:  400 ,
               newPrice:  700,
               photos: [
                  {
                     id: "170",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSya0xrU5pplB7nDp2I6ykQywHITClB5G1oXw&usqp=CAU",
                  },
                  {
                     id: "172",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM71zCd9-PGNKZ4oiNZwAUTtmRWn7FTmg6xg&usqp=CAU",
                  },
                  {
                     id: "173",
                     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TBS-Lup1SpDYEVcJR_0KmZK7p7F0SaZSuw&usqp=CAU",

                  },
                  {
                     id: "174",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVpzQY0GM0zkl8hgLsv5FEdol_GWawy04eg&usqp=CAU",
                  },
                  {
                     id: "175",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxL0ywTJQe6t1C_LAB0dlfrvTzoLXpuc4A9Q&usqp=CAU",
                  },
                  {
                     id: "176",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIggjb2A4ZhscDJRDuo9rbngn2CpNZFa_lr3VyAUYRQCPtTt1osa2jznbYLLdoYgvjhY&usqp=CAU",
                  },
                  {
                     id: "177",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4kqovG-aM5smDN5rw8dpdSPcpXDptu9rPxbBshAfi6NbaNRBo6XPfTOpnI_MQKYZlZc&usqp=CAU",
                  },
                  {
                     id: "178",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmIgykuZBJxTjQxAoh736BQ-fbD1s-S1h6kw&usqp=CAU",
                  },
                  {
                     id: "179",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3thk6s4RtdtfuVshRsakabih6-ejuncMjnw&usqp=CAU",
                  },
                  {
                     id: "180",
                     image:
                        "https://www.srilankanexpeditions.com/images/destinations-in-sri-lanka/best-things-to-do-in-chilaw/slider1.jpg",
                  },
               ],
               Trains: [
                  {
                     id: "29",
                     name: "Express Train",
                     departureTime:"08.40 a.m",
                     arrivalTime:"09.50 a.m"
                  },
                  {
                     id: "30",
                     name: "Local Train",
                     departureTime:"10.40 a.m",
                     arrivalTime:"12.00 a.m"
                  },
                  {
                     id: "31",
                     name: "Intercity Train",
                     departureTime:"11.00 a.m",
                     arrivalTime:"12.20 p.m"
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
               oldPrice:  1400 ,
               newPrice:  1500,
               photos: [
                  {
                     id: "190",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHohw9KNXXZIJDXRPwQ5vtjGoh-61-VuZxA&usqp=CAU",
                  },
                  {
                     id: "191",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGl_uteXtO6_HouCnFCG_HO8XrRm9OLGdEA&usqp=CAU",
                  },
                  {
                     id: "192",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTnLs6w9Hosc1nNAHzfXzz3VVysKGY7Jemg&usqp=CAU",
                  },
                  {
                     id: "193",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03HfHATr3T92QVYH7gG11dnhjArFUqz5S0g&usqp=CAU",
                  },
                  {
                     id: "194",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-Ihmlc4nsUmsCzIT5MQdjDHMTk1IFI0e_Q3-ex3VtLVDcNIlwoOlcZdAzdLfRRlD8jQ&usqp=CAU",
                  },
                  {
                     id: "195",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShj4jT7n26OhCyOX7-Kfbx1DvX19ZDQnR1HA&usqp=CAU",
                  },
                  {
                     id: "196",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9Yqz6Rkgwii9xEebOqtKmwwgVS3Bj1BwHQ&usqp=CAU",
                  },
                  {
                     id: "197",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXK0daZbKzBHA4jkKnpIpcF2aRN75euJaYlw&usqp=CAU",
                  },
                  {
                     id: "198",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9_lig0V8naDCy59gShVeEvLnC7EeW04ueQ&usqp=CAU",
                  },
                  {
                     id: "199",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01oo0arU4-MyQqc7RJnl6u_8j1FTjNmTLUw&usqp=CAU",
                  },
               ],
               Trains: [
                  {
                     id: "29",
                     name: "Express Train",
                     departureTime:"05.55 a.m",
                     arrivalTime:"15.14 p.m"
                  },
                  {
                     id: "30",
                     name: "Local Train",
                     departureTime:"08.30 a.m",
                     arrivalTime:"17.25 p.m"
                  },
                  {
                     id: "31",
                     name: "Intercity Train",
                     departureTime:"09.40 a.m",
                     arrivalTime:"18.25 a.m"
                  }
                  

               ],

            },
            {
               id: "36",
               name: "Badulla Train Station",
               image: "https://lh5.googleusercontent.com/p/AF1QipNsNFEUnvZr03m1Aelx9SSOKr9f369aVQIoJipd=w408-h306-k-no",
               distance: "Badulla to Ella:12 KM",
               address: "Badulla,Sri Lanka",
               oldPrice:  285 ,
               newPrice:  500,
               photos: [
                  {
                     id: "150",
                     image:
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/91/7a/98/badulla.jpg?w=500&h=300&s=1",
                  },
                  {
                     id: "151",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89RzlgklCTdueh8AozHpo2FiA-F2TXshh-2-NCUxjx5onao6cIeNpe0ZL6XkiQMB8rs8&usqp=CAU",
                  },
                  {
                     id: "152",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnexE1y5l3FZLPjHZ8M8ymrqqknIoKUv7eWhXo4zORaaUFsko6IyCsoTzJX_DfLGje1nc&usqp=CAU",
                  },
                  {
                     id: "153",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03HfHATr3T92QVYH7gG11dnhjArFUqz5S0g&usqp=CAU",
                  },
                  {
                     id: "154",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDbDVIrAQg3Il4NY2fE4auBpqN2tzbRC1cw&usqp=CAU",
                  },
                  {
                     id: "155",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIFPGzijKKdPh4ssUAP_EPCsnpaccU0a4jw&usqp=CAU",
                  },
                  {
                     id: "156",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXw9BOa_JFV55E1v3td5yhRHSECycu7D4NmQ&usqp=CAU",
                  },
                  {
                     id: "157",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYzohuH_KoIIeHqC27D7Yk8WztdQ9I1HjzA&usqp=CAU",
                  },
                  {
                     id: "158",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFDE59F1IiL9SflEskY7dXhZpNcrVDoSOAEamYPQYva2Z3vfwdqnkh5LuLeb3FKA9IBtw&usqp=CAU",
                  },
                  {
                     id: "159",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_ZZE0oqaWqWUxHmOtV9ul_WmrGNtOfYlPQ&usqp=CAU",
                  },
               ],
               Trains: [
                  {
                     id: "29",
                     name: "Express Train",
                     departureTime:"05.40 a.m",
                     arrivalTime:"06.39 a.m"
                  },
                  {
                     id: "30",
                     name: "Local Train",
                     departureTime:"08.00 a.m",
                     arrivalTime:"08.43 a.m"
                  },
                  {
                     id: "31",
                     name: "Intercity Train",
                     departureTime:"09.30 a.m",
                     arrivalTime:"10.25 a.m"
                  }
                  

               ],

            },
            {
               id: "36",
               name: "Nanuoya Train Station",
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoAX_c46e0lU8tuPepI8Kyq92cJVOQ2tKVQ&usqp=CAU",
               distance: "Nanuoya to Ella:12 KM",
               address: "Nanuoya,Sri Lanka",
               oldPrice:  385 ,
               newtPrice:  600,
               photos: [
                  {
                     id: "181",
                     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6F40tofq_MIUqmw1hHyJOJRb9aAyPm3Hig&usqp=CAU",

                  },
                  {
                     id: "182",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tslXV-Wjbw2S-bDQBqS66cbXvjz3I5bHLA&usqp=CAU",
                  },
                  {
                     id: "183",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMOKK0XBvKweaG3DM29_0x-cGWvdrTxI2Yw&usqp=CAU",
                  },
                  {
                     id: "184",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fLC4WLWD25BwuWjWlmZwDpCV6zCHOM9Q8g&usqp=CAU",
                  },
                  {
                     id: "185",
                     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5VofEoCl5qPS4Adrvo2ShZtHe7kU9B161w&usqp=CAU",

                  },
                  {

                     id: "186",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBz11brwlEs-YmsO-6hUTkS-Ik-TGjWMdbg&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBz11brwlEs-YmsO-6hUTkS-Ik-TGjWMdbg&usqp=CAU",
                  },
                  {
                     id: "187",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9QD24b4J_WshhkE8MTUHhNGv4YRGloZZ3g&usqp=CAU",
                  },
                  {
                     id: "188",
                     image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHqi4ZbyoB68MAhz119YCeAFrNVNygIwYBA&usqp=CAU",
                  },
                  {
                     id: "189",
                     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMz4O1fYbxdNxRWi8wbiKjH8RXlC0h5BaSg&usqp=CAU",

                  },
                  {
                     id: "200",
                     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRdtTrg0OYVewKf_DXPbYVKGzRk7H70NZAQ&usqp=CAU",

                  },
               ],
               Trains: [
                  {
                     id: "33",
                     name: "Express Train",
                     departureTime:"04.43 a.m",
                     arrivalTime:"07.18 a.m"
                  },
                  {
                     id: "34",
                     name: "Local Train",
                     departureTime:"09.25 a.m",
                     arrivalTime:"13.24 p.m"
                  },
                  {
                     id: "35",
                     name: "Intercity Train",
                     departureTime:"11.21 a.m",
                     arrivalTime:"14.31 p.m"
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
      if(a.newPrice > b.newPrice){
         return -1;
       }
       if(a.newPrice < b.newPrice){
         return 1;
      }
      return 0;
   }

   const comparision = (a, b) => {
      if(a.newPrice < b.newPrice){
         return -1;
       }
       if(a.newPrice > b.newPrice){
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
                     oldPrice={route.params.oldPrice}
                     newPrice={route.params.newPrice}
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
