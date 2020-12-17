import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DashboardList from '../components/DashboardList';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Home = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>


      <View style={styles.HomeOne}>
        <View style={styles.HomeTwo}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />

        </View>
        <View style={styles.HomeTwo}>

          <Image style={{ width: 40, height: 40, borderRadius: 30 }} source={require('../images/5.jpeg')} />


        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          // horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../images/1.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../images/2.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../images/3.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../images/7.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../images/8.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../images/9.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>


      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn}>

          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}>

          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}>

          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hello</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn}>

          <View style={styles.categoryIcon}>
            {/* <FontAwesome name="universal-access" size={35} color="#FF6347" /> */}
          </View>
          <Text style={styles.categoryBtnTxt}>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}>

          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}>

          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hello</Text>
        </TouchableOpacity>

      </View>

      <Animatable.View animation="fadeInUpBig" style={{
        backgroundColor: '#bcbcbc', flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        paddingVertical: 30,
        marginTop: 20
      }}>

        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Wellcome SomeOne</Text>
          <Text style={{ paddingVertical: 10 }}>Click An Action button below to commence your assessnent & learning</Text>
        </View>
      </Animatable.View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  sliderContainer: {
    height: 200,
    width: '92%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  // header: {
  //   flex: 1,
  //   justifyContent: 'flex-end',

  //   width: '100%',
  //   height: '50%',
  //   resizeMode: 'cover',
  //   justifyContent: 'center',
  // },
  // footer: {
  //   flex: 4,
  //   backgroundColor: '#fff',
  //   borderTopLeftRadius: 40,
  //   borderTopRightRadius: 40,
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  // },
  HomeOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  HomeTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  // HomeThree: {
  //   paddingHorizontal: 27,
  //   paddingTop: 50,
  //   paddingBottom: 20,
  // },
  // HomeFour: {
  //   borderBottomColor: '#364f6b',
  //   borderBottomWidth: 3,
  //   width: 150,
  //   paddingVertical: 5,
  //   fontWeight: 'bold',
  //   fontSize: 25,
  //   color: '#364f6b',
  // },
  // HomeFive: {
  //   color: '#fff',
  //   fontWeight: '200',
  //   color: '#364f6b',
  // },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
});

export default Home;
