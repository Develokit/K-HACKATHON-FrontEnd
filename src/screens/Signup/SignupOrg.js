import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dummyData = [
  '행복 복지관',
  '사랑 복지관',
  '사랑 요양원',
  '사랑나눔 요양원',
  '꿈누리 요양원',
  '하늘꿈 요양원'
];

export default function SignupOrg() {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showList, setShowList] = useState(false);
  const navigation = useNavigation();

  const handleNextPress = () => {
    console.log('Next icon pressed');
    navigation.navigate('SignupImg');
  };

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setShowList(false);
      setFilteredData([]);
    } else {
      const filtered = dummyData.filter(item => item.includes(text));
      setFilteredData(filtered);
      setShowList(true);
    }
  };

  const handleItemPress = (item) => {
    setSearchText(item);
    setShowList(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setShowList(false)}>
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={styles.complete}></View>
          <View style={styles.complete}></View>
          <View style={styles.complete}></View>
          <View style={styles.complete}></View>
          <View style={styles.progress}></View>
          <View style={styles.progress}></View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeText}>요양사님</Text>
          <Text style={styles.welcomeText}>소속기관을 검색해주세요</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="기관명을 입력하세요"
              value={searchText}
              onChangeText={handleSearch}
              onFocus={() => setShowList(true)}
            />
            <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch(searchText)}>
              <Image source={require('../../assets/icons/search.png')} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {showList && (
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.listItem}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
            style={styles.listContainer}
          />
        )}

        <TouchableOpacity style={styles.nextIconContainer} onPress={handleNextPress} activeOpacity={0.7}>
          <Image source={require('../../assets/icons/next.png')} style={styles.nextIcon} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
    left: 5,
    right: 5,
  },
  progress: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#E8E8E8',
  },
  complete: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#FCCB02',
  },
  titleContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'left',
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  listContainer: {
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  itemText: {
    fontSize: 16,
  },
  nextIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 16,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
