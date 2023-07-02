import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const OnSignInWithFacebook = () => {
    console.warn('facebook');
  };
  const OnSignInWithGoogle = () => {
    console.warn('google');
  };
  const OnSignInWithApple = () => {
    console.warn('apple');
  };
  return (
    <>
      <CustomButton
        text="Sign in with Facebook"
        onPress={OnSignInWithFacebook}
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
      <CustomButton
        text="Sign in with Google"
        onPress={OnSignInWithGoogle}
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        text="Sign in with Apple"
        onPress={OnSignInWithApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
