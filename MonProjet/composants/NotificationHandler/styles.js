import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    customView: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: '80%',
    },
    header: {
        flexDirection: 'row',
        
      },
      close: {
        position: 'absolute',
        top: 7,
        right: 10,
      },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
      width:'100%',
      textAlign: 'center',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#555',
      textAlign: 'center',
      marginTop: 10,
    },
  });

  export default styles;