import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [code, setCode] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput placeholder="Code" value={code} setValue={setCode} />
        <CustomInput
          placeholder="Enter your new password"
          value={newpassword}
          setValue={setNewPassword}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});

export default SignUpScreen;
