export const styles = {
    container: {
        // width: 250,
        height: 200,
        backgroundColor: '#f7f7f7',
        boxShadow: '5px 10px 10px -10px black',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 30,
        padding: 20,
    },
    imageContainer: {
        // flex: 1,
        width: 200,
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'justify',
        flex: 1,
        margin: 20
    },
    button: {
        padding: 5,
        height: 50,
        alignSelf: 'center',
        borderRadius: 25
    }
}