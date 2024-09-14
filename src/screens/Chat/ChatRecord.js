import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const messages = [
  { id: 1, text: "오늘 할 일을 알려줄래?", time: "08.18 / 17:00", isSent: true },
  { id: 2, text: "오늘은 담당 요양사가 방문하는 날입니다!", time: "08.18 / 17:01", isSent: false },
  { id: 3, text: "오늘 할 일을 알려줄래?", time: "08.18 / 17:00", isSent: true },
  { id: 4, text: "오늘은 담당 요양사가 방문하는 날입니다!", time: "08.18 / 17:01", isSent: false },
  { id: 5, text: "오늘 할 일을 알려줄래?", time: "08.18 / 17:00", isSent: true },
  { id: 6, text: "오늘은 담당 요양사가 방문하는 날입니다!", time: "08.18 / 17:01", isSent: false },
  { id: 7, text: "오늘 할 일을 알려줄래?", time: "08.18 / 17:00", isSent: true },
  { id: 8, text: "오늘은 담당 요양사가 방문하는 날입니다!", time: "08.18 / 17:01", isSent: false },
  { id: 9, text: "오늘 할 일을 알려줄래?", time: "08.18 / 17:00", isSent: true },
  { id: 10, text: "오늘은 담당 요양사가 방문하는 날입니다!", time: "08.18 / 17:01", isSent: false },
];

export default function ChatRecord() {
  const renderItem = (item) => (
    // 각 메시지를 전송 여부에 따라 다른 style을 적용
    // isSent가 true이면 흰색 말풍선, false이면 노란 말풍선
    <View key={item.id} style={[styles.messageContainer, item.isSent ? styles.sent : styles.received]}>
      <Text style={styles.messageText}>{item.text}</Text>
      {/* 메시지 시간, isSent가 true (사용자가 전송한 메시지)일 경우 sentTime 스타일 적용 */}
      <Text style={[styles.messageTime, item.isSent && styles.sentTime]}>{item.time}</Text>
    </View>
  );

  const handleBackPress = () => {
    console.log("이전 화면으로");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>대화 기록</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 메시지 배열 렌더링 */}
        {messages.map((item) => renderItem(item))}
      </ScrollView>

      {/* 뒤로가기 버튼 */}
      <TouchableOpacity onPress={handleBackPress}>
        <Text style={styles.backButton}>이전 화면으로</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211B00',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    maxWidth: '90%',
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
  },
  received: {
    alignSelf: 'flex-start',
    backgroundColor: '#FCCB02',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  messageTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#393939',
    marginTop: 5,
  },
  sentTime: {
    textAlign: 'right',
  },
  backButton: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 10,
    marginTop: 10,
  },
});
