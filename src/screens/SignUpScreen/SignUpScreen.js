import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {useForm} from 'react-hook-form';
import {useRoute} from '@react-navigation/core';

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // const onRegisterPressed = async data => {
  //   const {username, password, email, name} = data;
  //   try {
  //     const response = await Auth.signUp({
  //       username,
  //       password,
  //       attributes: {email, name, preferred_username: username},
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     Alert.alert('opps', error.message);
  //   }
  //   // navigation.navigate('ConfirmEmail');
  // };

  async function onRegisterPressed() {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, name, preferred_username: username},
      });
      console.log(username);
      navigation.navigate('ConfirmEmail', {username});
    } catch (error) {
      Alert.alert('opps', error.message);
    }
    setLoading(false);
  }

  const OnSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const OnTermsOfUsePressed = () => {
    console.warn('OnTermsOfUserPressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('OnPrivacyPolicy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          name="name"
          placeholder="Name"
          control={control}
          value={name}
          setValue={setName}
        />
        <CustomInput
          name="username"
          placeholder="Username"
          // value={username}
          control={control}
          // setValue={setUsername}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          value={password}
          control={control}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          control={control}
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By Registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={OnTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPres={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign in"
          onPress={OnSignInPress}
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
