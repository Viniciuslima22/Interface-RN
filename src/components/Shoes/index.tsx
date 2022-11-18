
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

type Props = {
  imgs: any | string
  children: React.ReactNode
  cost: string | number
  onClick: any
 
}

export default function Shoes({imgs,children,cost, onClick}: Props){
   
   function filterDesc(desc: any ){
    if(desc.lenght < 27){
      return desc
    }
    return `${desc.substring(0 , 23)}...`
   }

  return(
    <TouchableOpacity style={styles.container} onPress={onClick}>
        <Image source={imgs} style={styles.shoesImg}/>
       
        <Text style={styles.shoesText}>
         {filterDesc(children)} 
        </Text>
       <View style={{opacity: 0.4}}>
        <Text style={styles.shoesText}>
          {cost}
        </Text>
        </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center'

  },
   shoesImg: {
    width: 175,
    height:175
   },
   shoesText :{
     fontSize: 16
   }
})