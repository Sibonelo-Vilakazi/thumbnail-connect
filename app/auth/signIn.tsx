import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import CustomInput from '../components/customInput';
import { useRouter } from 'expo-router';
import OAuthContainer from '../components/OAuthContainer';
import { AuthState } from '../interfaces/auth-state.interface';
import { Helpers } from '../helpers/helpers';
import { AuthService } from '../services/authService';


const signIn = () => {
    const oauthArray = ['google', 'facebook', 'apple'];
    const router = useRouter();
    const [emailError, setEmailError] = useState('');
    const [loginError, setLoginError] = useState('');
     const [authData, setAuthData] = useState<{password: string, email: string}>({
        password: '',
        email: ''
    });

    const handleSubmit = async () => {
        const helper = new Helpers();
        console.log('isValid Email: ', );
        setEmailError('');
        setLoginError('');
        if(!helper.isValidEmail(authData.email)){
            // error invalid email message
            setEmailError('Invalid email');
            return;
        }


        const authService = new AuthService();

        const response = await authService.logIn(authData);

        if(response.success){
            console.log("Logged: ", response.data) 
            await authService.setUser(response.data);
            router.push('(tabs)')
        } else {
            setLoginError('Incorrect username or password');
            console.error(response)
        }
    }
  return (
    <SafeAreaView>
      <View style={styles.container}>

        <View style={styles.headerContainer}>
            <Text style={styles.headingText}>Login here</Text>        
            <Text style={styles.introText}>Welcome back you've been missed</Text>    
        </View>

        <View style={styles.inputContainer}>
            <View>
            <CustomInput handleInput={(text) => setAuthData((prev) => ({...prev, email: text}))} placeholder={'Email'} />
            {emailError && <Text style={{color: 'red', marginTop: 8}}>{emailError}</Text>}
            </View>
            <View>
            <CustomInput handleInput={(text) => 
                setAuthData((prev) => ({...prev, password: text}))}
             placeholder={'Password'} isSecure={true}/>
            {loginError && <Text style={{color: 'red', marginTop: 8}}>{loginError}</Text>}
            </View>
        </View>
        <Text style={styles.forgotText}>Forgot your password?</Text>

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>   

        <Text style={[styles.accountText, styles.smallSemiBold]}
            onPress={() => router.push('auth/signUp')}
        >Create new account</Text>

        <View >
            <Text style={[styles.alternativeText, styles.smallSemiBold]}>Or continue with</Text>
            <View style={styles.oauthContainerView}>
            {oauthArray.map((item, index) =>{
                return (
                    <OAuthContainer key={index} iconName={item}/>
                )
            })}

            </View>
            
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 71,
        width: '100%',
        height: '100%'
    },
    headerContainer: {
        alignItems: 'center',
        rowGap: 26,
        width: '100%'
    },
    headingText: {
        color: '#1F41BB',
        fontWeight: '700',
        flexWrap: 'wrap',
        fontSize: 30
    },
    introText: {
        fontSize: 20,
        fontWeight: '600',
        width: 228,
        textAlign: 'center'
    },
    inputContainer: {
        rowGap: 29,
        marginTop: 71
    },
    button: {
        backgroundColor: '#1F41BB',
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowColor: '#1F41BB'
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '500'
    },
    forgotText: {
        color: '#1F41BB',
        textAlign: 'right',
        fontWeight: '600',
        marginVertical: 30
    },
    accountText: {
        color: '#494949',
        marginTop: 30,
    },
    alternativeText: {
        color: '#1F41BB',
        marginTop: 65,
    },
    smallSemiBold: {
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center'
    },
    oauthContainerView: {
        flexDirection: 'row',
        columnGap: 10,
        justifyContent: 'center',
        marginTop: 10
    }
})

export default signIn