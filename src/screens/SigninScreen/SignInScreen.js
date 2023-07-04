import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Auth from '@aws-amplify/auth';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  async function onSignInPressed() {
    if (loading) {
      return;
    }
    // The reason we need to set loading is because user can experience pending request error by clicking before getting the response.
    setLoading(true);
    try {
      const user = await Auth.signIn(username, password);
    } catch (error) {
      Alert.alert('opps', error.message);
    }
    setLoading(false);
  }
  // const onSignInPressed = async data => {
  //   try {
  //     const response = await Auth.signIn(data.username, data.password);
  //     console.log(response);
  //   } catch (e) {
  //     Alert.alert('Opps', e.message);
  //   }
  //   // console.warn('Sign in');
  //   // validate user
  //   // navigation.navigate('Home');
  // };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const OnSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={onSignInPressed}
        />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an acoount? Create one"
          onPress={OnSignUpPress}
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
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 200,
  },
});

export default SignInScreen;
