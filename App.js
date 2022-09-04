import React from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import musicDataJson from './music-data.json';
import { useState } from "react";
import SongCard from "./src/components/SongCard";
import SearchBar from "./src/components/SongCard/SearchBar";



const app = () => {
  const [list, setList] = useState(musicDataJson);

  const renderSong = ({ item }) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />
  const handleSearch = text => {
    const filteredList = musicDataJson.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    seperator: {borderWidth: 1, borderColor: '#e0e0e0'},
  },
});
export default app;