import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    formContainer: {
        backgroundColor: '#dfdfdfe2',
        width: '90%',
        padding: 10,
        gap: 10,
        borderRadius: 10,
        minHeight: 250,
        justifyContent: 'center',
    },
    formTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        color: '#4e4d4de2',
        padding: 10,
    },
    formItems: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    input: {
        padding: 5,
        width: '75%',
        marginLeft: 10,
    },
    submitContainer: {
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    submitText: {
        backgroundColor: 'blue',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        textAlign: 'center',
    },
    formInscrire: {
        alignSelf: 'center',
        color: '#4343d3',
        padding: 5,
        marginTop: 10,
    },
});
