import React, { useState, useEffect, useRef } from 'react';
import {
     View,
     Text, 
     TouchableOpacity, 
     Image, 
     Alert, 
     Switch,
     ScrollView,
       Dimensions
     } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import VideoPlayer from 'react-native-video-player';
const { width } = Dimensions.get('window');

const Profile = ({ navigation }) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        profileImage: '', 
    });
    const [form, setForm] = useState({
        darkMode: false,
        emailNotifications: true,
        pushNotifications: false,
      });
      const [selectedTab, setSelectedTab] = useState('Info');
      const scrollViewRef = useRef(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = await AsyncStorage.getItem('userToken');
            if (token) {
                setUser({
                    username: 'Nom d\'utilisateur', // Exemple de données
                    email: 'user@example.com', // Exemple de données
                    profileImage: 'https://placekitten.com/200/200', // Exemple d'image de profil
                });
            } else {
                Alert.alert("Erreur", "Aucun utilisateur connecté");
                navigation.navigate('Connexion');
            }
        };
        fetchUserData();
    }, [navigation]);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userToken');
        navigation.navigate('Connexion');
    };

    const handleTabPress = (tab, index) => {
      setSelectedTab(tab);
      scrollViewRef.current?.scrollTo({ x: index * width, animated: true });
  };

  const handleScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.x;
      const activeIndex = Math.round(scrollPosition / width);
      const tabs = ['Info', 'Photo', 'Vidéo', 'Paramètres'];
      setSelectedTab(tabs[activeIndex]);
  };

    return (
        <ScrollView>
          <View style={styles.container}>
           <View style={styles.profile}>
        <TouchableOpacity
          onPress={() => {
          }}>
          <View style={styles.profileAvatarWrapper}>
            <Image
              alt=""
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
              }}
              style={styles.profileAvatar} />

            <TouchableOpacity
              onPress={() => {
              }}>
              <View style={styles.profileAction}>
                <FeatherIcon color="#fff" name="edit-3" size={15} />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.profileName}>Wally Darius</Text>

          <Text style={styles.profileAddress}>
            123 Maple Street. Anytown, PA 17101
          </Text>
        </View>
           </View>


             <View style={styles.tabsContainer}>
                {['Info', 'Photo', 'Vidéo', 'Paramètres'].map((tab, index) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tabButton, selectedTab === tab && styles.selectedTab]}
                        onPress={() => handleTabPress(tab, index)}
                    >
                        <Text
                            style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <View style={[styles.section, { width }]}>
                    <InfoSection user={user} form={form} setForm={setForm} handleLogout={handleLogout} />
                </View>
                <View style={[styles.section, { width }]}>
                    <PhotosSection />
                </View>
                <View style={[styles.section, { width }]}>
                    <VideosSection />
                </View>
                <View style={[styles.section, { width }]}>
                    <SettingsSection />
                </View>
            </ScrollView>
        </View>
        </ScrollView>
    );
};

const InfoSection = ({ user, form, setForm, handleLogout  }) => (
    <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <TouchableOpacity
            onPress={() => {
            }}
            style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
              <FeatherIcon color="#fff" name="globe" size={20} />
            </View>

            <Text style={styles.rowLabel}>Langue</Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon
              color="#C6C6C6"
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <View style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <FeatherIcon color="#fff" name="moon" size={20} />
            </View>

            <Text style={styles.rowLabel}>Mode sombre</Text>

            <View style={styles.rowSpacer} />

            <Switch
              onValueChange={darkMode => setForm({ ...form, darkMode })}
              value={form.darkMode} />
          </View>

          <TouchableOpacity
            onPress={() => {
            }}
            style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
              <FeatherIcon
                color="#fff"
                name="navigation"
                size={20} />
            </View>

            <Text style={styles.rowLabel}>Localisation</Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon
              color="#C6C6C6"
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <View style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
              <FeatherIcon color="#fff" name="at-sign" size={20} />
            </View>

            <Text style={styles.rowLabel}>Notifications Email</Text>

            <View style={styles.rowSpacer} />

            <Switch
              onValueChange={emailNotifications =>
                setForm({ ...form, emailNotifications })
              }
              value={form.emailNotifications} />
          </View>

          <View style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
              <FeatherIcon color="#fff" name="bell" size={20} />
            </View>

            <Text style={styles.rowLabel}>Notifications Push</Text>

            <View style={styles.rowSpacer} />

            <Switch
              onValueChange={pushNotifications =>
                setForm({ ...form, pushNotifications })
              }
              value={form.pushNotifications} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resources</Text>

          <TouchableOpacity
            onPress={() => {
            }}
            style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
              <FeatherIcon color="#fff" name="flag" size={20} />
            </View>

            <Text style={styles.rowLabel}>Report Bug</Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon
              color="#C6C6C6"
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
            }}
            style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <FeatherIcon color="#fff" name="mail" size={20} />
            </View>

            <Text style={styles.rowLabel}>Contact Us</Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon
              color="#C6C6C6"
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
              <FeatherIcon color="#fff" name="star" size={20} />
            </View>

            <Text style={styles.rowLabel}>Rate in App Store</Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon
              color="#C6C6C6"
              name="chevron-right"
              size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: 'red' }]}>
              <FeatherIcon color="#fff" name="log-out" size={20} />
            </View>

            <Text style={styles.deconnexionLabel}>Se déconnecter</Text>

            <View style={styles.rowSpacer} />
          </TouchableOpacity>
        </View>
        
      </ScrollView>
);

const PhotosSection = () => {
    const photos = [
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        
    ];

    return (
        <ScrollView>
            <View style={styles.sectionContainer}>
            {photos.map((photo, index) => (
                <Image key={index} source={{ uri: photo }} style={styles.image} />
            ))}
        </View>
        </ScrollView>
    );
};

const VideosSection = () => {
    const videos = [
        {
            id: 1,
            title: 'Vidéo 1',
            url: 'https://www.w3schools.com/html/mov_bbb.mp4',
            views: 220,
            thumbnail: 'https://www.w3schools.com/html/mov_bbb.png',
        },
        {
            id: 2,
            title: 'Vidéo 2',
            url: 'https://www.w3schools.com/html/movie.mp4',
            views: 190,
            thumbnail: 'https://www.w3schools.com/html/movie.jpg',
        },
        {
            id: 3,
            title: 'Vidéo 3',
            url: 'https://www.w3schools.com/html/mov_bbb.mp4',
            views: 120,
            thumbnail: 'https://www.w3schools.com/html/mov_bbb.jpg', 
        },
        {
            id: 4,
            title: 'Vidéo 4',
            url: 'https://www.w3schools.com/html/movie.mp4',
            views: 120,
            thumbnail: 'https://www.w3schools.com/html/movie.jpg',
        },
    ];
    

    return (
        <View style={styles.sectionContainer}>
        {videos.map((video) => (
            <View key={video.id} style={styles.videoContainer}>
                
                <VideoPlayer
                    endWithThumbnail
                    thumbnail={{ uri: "thumb.jpg" }}
                    video={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
                    videoWidth={1280}
                    videoHeight={720}
                    ignoreSilentSwitch="ignore"
                />
                <View style={styles.playIconContainer}>
                <Text style={styles.videoViews}> {video.views}</Text>
                    <FontAwesomeIcon
                        name="play"
                        size={30}
                        color="#007BFF"
                    />
                </View>
            </View>
        ))}
    </View>
    );
};

const SettingsSection = () => (
    <View style={styles.sectionContainer}>
    </View>
);

export default Profile;
