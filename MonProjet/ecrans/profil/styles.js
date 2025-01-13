import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        marginBottom: 10,
    },
    editProfileText: {
        fontSize: 16,
        color: '#007BFF',
        marginTop: 10,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    tabButton: {
        paddingVertical: 10,
        fontWeight:'bold',
        
    },
    selectedTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#007BFF',
    },
    tabText: {
        fontSize: 16,
        color: '#333',
    },
    selectedTabText: {
        color: 'pink',
    },
    sectionContainer: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        padding: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 16,
        color: '#777',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    videoContainer: {
        padding: 10,
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20,
    },
    videoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    videoViews: {
        fontSize: 16,
        color: '#666',
        marginVertical: 5,
    },
    videoThumbnail: {
        width: 150,
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
    playIconContainer: {
        flexDirection:'row',
        position: 'absolute',
        bottom: 10, // Positionné en bas
        right: 10,  // Positionné à droite
        borderRadius: 9999, // Pour donner un effet circulaire à l'arrière-plan
        padding: 5, // Espacement autour de l'icône
        gap:4,
    },
    logoutButton: {
        backgroundColor: '#ff4757',
        marginTop: 20,
    },

    profile: {
        padding: 24,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      profileAvatarWrapper: {
        position: 'relative',
      },
      profileAvatar: {
        width: 72,
        height: 72,
        borderRadius: 9999,
      },
      profileAction: {
        position: 'absolute',
        right: -4,
        bottom: -10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: 9999,
        backgroundColor: '#007bff',
      },
      profileName: {
        marginTop: 20,
        fontSize: 19,
        fontWeight: '600',
        color: '#414d63',
        textAlign: 'center',
      },
      profileAddress: {
        marginTop: 5,
        fontSize: 16,
        color: '#989898',
        textAlign: 'center',
      },
      /** Section */
      section: {
        paddingHorizontal: 24,
      },
      sectionTitle: {
        paddingVertical: 12,
        fontSize: 12,
        fontWeight: '600',
        color: '#9e9e9e',
        textTransform: 'uppercase',
        letterSpacing: 1.1,
      },
      /** Row */
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 12,
      },
      rowIcon: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      rowLabel: {
        fontSize: 17,
        fontWeight: '400',
        color: '#0c0c0c',
      },
      deconnexionLabel: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#E53935',
      },
      rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
      fullScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
      closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
      },
      closeButtonText: {
        color: '#fff',
        fontSize: 20,
      },
});
export const stylesDark = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#000000',
  },
  profileContainer: {
      alignItems: 'center',
      marginTop: 20,
  },
  profileImage: {
      marginBottom: 10,
  },
  editProfileText: {
      fontSize: 16,
      color: '#007BFF',
      marginTop: 10,
  },
  tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#121212',
      paddingVertical: 10,
      borderTopColor: '#ccc',
  },
  tabButton: {
      paddingVertical: 10,
      fontWeight:'bold',
  },
  selectedTab: {
      borderBottomWidth: 2,
      borderBottomColor: '#007BFF',
  },
  tabText: {
      fontSize: 16,
      color: '#333',
  },
  selectedTabText: {
      color: 'pink',
  },
  sectionContainer: {
      flex: 1,
      flexDirection:'row',
      alignItems: 'center',
      padding: 10,
      flexWrap: 'wrap',
      justifyContent: 'space-between', 
  },
  username: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
  },
  email: {
      fontSize: 16,
      color: '#777',
  },
  image: {
      width: 100,
      height: 100,
      margin: 10,
  },
  videoContainer: {
      padding: 10,
      alignItems: 'center',
      position: 'relative',
      marginBottom: 20,
  },
  videoTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
  },
  videoViews: {
      fontSize: 16,
      color: '#666',
      marginVertical: 5,
  },
  videoThumbnail: {
      width: 150,
      height: 100,
      borderRadius: 8,
      marginBottom: 10,
  },
  playIconContainer: {
      flexDirection:'row',
      position: 'absolute',
      bottom: 10, // Positionné en bas
      right: 10,  // Positionné à droite
      borderRadius: 9999, // Pour donner un effet circulaire à l'arrière-plan
      padding: 5, // Espacement autour de l'icône
      gap:4,
  },
  logoutButton: {
      backgroundColor: '#ff4757',
      marginTop: 20,
  },

  profile: {
      padding: 24,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileAvatarWrapper: {
      position: 'relative',
    },
    profileAvatar: {
      width: 72,
      height: 72,
      borderRadius: 9999,
    },
    profileAction: {
      position: 'absolute',
      right: -4,
      bottom: -10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 9999,
      backgroundColor: '#007bff',
    },
    profileName: {
      marginTop: 20,
      fontSize: 19,
      fontWeight: '600',
      color: '#414d63',
      textAlign: 'center',
    },
    profileAddress: {
      marginTop: 5,
      fontSize: 16,
      color: '#989898',
      textAlign: 'center',
    },
    section: {
      paddingHorizontal: 24,
    },
    sectionTitle: {
      paddingVertical: 12,
      fontSize: 12,
      fontWeight: '600',
      color: '#FFFFFF',
      textTransform: 'uppercase',
      letterSpacing: 1.1,
    },
    /** Row */
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 50,
      backgroundColor: '#00000077',
      borderRadius: 8,
      marginBottom: 12,
      paddingHorizontal: 12,
    },
    rowIcon: {
      width: 32,
      height: 32,
      borderRadius: 9999,
      marginRight: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowLabel: {
      fontSize: 17,
      fontWeight: '400',
      color: '#fff',
    },
    deconnexionLabel: {
      fontSize: 17,
      fontWeight: '400',
      color: 'red',
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
});
