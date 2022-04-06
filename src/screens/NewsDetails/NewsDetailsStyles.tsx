import { BackHandler, StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    image: {
        height: 200,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10
    },
    authorText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingTop: 10
    },
    dateText: {
        fontSize: 12,
        fontWeight: 'normal',
        textAlign: 'right' 
    },
    contentText: {
        fontSize: 15,
        fontWeight: 'normal', 
        paddingTop: 10
    }
})