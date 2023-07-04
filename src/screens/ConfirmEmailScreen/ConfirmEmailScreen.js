import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import Auth from '@aws-amplify/api-graphql/node_modules/@aws-amplify/auth';

const SignUpScreen = () => {
  const route = useRoute();
  const {control, handleSubmit} = useForm({
    defaultValues: {username: 'route?.params?.username'},
  });
  const [code, setCode] = useState('');
  const navigation = useNavigation();
  async function onConfirmPressed(data) {
    try {
      const response = await Auth.confirmSignUp(data.username, data.code);
      console.log(data.username);
      // await Auth.confirmSignUp(data.username, data.code);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    // navigation.navigate('Home');
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onResendPressed = () => {
    console.warn('onResendPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{required: 'Username code is required'}}
        />
        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        />
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
