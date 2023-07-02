import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
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
