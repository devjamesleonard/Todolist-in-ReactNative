//import { StatusBar } from 'expo-status-bar';
//react native build compoents taht we ahve to use for the app
import React,{useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform,TextInput,TouchableOpacity, Keyboard, ScrollView, SafeAreaView,Dimensions} from 'react-native';
import Task from './components/Task';

//const {height} = Dimensions.get('window');
export default function App() {

  //is different in crome
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  /*
state = {
screenHeight: 0,
};
  onContentSizeChange=(contentWidth,contentHeight)=>{
this.setState({screenHeight:contentHeight});
  };
  */
  const handleAddTask=()=>{
    Keyboard.dismiss();
    if(task != null){
    setTaskItems([...taskItems,task])
    setTask(null);
    }
  }
  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
    //splice just remove the index element

  }
  //const scrollEnabled = this.state.screenHeight>height;
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView 
    //contentContainerStyle={styles.ScrollView}
    scrollEnabled={true}
    //onContentSizeChange={this.onContentSizeChange}
    >
      {/*Today's Tasks*/}
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}> Today's tasks</Text>

<View style ={styles.items}>{ 

taskItems.map((item,index)=>{
  return(<TouchableOpacity key={index} onPress={()=>completeTask(index)}><Task key={index} text={item}/></TouchableOpacity>)
})
}



</View>

      </View>
              {/*Write a task section */}
              </ScrollView>   
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
    <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}></TextInput>
    <TouchableOpacity onPress={()=>handleAddTask()}>
    <View style={styles.addWrapper}>
    <Text style={styles.addText}>
    </Text>
    </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    //overflowY: 'scroll',
    backgroundColor: '#b8fffa',
// should make a color file in assets or themes etc just for taking colors
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
sectionTitle:{
  fontSize: 24,
  fontWeight: 'bold'
},
items:{
marginTop:30
},
writeTaskWrapper:{
  position: 'absolute',
  bottom: 60,
  left: 10,
  width: '100%',
  flexDirection: 'row',
  justifyContent:'space-between',
  alignItems:'center'

},
input:{
  paddingVertical:15,
  width:250,
  paddingHorizontal: 15,
  background: '#FFF',
  borderRadius:60,
  borderColor:'#000',
  borderWidth:1,
  width:250,

},

addWrapper:{
  width:60,
  height: 60,
  backgroundColor: '#6eff9e' ,
  borderRadius: 60,
  right: 15,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#000',
  borderWidth: 1,

},
addText:{},
});
