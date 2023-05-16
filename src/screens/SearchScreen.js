import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const SearchScreen = () => {
   const [input, setInput] = useState("");
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
               oldPrice:  300 ,
               newPrice:  200,
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
                 
                 
               ],
               trains: [
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
               oldPrice: 600, 
               newPrice:  530,
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
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwojM_BETO5AsVrdFevTPrXCCY90c0wu-GQ&usqp=CAU",
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
               
              
              
               ],
               trains: [
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
                  
               ],

            },
            {
               id: "12",
               name: "Galle Train Station",
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bVONcxD-V5TJ7ekzpegtpFs2YbuGxlwtgA&usqp=CAU",
               distance: "Galle to Colombo: 125.3 KM",
               address: "Galle,Sri Lanka",
               oldPrice:  900 ,
               newPrice:  530,
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
               
              
               ],

               trains: [
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
               oldPrice:  340 ,
               newPrice:  260,
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

               trains: [
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
               oldPrice:  150,
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
                  }
                  
               ],
               trains: [
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
                     arrivalTime:"05.50 a.m"
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
               oldPrice:  800 ,
               newPrice:  500,
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
               trains: [
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
               trains: [
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
               trains: [
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
               newPrice:  600,
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
               trains: [
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

   ];

 const [items, setItems] =useState([]);

  useEffect(() => {
   if(items.length > 0) return;

   const fetchProducts = async () => {
      const colRef = collection (db, "places");

      const docsSnap = await getDocs(colRef);
        docsSnap.forEach((doc) => {
         items.push(doc.data());
        })
      }
      fetchProducts();
   }, [items]);
   console.log(items);

   return (
      <SafeAreaView>
         <View
            style={{
               padding: 10,
               margin: 10,
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "space-between",
               borderColor: "#86939e",
               borderWidth: 1,
               marginTop: 40,
               borderRadius: 12,
            }}
         >
            <TextInput
               value={input}
               onChangeText={(text) => setInput(text)}
               placeholder="Enter your Destination"
            />
            <Feather name="search" size={24} color="black" />
         </View>
         <SearchResults data={items} input={input} setInput={setInput} />
      </SafeAreaView>
   );
};

export default SearchScreen;

const styles = StyleSheet.create({});
