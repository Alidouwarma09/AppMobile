import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Button } from 'react-native-paper';

const Inscription = ({ navigation }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (!nom || !prenom || !username || !password) {
            Alert.alert("Erreur", "Veuillez remplir tous les champs");
            return;
        }
        fetch(`${process.env.REACT_APP_API_URL}/Utilisateur/api/inscription/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom,
                prenom,
                username,
                password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Alert.alert("Succès", "Inscription réussie !");
                navigation.navigate('Connexion');
            } else {
                Alert.alert("Erreur", data.message || "Une erreur est survenue");
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
                <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
                    <Text style={styles.formInscrire}>Déjà inscrit ? Connexion</Text>
                </TouchableOpacity>
                <Text style={styles.formTitle}>Inscription</Text>
                <View style={styles.formItems}>
                    <Text>Nom :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom"
                        value={nom}
                        onChangeText={setNom}
                    />
                </View>
                <View style={styles.formItems}>
                    <Text>Prénom :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Prénom"
                        value={prenom}
                        onChangeText={setPrenom}
                    />
                </View>
                <View style={styles.formItems}>
                    <Text>📱 Numéro :</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        placeholder="Numéro"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.formItems}>
                    <Text>🔒 :</Text>
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        placeholder="Mot de passe"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.submitContainer}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Button style={styles.submit}>
                            <Text style={styles.submitText}>S'inscrire</Text>
                        </Button>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Inscription;
