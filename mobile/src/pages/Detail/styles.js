import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 24,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 14,
    },

    incidentValue: {
        marginTop: 6,
        fontSize: 15,
        color: '#737380',
    },

    contactBox: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#13131a",
        lineHeight: 20,
    },

    heroTitle2: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#131310",
        lineHeight: 18,
    },

    heroDescription: {
        fontSize: 14,
        color: '#737380',
        marginTop: 10,
    },

    actions: {
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 44,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});