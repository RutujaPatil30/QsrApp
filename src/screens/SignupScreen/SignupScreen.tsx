import { Formik } from 'formik';
import React, { useRef, useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import { signup_request } from '../../redux/action';
import baselocalization from '../../utils/baselocalization';
import theme from '../../utils/themes';
import { ValidationSchema } from '../../utils/validations';
import { styles } from './styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { images } from '../../utils/images';

const SignupScreen = (props: any) => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.reducer.users);
  const { navigation } = props;

  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };
  const formikRef = useRef();

  const onSubmit = (values: any) => {
    const userExist = users.some((user: any) => user.email === values.email);
    if (userExist) {
      Alert.alert(
        baselocalization.signupScreen.signupScreenError,
        baselocalization.signupScreen.signupScreenAccountExistAlertMsg,
        [
          {
            text: baselocalization.signupScreen.signupScreenCancel,
          },
          {
            text: baselocalization.signupScreen.signupScreenOk,
            onPress: () => {
              navigation.navigate('LoginScreen');
            },
          },
        ],
      );
    } else {
      const userData = {
        id: Math.random(),
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
      };
      dispatch(signup_request(userData));
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        testID='SignupScreen'
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
        <KeyboardAvoidingView style={styles.subContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={images.homescreen_mcdIcon}
              style={styles.image}
            />
          </View>
          <View style={styles.viewHeaderStyle}>
            <Text style={styles.textHeaderStyle}>
              {baselocalization.loginScreen.loginScreenWelcome}
            </Text>
            <Text style={styles.textHeaderStyle}>
              {baselocalization.signupScreen.signupScreenSignUpMsg}
            </Text>
          </View>
          <View>
            <SafeAreaView>
              <View>
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={ValidationSchema().getCreateAccountValidationSchema()}
                  //@ts-ignore
                  innerRef={formikRef}>
                  {({
                    values,
                    handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    isValid,
                    handleSubmit,
                  }) => (
                    <View>
                      <CustomTextInput
                        testID='SignupScreen_NameInputField'
                        value={values.name}
                        errorText={errors.name}
                        onChangeText={handleChange('name')}
                        onBlur={() => setFieldTouched('name')}
                        isError={touched.name && errors.name ? true : false}
                        labelText={baselocalization.signupScreen.signupScreenName}
                        lablePlaceHolder={baselocalization.signupScreen.signupScreenNamePlaceHolder}
                      />
                      <CustomTextInput
                        testID='SignupScreen_EmailInputField'
                        value={values.email}
                        errorText={errors.email}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        isError={touched.email && errors.email ? true : false}
                        labelText={baselocalization.loginScreen.loginScreenEmail}
                        lablePlaceHolder={baselocalization.loginScreen.loginScreenEmailPlaceHolder}
                      />
                      <CustomTextInput
                        testID='SignupScreen_PhoneInputField'
                        value={values.phoneNumber}
                        errorText={errors.phoneNumber}
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={() => setFieldTouched('phoneNumber')}
                        maxLength={14}
                        keyboardType="phone-pad"
                        isError={
                          touched.phoneNumber && errors.phoneNumber ? true : false
                        }
                        labelText={baselocalization.signupScreen.signupScreenPhone}
                        lablePlaceHolder={baselocalization.signupScreen.signupScreenPhonePlaceHolder}
                      />
                      <CustomTextInput
                        testID='SignupScreen_PasswordInputField'
                        value={values.password}
                        errorText={errors.password}
                        onChangeText={handleChange('password')}
                        onBlur={() => setFieldTouched('password')}
                        isError={
                          touched.password && errors.password ? true : false
                        }
                        labelText={baselocalization.loginScreen.loginScreenPassword}
                        lablePlaceHolder={baselocalization.loginScreen.loginScreenPasswordPlaceHolder}
                        secureTextEntry={true}
                        isPassword={true}
                      />
                      <CustomTextInput
                        testID='SignupScreen_ConfirmPasswordFiels'
                        value={values.confirmPassword}
                        errorText={errors.confirmPassword}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={() => setFieldTouched('confirmPassword')}
                        isError={
                          touched.confirmPassword && errors.confirmPassword
                            ? true
                            : false
                        }
                        labelText={baselocalization.signupScreen.signupScreenConfirmPassword}
                        lablePlaceHolder={baselocalization.loginScreen.loginScreenPasswordPlaceHolder}
                        secureTextEntry={true}
                        isPassword={true}
                      />
                      <View style={styles.btn}>
                        <CustomButton testID='SignuScreen_NextButton' text={baselocalization.onboardingScreen.onboardingScreenButtonText}
                          disabled={false}
                          buttonStylesProps={{
                            backgroundColor: theme.colors.primary,
                            borderColor: theme.colors.primary,
                            textColor: theme.colors.white,
                            width: wp('80%'),
                            height: hp('5%'),
                            fontSize: undefined
                          }}
                          onPress={handleSubmit} />
                      </View>
                    </View>
                  )}
                </Formik>
                <View style={styles.accountExistViewStyle}>
                  <Text style={styles.accoutExistStyle}>
                    {baselocalization.signupScreen.signupScreenAccountExistMsg}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('LoginScreen');
                    }}>
                    <Text style={styles.accoutExistBtnStyle}>
                      {baselocalization.signupScreen.signupScreenSignIn}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
