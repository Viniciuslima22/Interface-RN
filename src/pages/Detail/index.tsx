
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

export function Detail({navigation}: any) {
     
  navigation.setOptions({
    headerTitle: 'Detalhes'
  })
 
  return(
    <ScrollView style={styles.container}>
          <Image source={require('../../assets/detail.png')}
          style={styles.image} resizeMode="cover"/>

          <View>
            <View>
                <Text style={[styles.title, {fontSize: 24}]}>R$ 359,99</Text>
            </View>
            <View style={{opacity: 0.4}}>
                <Text style={[styles.title, {fontSize: 30}]}>Nike Air Max Junior</Text>
            </View>
             
             <View style={styles.dotContainer}>
                  <Dot color="#2379f4"/>
                  <Dot color="#fb6e53"/>
                  <Dot color= "#DDDD"/>
                  <Dot color="red"/>
             </View>

             <View style={{flexDirection: 'row', width:'100%'}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                           <SizeButton bgColor="#000" color="#FFF"> 42 </SizeButton>
                           <SizeButton> 39 </SizeButton>
                           <SizeButton > 40 </SizeButton>
                           <SizeButton > 44 </SizeButton>
              </ScrollView>

             </View>

             <View style={styles.textContent}>
              <Text style={styles.textTitle}>Nike Air max</Text>
              <Text style={styles.textContent}>O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético</Text>
             
             <Text style={styles.textList}>
              - Categoria: Amortecimento
             </Text>
             <Text>
              - Categoria: Mash
             </Text> 
                  
                     
             </View>
             
             <Button/>

             <View style={styles.line}/>  
             
             <Footer/>
                    
          </View>
    </ScrollView>
  ) 
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
     width:'100%',
    

     },
  image:{
   width:'100%',
    
  },
  title:{
    paddingHorizontal: '2%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
})