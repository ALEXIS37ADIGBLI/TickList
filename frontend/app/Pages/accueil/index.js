import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useRouter } from 'expo-router'; 
import Animated, { 
    useSharedValue, 
    withTiming, 
    useAnimatedStyle, 
    Easing 
} from "react-native-reanimated";


const index = () => {
    const router = useRouter(); // Initialisation de router
    const opacity = useSharedValue(1);

    const handlePress = () => {
        // Animation pour faire disparaître le contenu
        opacity.value = withTiming(0, {
            duration: 500,
            easing: Easing.ease,
        });
    
        // Utiliser un setTimeout pour attendre la durée de l'animation
        setTimeout(() => {
            if (opacity.value === 0) { // Vérifie si l'animation a atteint 0
                router.push('/Pages/login/login'); // Navigation
            }
        }, 500); // La même durée que l'animation
    };

    // Style de l'animation
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        };
    });



    return(
        <Animated.View style={[styles.container, animatedStyle]}>
            <View style={styles.appContainer}>
                <View>
                    <Text style={styles.welcomeText}>WELCOME TO TICKLIST</Text>
                </View>

                <View>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/Images/TickList.png')}
                    />
                </View>

                <View>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handlePress}
                    >
                        <Text style={styles.buttonText}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Animated.View>
    );
};


styles = StyleSheet.create({


    container: {
        flex: 1,
    },
    appContainer: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    welcomeText: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 40,
    },
    button: {
        backgroundColor: "blue", 
        padding: 15,
        borderRadius: 50,
        marginTop: 20,
        alignItems: "center",
        width: 200,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    image: {
        width: 200, 
        height: 200,
        borderRadius: 100,
        marginBottom: 40,
    }

})

export default index;