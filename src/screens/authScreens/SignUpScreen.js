import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView,TextInput,Alert } from 'react-native'
import {colors} from '../../global/styles'
import Header from '../../components/Header'
import { Formik } from 'formik';
import {Icon,Button} from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc,doc } from 'firebase/firestore';
import { useNavigation} from '@react-navigation/native'


const SignUpScreen = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
const[passwordFocussed, setPasswordFocussed] = useState(false)
const[passwordBlured,setPasswordBlured] = useState(false) 
const [phone,setPhone] = useState("");
const navigation = useNavigation();

const register = () => {

 navigation.navigate("Main")
  if(email === "" || password === "" || phone === "" ){
      Alert.alert(
          "Invalid Detials",
          "Please enter all the credentials",
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
        createUserWithEmailAndPassword(auth,email,password).then((userCredentials) =>{

          const user = userCredentials._tokenResponse.email;
          const uid = auth.currentUser.uid;

           setDoc(doc(db,"users",`${uid}`),{
               email:user,
               phone:phone
           })
      })
        
      }
      
    return (
        <View style = {styles.container}>
           <Header title ="MY ACCOUNT"  type ="arrow-left" navigation ={navigation}/> 
           <ScrollView keyboardShouldPersistTaps = "always">
                <View style = {styles.view1}>
                    <Text style ={styles.text1}>Sign-Up</Text>
                </View>
               
                        <View style ={styles.view2}>
                            <View>
                                <Text style ={styles.text2}>New on GoTrain ?</Text>
                            </View>
                           

                          
                               <View style ={styles.view10}>
                                  <View>
                                      <Icon 
                                        name ='email'
                                        style ={styles.email}
                                        color ={colors.grey3}
                                        type ="material"
                                      />
                                  </View>
                                    <View style ={styles.view11}>
                                        <TextInput 
                                          placeholder = "Email"
                                          style = {styles.input4}
                                          autoFocus = {false}
                                          value={email}
                                          onChangeText={(text) => setEmail(text)}
                                        />
                                   </View>
                               </View>
                               

                               <View style = {styles.view14}>
                                    <Animatable.View animation = {passwordFocussed? "fadeInRight":"fadeInLeft"} duration = {400}>
                                       <Icon name ="lock" color ={colors.grey3}  type = "material" />
                                    </Animatable.View>
                                    <TextInput 
                                          type="password"
                                          placeholder = "Password"
                                          secureTextEntry
                                          style = {{flex:1}}
                                          autoFocus = {false}
                                           value={password}
                                      onChangeText={(text) => setPassword(text)}
                                          onFocus = {()=>{setPasswordFocussed(true)}}
                                          onBlur = {()=>{setPasswordBlured(true)}}
                                        />
                                   <Animatable.View  animation = {passwordBlured?"fadeInLeft":"fadeInRight"} duration ={400}>
                                       <Icon name ="visibility-off" color ={colors.grey3}  type = "material" style ={{marginRight:10}}/>
                                    </Animatable.View>      
                               </View>

                               <View style ={styles.TextInput1}>
             
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder=" Phone No"
              placeholderTextColor={"g"}
              style ={{ marginTop:10  }} 
              
              
              
            />
          </View>
        

                               <View style ={styles.view15}>
                                  <Text style ={styles.text3}>By creating or logging into an account you are</Text>
                                  <View style ={styles.view16}>
                                      <Text style ={styles.text3}>agreeing with our  </Text>
                                      <Text style ={styles.text4}> Terms & Conditions</Text>
                                      <Text style = {styles.text3}> and </Text>
                                  </View>
                                  <Text style ={styles.text4}> Privacy Statement</Text>
                               </View>
                               <View style ={styles.view17}>
                                  <Button
                                      title = "Create my account"
                                      buttonStyle = {styles.button1}
                                      titleStyle ={styles.title1}
                                      onPress = {register}
                                     
                                   />
                               </View>
                        </View>

                
                <View style = {styles.view18}>
                   <Text style ={styles.text5}>OR</Text>
                </View>
                <View style ={styles.view19}>
                    <View style ={styles.view20}>
                        <Text style ={styles.text6}>Already have an account with GoTrain ?</Text>
                    </View>
                    <View style={{alignItems:"flex-end", marginHorizontal:20, marginTop:8}}>
                  <Button
           
                      title="Sign In"
                       buttonStyle={styles.createButton}
                      titleStyle={styles.createButtonTitle}
                    onPress={()=>{
                      navigation.navigate("SignInScreen")
                }}/>
               </View>
                </View>
           </ScrollView>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({

    container:{flex:1,
        backgroundColor:'white'
      },

      view1:{justifyContent:'center',
             alignItems:'flex-start',
             marginTop:10,
             marginBottom:10,
             paddingHorizontal:15
            },

      text1:{fontSize:22,
        color:colors.buttons,
        fontWeight:'bold'
      },

      view2:{justifyContent:'flex-start',
             backgroundColor:'white',
             paddingHorizontal:15
            },

            TextInput1: {
              borderWidth: 1,
              borderColor: "#86939e",
              marginTop:20,
              borderRadius: 10,
              marginBottom: 20,
              height: 50,
              paddingLeft: 15
            },

      view3:{marginTop:5,
            marginBottom:10
          },

      text2:{fontSize:15,
            color:colors.grey2
          },

      view4:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5
          
            },

      view5:{ marginLeft:30,
              marginTop:20      
               },

      input1:{fontSize:16, },

      view6:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48,
              borderColor:"#86939e"
          },

       view7:   {marginLeft:0,
                 maxWidth:"65%",         
               },

      input2:{fontSize:16,
              marginLeft: 0,
              marginBottom:0
                  },         

      view8:{flexDirection:'row',
            borderWidth:1,
            borderColor: colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
          },

      view9:{marginLeft:0,
             maxWidth:"65%",    
           },

      input3:{fontSize:16,
        marginLeft: 0,
        marginBottom:0
       },

      view10: {flexDirection:'row',
              borderWidth:1,
              borderColor:"#86939e",
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
       },

       email:{fontSize:24,
              padding:0,
              marginBottom:0 ,
              marginTop:11,
              marginLeft:2
              },

       view11:{ 
        
         marginLeft:30,
         maxWidth:"65%", 
        
      },

       input4:{fontSize:16,
              marginLeft: -20,
              marginBottom:-20,
              marginTop:10
             },      

     view13:  {flexDirection:"row",
              height:40,
            } ,

    view14:{
      borderWidth:1,
      borderColor:"#86939e",
      borderRadius:12,
      flexDirection:"row",
      justifyContent:"space-between",
      alignContent:"center",

      alignItems:"center",
      height:50,





      paddingLeft:15,
      marginTop:20
    },       
      
    view15:{alignItems:'center',
            justifyContent:'center',
            marginTop:23
          },

    text3: {fontSize:13
              },
              
      view16:{flexDirection:'row'},

      text4:{textDecorationLine:'underline',
            color:'green',
            fontSize:13
            },

      button1: {backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
        width:'100%'
                          
      },
      
      title1:{color:"white",
      fontSize:20,  
      fontWeight:"bold" ,
      alignItems:"center",
      justifyContent:"center"  ,
      marginTop:-3
                            
    },

    view17:{marginVertical:10,
            marginTop:30
          },

    view18:{flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            paddingTop:15,
          },

    text5:   {fontSize:15,
              fontWeight:'bold',
              },
              
      view19:{ backgroundColor:'white',
              paddingHorizontal:15,
              
              },

      view20:{marginTop:5
            },
      
      view21:{marginTop:5,
        alignItems:'flex-end',
      },

      createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:2,
        borderColor:"#1F41BB",
        height:40,
        paddingHorizontal:20,
       },

       createButtonTitle:{
        color:"#1F41BB",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
      }
})