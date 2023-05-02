import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, {useState, useRef} from "react";

import { Feather } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";
import { set } from "react-native-reanimated";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const data =[
    {
      id:"0",
      place:"Colombo ",
      placeImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/fd/0b/7b/caption.jpg?w=500&h=400&s=1",
     properties:[
        {
            id:"10",
            name:"Negambo Train Station",
            image:"https://live.staticflickr.com/1891/43561949645_67a068c1ef_b.jpg",
            distance:"Negambo to Colombo: 38.9 KM",
            address:"Negambo,Sri Lanka",
            ChildPrice:"LKR 200 ",
            AdultPrice:"LKR 300",
            Trains:[
              {
                  id:"202",
                  name:"Express train"
      
                       
           },
           {
              id:"203",
              name:"Normal Train"
           },
           {
              id:"210",
              name:"Intercity Train"
           },
           {
              id:"209",
              name:"Luxury Train"
           },
               
           ],
        },

        {
          id:"11",
          name:"Ella Train Station",
          image:"https://fastly.4sqi.net/img/general/width960/22329506_dndPVK-mUgZhJUdKnKb8h3eXYA7IjDvQvDqzmGX_On8.jpg",
          distance:"Ella to Colombo: 306.5 KM",
          address:"Ella,Sri Lanka",
          ChildPrice:"LKR 530 ",
          AdultPrice:"LKR 830",
          stations:[
            {
                id:"105",
                name:"Express Train",             
         },
         {
            id:"106",
            name:"Local Train",
         },
         {
            id:"107",
            name:"Intercity Train",
         },
         {
            id:"108",
            name:"Luxury Train",
         }
             
        ],

      },
      {
        id:"12",
        name:"Galle Train Station",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bVONcxD-V5TJ7ekzpegtpFs2YbuGxlwtgA&usqp=CAU",
        distance:"Galle to Colombo: 125.3 KM",
        address:"Galle,Sri Lanka",
        ChildPrice:"LKR 400 ",
        AdultPrice:"LKR 600",
        stations:[
          {
              id:"101",
              name:"Express Train",             
       },
       {
          id:"102",
          name:"Local Train",
       },
       {
          id:"103",
          name:"Intercity Train",
       },
       {
          id:"109",
          name:"Luxury Train",
       }
           
      ],

    }

     ],

    
    },

    {
      id:"1",
      place:"Negambo",
      placeImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHbZWxR7JduU8Lr0w_OI94z_H2COIQ5HvCfbn0n3a_7B6dnS1D9Uo8fbg4HbrWSBrwiE&usqp=CAU",  
      properties:[
        {
            id:"13",
            name:"Colombo Train Station",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1z2V1zWbzTptOiCLehWZJ4riAeUlZuMBRXEhhpELgEdlA6LefHSQwqFQStDkXbI7Uhfo&usqp=CAU",
            distance:"Colombo to Negambo: 37.4 KM",
        address:"Colombo,Sri Lanka",
        ChildPrice:"LKR 260 ",
        AdultPrice:"LKR 340",
            
            stations:[
              {
                  id:"25",
                  name:"Express Train",             
           },
           {
              id:"26",
              name:"Local Train",
           },
           {
              id:"27",
              name:"Intercity Train",
           },
           {
              id:"28",
              name:"Luxury Train",
           }
               
          ],

        },
        {
          id:"14",
          name:"Waikkala Train Station",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreN0L_goOHZHyvcjUSvbr3Nzcxg6TqoRslQ&usqp=CAU",
          distance:"Waikkala to Negambo:7.8 KM",
        address:"Waikkala,Sri Lanka",
        oldPrice:"LKR 40",
        AdultPrice:"LKR 60",
          stations:[
            {
                id:"45",
                name:"Express Train",             
         },
         {
            id:"46",
            name:"Local Train",
         },
         {
            id:"47",
            name:"Intercity Train",
         },
         {
            id:"48",
            name:"Luxury Train",
         }
             
        ],

      },
      {
        id:"15",
        name:"Chilaw Train Station",
        image:"https://slrailwayforum.com/content/images/2021/11/Chilaw-Railway-Station.jpg",
        distance:"Chilaw to Negambo:49.7 KM",
        address:"Chilaw,Sri Lanka",
        ChildPrice:"LKR 400 ",
        AdultPrice:"LKR 600",
        stations:[
          {
              id:"29",
              name:"Express Train",             
       },
       {
          id:"30",
          name:"Local Train",
       },
       {
          id:"31",
          name:"Intercity Train",
       },
       {
          id:"32",
          name:"Luxury Train",
       }
           
      ],

    }
     ],

  
    },

    {
      id:"2",
      place:"Ella",
      placeImage:"https://www.charlotteplansatrip.com/wp-content/uploads/2020/03/Things-to-do-in-Ella.jpg",
      properties:[
         {
            id:"35",
            name:"Colombo Train Station",
            image:"https://slrailwayforum.com/content/images/2021/11/Chilaw-Railway-Station.jpg",
            distance:"Colombo to Ella:49.7 KM",
            address:"Colombo,Sri Lanka",
            ChildPrice:"LKR 400 ",
            AdultPrice:"LKR 600",
            stations:[
              {
                  id:"29",
                  name:"Express Train",             
           },
           {
              id:"30",
              name:"Local Train",
           },
           {
              id:"31",
              name:"Intercity Train",
           },
           {
              id:"32",
              name:"Luxury Train",
           }
               
          ],
    
        },
        {
         id:"36",
         name:"Badulla Train Station",
         image:"https://lh5.googleusercontent.com/p/AF1QipNsNFEUnvZr03m1Aelx9SSOKr9f369aVQIoJipd=w408-h306-k-no",
         distance:"Badulla to Ella:12 KM",
         address:"Badulla,Sri Lanka",
         ChildPrice:"LKR 285 ",
         AdultPrice:"LKR 500",
         stations:[
           {
               id:"29",
               name:"Express Train",             
        },
        {
           id:"30",
           name:"Local Train",
        },
        {
           id:"31",
           name:"Intercity Train",
        },
        {
           id:"32",
           name:"Luxury Train",
        }
            
       ],
 
     },
     {
      id:"36",
      name:"Nanuoya Train Station",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoAX_c46e0lU8tuPepI8Kyq92cJVOQ2tKVQ&usqp=CAU",
      distance:"Nanuoya to Ella:12 KM",
      address:"Nanuoya,Sri Lanka",
      ChildPrice:"LKR 385 ",
      AdultPrice:"LKR 600",
      stations:[
        {
            id:"33",
            name:"Express Train",             
     },
     {
        id:"34",
        name:"Local Train",
     },
     {
        id:"35",
        name:"Intercity Train",
     },
     {
        id:"37",
        name:"Luxury Train",
     }
         
    ],

  }
      ],

    
    },
   
  ]
    
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
          placeholder="Enter your Arrival station"
        />
        <Feather name="search" size={24} color="black" />
      </View>
      <SearchResults data={data} input={input} setInput={setInput}/>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
