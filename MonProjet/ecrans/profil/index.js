import React, { useState, useEffect, useRef } from 'react';
import {
     View,
     Text, 
     TouchableOpacity, 
     Image, 
     Alert, 
     Switch,
     ScrollView,
       Dimensions,
       Modal
     } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { styles, stylesDark } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const { width } = Dimensions.get('window');
import { useTheme } from '../../composants/ThemeContext';

const Profile = ({ navigation }) => {
  const { isDarkMode } = useTheme(); 
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
                    username: 'Nom d\'utilisateur',
                    email: 'user@example.com',
                    profileImage: 'https://placekitten.com/200/200',
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
          <View style={isDarkMode ? stylesDark.container:styles.container}>
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


           <View style={isDarkMode ? stylesDark.tabsContainer : styles.tabsContainer}>
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

const InfoSection = ({  form, setForm, handleLogout }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <ScrollView>
        <View style={isDarkMode ? stylesDark.section:styles.section}>
          <Text style={ isDarkMode ? styles.sectionTitle:styles.sectionTitle}>Preferences</Text>

          <TouchableOpacity
            onPress={() => {
            }}
            style={isDarkMode ? stylesDark.row:styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
              <FeatherIcon color="#fff" name="globe" size={20} />
            </View>

            <Text style={isDarkMode ? stylesDark.rowLabel:styles.rowLabel}>Langue</Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon
              color="#C6C6C6"
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <View style={isDarkMode ? stylesDark.row:styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <FeatherIcon color="#fff" name="moon" size={20} />
            </View>

            <Text style={isDarkMode ? stylesDark.rowLabel:styles.rowLabel}>Mode sombre</Text>

            <View style={styles.rowSpacer} />

            <Switch
              onValueChange={toggleDarkMode}
              value={isDarkMode}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
            }}
            style={isDarkMode ? stylesDark.row:styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
              <FeatherIcon
                color="#fff"
                name="navigation"
                size={20} />
            </View>

            <Text style={isDarkMode ? stylesDark.rowLabel:styles.rowLabel}>Localisation</Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon
              color="#C6C6C6"
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <View style={isDarkMode ? stylesDark.row:styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
              <FeatherIcon color="#fff" name="at-sign" size={20} />
            </View>

            <Text style={isDarkMode ? stylesDark.rowLabel:styles.rowLabel}>Notifications Email</Text>

            <View style={styles.rowSpacer} />
          </View>

          <View style={isDarkMode ? stylesDark.row:styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
              <FeatherIcon color="#fff" name="bell" size={20} />
            </View>

            <Text style={isDarkMode ? stylesDark.rowLabel:styles.rowLabel}>Notifications Push</Text>

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
            style={isDarkMode ? stylesDark.row:styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
              <FeatherIcon color="#fff" name="flag" size={20} />
            </View>

            <Text style={isDarkMode ? stylesDark.rowLabel:styles.rowLabel}>Report Bug</Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon
              color="#C6C6C6"
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
            }}
            style={isDarkMode ? stylesDark.row:styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <FeatherIcon color="#fff" name="mail" size={20} />
            </View>

            <Text style={isDarkMode ? stylesDark.rowLabel:styles.rowLabel}>Contact Us</Text>

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
            style={isDarkMode ? stylesDark.row:styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
              <FeatherIcon color="#fff" name="star" size={20} />
            </View>

            <Text style={isDarkMode ? stylesDark.rowLabel:styles.rowLabel}>Rate in App Store</Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon
              color="#C6C6C6"
              name="chevron-right"
              size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            style={isDarkMode ? stylesDark.row:styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: 'red' }]}>
              <FeatherIcon color="#fff" name="log-out" size={20} />
            </View>

            <Text style={styles.deconnexionLabel}>Se déconnecter</Text>

            <View style={styles.rowSpacer} />
          </TouchableOpacity>
        </View>
        
      </ScrollView>
  );
};



const PhotosSection = () => {
    const photos = [
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
  const [isFullScreen, setIsFullScreen] = useState(false);
const [selectedVideo, setSelectedVideo] = useState(null);
const handleFullScreenToggle = (video) => {
  setSelectedVideo(video);
  setIsFullScreen(true);
};

    const videos = [
        {
            id: 1,
            title: 'Vidéo 1',
            views: 220,
        },
    ];
    

    return (
      <View style={styles.sectionContainer}>
      {videos.map((video) => (
          <View key={video.id} style={styles.videoContainer}>
              <TouchableOpacity onPress={() => handleFullScreenToggle(video)}>
              </TouchableOpacity>
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
      {isFullScreen && (
          <Modal
              visible={isFullScreen}
              animationType="fade"
              transparent={true}
              onRequestClose={() => setIsFullScreen(false)}
          >
              <View style={styles.modalContainer}>
                  <TouchableOpacity
                      style={styles.closeButton}
                      onPress={() => setIsFullScreen(false)}
                  >
                      <Text style={styles.closeButtonText}>Fermer</Text>
                  </TouchableOpacity>
              </View>
          </Modal>
      )}
  </View>
    );
};

const SettingsSection = () => (
  
    <View style={styles.sectionContainer}>
    </View>
);

export default Profile;
