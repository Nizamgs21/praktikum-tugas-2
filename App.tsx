import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  Text,
  TextInput,
  View,
  ToastAndroid,
} from 'react-native';

export default function PemeriksaPalindrome() {
  const [teksInput, setTeksInput] = useState('');

  const periksaPalindrome = () => {
    const teksDiproses = teksInput.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const teksTerbalik = teksDiproses.split('').reverse().join('');

    if (teksDiproses === teksTerbalik) {
      ToastAndroid.show('Ini adalah Palindrome!', ToastAndroid.SHORT);
      Alert.alert('Palindrome Terdeteksi', 'Input adalah sebuah palindrome.', [{ text: 'OK' }]);
    } else {
      ToastAndroid.show('Bukan sebuah Palindrome.', ToastAndroid.SHORT);
      Alert.alert('Tidak Ada Palindrome', 'Input bukan sebuah palindrome.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Halo, Bang!</Text>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBqjXFnIDj9a2m_e0iUh4Yp3srZ5feRRTgHHzKH0Caw&s',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Pemeriksa Palindrome</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="Masukkan Teks Di Sini"
        value={teksInput}
        onChangeText={setTeksInput}
      />
      <Button title="Periksa Palindrome" onPress={periksaPalindrome} />
    </View>
  );
}