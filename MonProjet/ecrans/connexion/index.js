import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons'; 
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Connexion = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkIfLoggedIn = async () => {
            const token = await AsyncStorage.getItem('userToken');
            if (token) {
                setIsLoggedIn(true);
                navigation.replace('Acceuil');
            }
            setLoading(false);
        };
        checkIfLoggedIn();
    }, [navigation]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    const handleSubmit = () => {
        if (!username || !password) {
            Alert.alert("Erreur", "Veuillez remplir tous les champs");
            return;
        }

        fetch(`${process.env.REACT_APP_API_URL}/Utilisateur/api/connexion/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                AsyncStorage.setItem('userToken', data.token);
                Alert.alert("Succès", "Connexion réussie !");
                navigation.replace('Acceuil');
            } else {
                Alert.alert("Erreur", data.error || "Nom d'utilisateur ou mot de passe incorrect");
            }
        })
        .catch(error => {
            Alert.alert("Erreur", "Impossible de se connecter au serveur");
            console.error(error);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Inscription')}>
                    <Text style={styles.formInscrire}>S'inscrire ?</Text>
                </TouchableOpacity>

                <Text style={styles.formTitle}>Connexion</Text>
                <View style={styles.formItems}>
                    <Text>📱 Numéro :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Numéro"
                        keyboardType="numeric"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.formItems}>
                    <Text>🔒 Mot de passe :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.submitContainer}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Button style={styles.submit}>
                            <Text style={styles.submitText}>Se connecter</Text>
                        </Button>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.socialeLogin}>
                <Text style={styles.socialeLoginTitle}>Se connecter avec...</Text>
                <View style={styles.IconContainer}>
                    <TouchableOpacity><Icon style={styles.icon} name='logo-facebook' /></TouchableOpacity>
                    <TouchableOpacity><AntDesignIcon style={styles.icon} name='google' /></TouchableOpacity>
                    <TouchableOpacity><Icon style={styles.icon} name='logo-instagram' /></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Connexion;
