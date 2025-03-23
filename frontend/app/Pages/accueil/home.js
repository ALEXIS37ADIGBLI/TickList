import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import { useRouter } from 'expo-router';


const home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.haut}>
                <Text style={styles.hautText}>TickList</Text>
                <View style={styles.hautItem}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/Images/pp.jpg')}
                    />
                    <Text style={styles.hautItemText}>Alexis clever</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Search"
                        />
                </View>
            </View>
            <View style={styles.milieu}>
                <Text style={styles.hautText}>Mes tâches</Text>
                <View style={styles.milieuItem}>
                    <TouchableOpacity style={styles.milieuItemTache}>
                        <Text style={styles.tacheText}>Réviser demain</Text>
                        <View style={styles.etats}>
                            <Text style={styles.etat1}> </Text>
                            <Text style={styles.etatText}>Temps dépassé</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.milieuItemTache}>
                        <Text style={styles.tacheText}>Réviser demain</Text>
                        <View style={styles.etats}>
                            <Text style={styles.etat2}> </Text>
                            <Text style={styles.etatText}>Temps dépassé</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.milieuItemTache}>
                        <Text style={styles.tacheText}>Réviser demain</Text>
                        <View style={styles.etats}>
                            <Text style={styles.etat3}> </Text>
                            <Text style={styles.etatText}>Temps dépassé</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.milieuItemTache}>
                        <Text style={styles.tacheText}>Réviser demain</Text>
                        <View style={styles.etats}>
                            <Text style={styles.etat4}> </Text>
                            <Text style={styles.etatText}>Temps dépassé</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.milieuItemTache}>
                        <Text style={styles.tacheText}>Réviser demain</Text>
                        <View style={styles.etats}>
                            <Text style={styles.etat5}> </Text>
                            <Text style={styles.etatText}>Temps dépassé</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={styles.add}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bas}></View>
        </View>
    )
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E1738",
        justifyContent: 'space-around',
    },

    haut: {
        backgroundColor: "white",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: "100%",
        height: 169,
        marginBottom: 9,
        justifyContent: "center",
    },

    hautText: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 180,
    },

    hautItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },

    milieu: {
        width: "100%",
        height: 691,
        backgroundColor: "white",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginBottom: 10,
    },

    bas: {
        width: "100%",
        height: 72,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    input: {
        height: 47,
        width: 176,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 20,
        color: 'black',
    },
    image: {
        width: 72, 
        height: 72,
        borderRadius: 100,
    },
    hautItemText: {
        fontSize: 20,
        fontWeight: "bold",
    },

    add: {
        backgroundColor: "#599F23",
        width: 98,
        height: 92,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        marginLeft: "77%",
    },

    addText: {
        fontSize: 42,
        fontWeight: "bold",
        margin: 20,
        marginLeft: 40,

    },
    milieuItem: {

    },
    
    etat1: {
        backgroundColor: "#DE1D1D",
        width: 21,
        height: 20,
        borderRadius: 50,
    },
    etat2: {
        backgroundColor: "#67DE1D",
        width: 21,
        height: 20,
        borderRadius: 50,
    },
    etat3: {
        backgroundColor: "#DE9A1D",
        width: 21,
        height: 20,
        borderRadius: 50,
    },
    etat4: {
        backgroundColor: "#DE1D1D",
        width: 21,
        height: 20,
        borderRadius: 50,
    },
    etat5: {
        backgroundColor: "#67DE1D",
        width: 21,
        height: 20,
        borderRadius: 50,
    },

    etatText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
    },

    tacheText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 10,
        marginLeft: 10,

    },

    milieuItemTache: {
        backgroundColor: "#0E1738",
        borderRadius: 20,
        width: "100%",
        height: "88"
    },

    milieuItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
    },

    etats: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
    }
})

export default home;