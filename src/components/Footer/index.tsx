import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Shoes from '../Shoes'
export default function Footer() {

    
    return (

        <View>
            <Text> VOCÊ TAMABEM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal shouldRasterizeIOS={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes imgs={require('../../assets/2.png')} cost='R$1259,99'>
                            Nike Air Max
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes imgs={require('../../assets/3.png')} cost='R$220,99'>
                           Adidas simples Vermelho
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes imgs={require('../../assets/6.png')} cost='R$1359,99'>
                            Adidas Vip
                        </Shoes>
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
   title: {
    fontSize: 24,
    marginVertical: '2%',
    paddingHorizontal: '2%'
   }
})