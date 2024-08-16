import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Character from '../../components/character';
import { StatusBar } from 'expo-status-bar';
import { Title } from './style';
import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { FlatList } from 'react-native';

export default function Index() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/character');
      setData(response.data.results)
    };
    fetchData();
  }, []);


  return (
    <View style={styles.container}>
      <Title>Rick and Morty</Title>
      <FlatList
        data={data}
        renderItem={({ item }) => <Character name={item.name} image={item.image} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#171719',
  },
});
