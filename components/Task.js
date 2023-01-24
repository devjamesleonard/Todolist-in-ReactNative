import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
const Task = (props) => {

  return (
    <View style ={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>

</View>


  )
}

/*
    <View style ={styles.item}>
        <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}> </TouchableOpacity>don't space in between items with no room for elements
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}> </View>

    </View>*/
const styles = StyleSheet.create({
    item:{

        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems: 'center',
        flexWrap:'wrap'
       

    },
    square:{
width:24,
height:24,
backgroundColor: '#6eff9e',
opacity:.4,
borderRadius:5,
marginRight:15,

    },
    itemText:{
        maxWidth:'80%'
        //limits text so it doesn't push elemnts off screen


    },
    circular:{

        width: 12,
        height:12,
        borderColor: '#6eff9e',
        borderWidth: 2,
        borderRadius: 5,
    }

});
export default Task
