import { FlatList, SafeAreaView, Text } from "react-native";
import styles from "./styles";
import Box from "./components/Box";

export default function App() {

  const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={1}
        data={COLORS}
        renderItem={(props) => <Box colorName={props.item.colorName} hexCode={props.item.hexCode}></Box>}
        keyExtractor={(props) => props.hexCode}
        ListHeaderComponent={
          <Text style={styles.header}>Color Boxes</Text>
        }
        ListEmptyComponent={<Text>No data</Text>}
      ></FlatList>
    </SafeAreaView>
  );
}