import { View, Text, StyleSheet, SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import CustomInput from '../components/customInput';
import { useRouter } from 'expo-router';
import OAuthContainer from '../components/OAuthContainer';
import { Helpers } from '../helpers/helpers';
import { AuthService } from '../services/authService';

const signUp = () => {
    const oauthArray = ['google', 'facebook-square', 'apple'];
    const router = useRouter();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [authData, setAuthData] = useState<{password: string, 
        email: string, confirmPassword: string}>({
        password: '',
        confirmPassword: '',
        email: ''
    });

    const handleRegister = async () => {
        const helper = new Helpers();
        
        setEmailError('');
        setRegisterError('');
        setPasswordError('')
        if(!helper.isValidEmail(authData.email)){
            // error invalid email message
            setEmailError('Invalid email');
            return;
        }

        
        if (authData.confirmPassword !== authData.password){
            setPasswordError('Password do not match');
            return;
        }

        const authService = new AuthService();

        const response = await authService.register(authData);

        if(response.success){
            console.log("register: ", response.data) 
            await authService.setUser(response.data);
            router.push('auth/signIn')
        } else {
            setRegisterError('Something when wrong');
            console.error('My Error: ', {...response.error})
        }
        console.log(authData)
    }
  return (
    <SafeAreaView>
      <View style={styles.container}>

        <View style={styles.headerContainer}>
            <Text style={styles.headingText}>Create Account</Text>        
            <Text style={styles.introText}>Create an account so you can explore all the existing jobs</Text>    
        </View>

        <View style={styles.inputContainer}>
            
            <View>
            <CustomInput
                handleInput={(text) => 
                    setAuthData((prev) => ({...prev, email: text}))}
            placeholder={'Email'}/>
            {emailError && <Text style={{color: 'red', marginTop: 8}}>{emailError}</Text>}
            </View>
            <CustomInput
                handleInput={(text) => 
                    setAuthData((prev) => ({...prev, password: text}))}
            placeholder={'Password'} isSecure={true}/>
            
            <View>
                <CustomInput 
                    handleInput={(text) => 
                        setAuthData((prev) => ({...prev, confirmPassword: text}))}
                placeholder={'Confirm Password'} isSecure={true}/>
                {passwordError && <Text style={{color: 'red', marginTop: 8}}>{passwordError}</Text>}
            </View>
        </View>
       
        <TouchableOpacity style={[styles.button , {marginTop: 30}]} onPress={() => handleRegister()}>
            <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>   

        <Text style={[styles.accountText, styles.smallSemiBold]}
            onPress={() => {router.push('auth/signIn') }}
        >Already have an account</Text>

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
        fontSize: 14,
        fontWeight: '600',
        width: '100%',
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

export default signUp