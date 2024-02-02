import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const items = [
    {
      img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'Marbella, España',
      price: 200,
      stars: 4.45,
      reviews: 124,
      saved: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'Baveno, Italia',
      price: 320,
      stars: 4.81,
      reviews: 409,
      saved: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      name: 'Tucson, Arizona',
      price: 695,
      stars: 4.3,
      reviews: 72,
      saved: false,
    },
    {
        img: 'https://images.hola.com/imagenes/viajes/20230824237700/alojamientos-casas-cueva-espana/1-295-743/xuqgroup01-a.jpg?tx=w_360',
        name: ' KAIKOURA, Nueva Zelanda',
        price: 700,
        stars: 4.2,
        reviews: 32,
        saved: true,
      },
      {
        img: 'https://a0.muscache.com/im/pictures/93838fcc-6612-41f9-b769-31c648924c77.jpg?im_w=480',
        name: 'Belfast, Reino Unido',
        price: 162,
        stars: 4.8,
        reviews: 100,
        saved: false,
      },
      {
        img: 'https://phantom-expansion.unidadeditorial.es/6e465f1d3047c29d8ae05b7e58ebc98a/crop/164x0/1024x573/f/jpg/assets/multimedia/imagenes/2021/10/14/16342349978769.jpg',
        name: 'Guadalajara, Mexico',
        price: 150,
        stars: 3.8,
        reviews: 11,
        saved: false,
      },
      {
        img: 'https://media.revistagq.com/photos/5d22f3c66994dcc89977865b/1:1/w_2700,h_2700,c_limit/Infinity-interior-27_VIVA-SIR.jpg',
        name: 'Madrid, España',
        price: 250,
        stars: 4.9,
        reviews: 200,
        saved: true,
      },
      {
        img: 'https://mazatlanrealestateguide.com/system/archivos/archivos2/279_Mazatlan_real_estate_gavias_golden_shores_condos_for_sale%20(7)_g.jpg',
        name: 'Mazatlan, Mexico',
        price: 300,
        stars: 4.8,
        reviews: 150,
        saved: true,
      },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lugares Disponibles</Text>

        {items.map(({ img, name, price, stars, reviews, saved }, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
              }}>
              <View style={styles.card}>
                <View style={styles.cardLikeWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                    }}>
                    <View style={styles.cardLike}>
                      <FontAwesome
                        color={saved ? '#ea266d' : '#222'}
                        name="heart"
                        solid={saved}
                        size={22}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.cardTop}>
                  <Image
                    alt=""
                    resizeMode="cover"
                    style={styles.cardImg}
                    source={{ uri: img }}
                  />
                </View>

                <View style={styles.cardBody}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>{name}</Text>

                    <Text style={styles.cardPrice}>
                      <Text style={{ fontWeight: '600' }}>${price} </Text>/
                      noche
                    </Text>
                  </View>

                  <View style={styles.cardFooter}>
                    <FontAwesome
                      color="#ea266d"
                      name="star"
                      solid={true}
                      size={12}
                      style={{ marginBottom: 2 }}
                    />

                    <Text style={styles.cardStars}>{stars}</Text>

                    <Text style={styles.cardReviews}>({reviews} reviews)</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
 
  card: {
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardLikeWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    right: 12,
  },
  cardLike: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardImg: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#232425',
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: '400',
    color: '#232425',
  },
  cardFooter: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardStars: {
    marginLeft: 2,
    marginRight: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#232425',
  },
  cardReviews: {
    fontSize: 14,
    fontWeight: '400',
    color: '#595a63',
  },
});

export default HomeScreen;
