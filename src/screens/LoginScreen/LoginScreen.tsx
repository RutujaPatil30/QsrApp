import { Formik } from 'formik';
import React, { useRef } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import { login_request } from '../../redux/action';
import baselocalization from '../../utils/baselocalization';
import { images } from '../../utils/images';
import theme from '../../utils/themes';
import { ValidationSchema } from '../../utils/validations';
import { styles } from './styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const LoginScreen = (props: any) => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const users = useSelector((state: any) => state.reducer.users);
    const initialValues = {
        email: '',
        password: '',
    };
    const formikRef = useRef();

    const onSubmit = (values: any) => {
        const user = users.find((user: any) => user.email === values.email);
        const userExist = users.some((user: any) => user.email === values.email);
        if (!userExist) {
            Alert.alert(
                baselocalization.loginScreen.loginScreenValidationError,
                baselocalization.loginScreen.loginScreenEmailNotFound,
            );
        } else if (userExist && user.password !== values.password) {
            Alert.alert(
                baselocalization.loginScreen.loginScreenValidationError,
                baselocalization.loginScreen.loginScreenIncorrectPassword,
            );
        } else if (userExist && user.password === values.password) {
            navigation.navigate('HomeScreen');
            dispatch(login_request(user));
        } else {
            Alert.alert(baselocalization.loginScreen.loginScreenCheckEmailAndPassword);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView
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
                            {baselocalization.loginScreen.loginMsg}
                        </Text>
                    </View>
                    <View>
                        <SafeAreaView>
                            <View>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={onSubmit}
                                    validationSchema={ValidationSchema().getLogInAccountValidationSchema()}
                                    //@ts-ignore
                                    innerRef={formikRef}>
                                    {({
                                        values,
                                        handleChange,
                                        errors,
                                        setFieldTouched,
                                        touched,
                                        handleSubmit,
                                    }) => (
                                        <View>
                                            <CustomTextInput
                                                testID='LoginScreen_EmailInputField'
                                                value={values.email}
                                                errorText={errors.email}
                                                onChangeText={handleChange('email')}
                                                onBlur={() => setFieldTouched('email')}
                                                isError={touched.email && errors.email ? true : false}
                                                labelText={baselocalization.loginScreen.loginScreenEmail}
                                                lablePlaceHolder={baselocalization.loginScreen.loginScreenEmailPlaceHolder}
                                            />
                                            <CustomTextInput
                                                testID='LoginScreen_PasswordInputField'
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
                                            <View style={styles.button}>
                                                <CustomButton testID='LoginScreen_NextButton' text={baselocalization.onboardingScreen.onboardingScreenButtonText}
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
                                        {baselocalization.loginScreen.loginScreenNoAccountMsg}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('SignupScreen');
                                        }}>
                                        <Text style={styles.accoutExistBtnStyle}>
                                            {baselocalization.loginScreen.loginScreenSignUp}
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

export default LoginScreen;
