import { ReactNode } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Detail } from '../Detail';
import { propsStack } from '../../Routes/Stack/Models';
import Icon from 'react-native-vector-icons/AntDesign'

import Shoes from '../../components/Shoes';
import { useNavigation } from '@react-navigation/native';



const navigation = useNavigation<propsStack>()

export function Principal() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/banner.png')}
          style={styles.image} />

        <View style={styles.textContainer}>

          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <Icon name='bars' size={25} color='#000'  />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

          <Shoes imgs={require('../../assets/1.png')} cost='R$1259,99' onClick={() => navigation.navigate('Detail')}>
            Nike Air Max
          </Shoes>

          <Shoes imgs={require('../../assets/2.png')} cost='R$359,99' onClick={() => navigation.navigate('Detail')}>
            Nike Ai Max Junior
          </Shoes>


        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

          <Shoes imgs={require('../../assets/3.png')} cost='R$220,59'onClick={() => navigation.navigate('Detail')}>
            Adidas simples Vermelho  
          </Shoes>

          <Shoes imgs={require('../../assets/4.png')} cost='R$759,99' onClick={() => navigation.navigate('Detail')}>
            Adidas Camuflado
          </Shoes>



        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

          <Shoes imgs={require('../../assets/5.png')} cost='R$399,99' onClick={() => navigation.navigate('Detail')}>
           Adidas Junior
          </Shoes>

          <Shoes imgs={require('../../assets/6.png')} cost='R$1359,99' onClick={() => navigation.navigate('Detail')}>
            Adidas Vip
          </Shoes>



        </View>

      </ScrollView>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'

  },
  header: {
    marginBottom: 0
  },
  image: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#000',
    borderBottomWidth: 2
  }
});
