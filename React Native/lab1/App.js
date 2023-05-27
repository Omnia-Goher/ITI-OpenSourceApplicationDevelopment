import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView,Text,Image, View } from 'react-native';

export default function App() {
  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false} >
      <View>
        <Image style={{
          width: 410,
          height: 900,
          resizeMode: 'cover',
        }}
        source={require('./assets/images/4.jpg')}>
        </Image>
      </View>
      <View>
        <Image style={{
          width: 410,
          height: 900,
          resizeMode: 'cover',
        }}
        source={require('./assets/images/2.jpg')}>
        </Image>
      </View>
      <View>
        <Image style={{
          width: 410,
          height: 900,
          resizeMode: 'cover',
        }}
        source={require('./assets/images/3.jpg')}>
        </Image>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});