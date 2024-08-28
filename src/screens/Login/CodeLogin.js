import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CodeLogin() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.welcomeText}>
          <Text style={styles.highlightedText}>마음이음</Text>
          에
        </Text>
        <Text style={styles.welcomeText}>오신 것을 환영합니다!</Text>
      </View>
      <View>
        <Text style={styles.subText}>먼저 요양사에게 받은 코드가 필요해요</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="전달받은 코드를 입력해 주세요."
            placeholderTextColor="#B0B0B0"
            keyboardType="numeric"  // 숫자 키보드를 기본으로 설정
          />
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>계속하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.changeText}>혹시, 요양사이신가요?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 60,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'left',
    color: '#000',
  },
  highlightedText: {
    color: '#FCCB02',
  },
  subText: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#4B4B4B',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 24,
  },
  continueButton: {
    backgroundColor: '#FCCB02',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  continueButtonText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  changeText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
