export const styles = {
    container: {
        width: 250,
        height: 420,
        backgroundColor: '#f7f7f7',
        boxShadow: '5px 10px 10px -10px black',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 30,
        padding: 20,
    },
    imageContainer: {
        // flex: 1,
        height: 300,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        display: 'flex',
        padding: 5,
    },
    image: {
        maxHeight: 300,
        width: '100%',
        borderRadius: 30,
        objectFit: 'contain',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
    },
    button: {
        marginTop: 10,
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
}