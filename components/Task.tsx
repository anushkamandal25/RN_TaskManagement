import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TaskProps {
  text: string;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#2a3eb1',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    // maxWidth: '80%',
    fontSize: 18,
    color: '#000000',
    fontFamily: 'helvetica'
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 15,
    marginRight: 15,
  },
});

export default Task;





// import React from 'react'
// import {
//     StyleSheet,
//     Text,
//     View,
//     Button,
//     Alert,
//   } from 'react-native';


//   const Task = (props) => { 

//     return (
//         <View style={styles.item}>
//             <View style={styles.itemLeft}>
//                 <View style={styles.square}></View>
//                 <Text style={styles.itemText}>{props.text}</Text>
//             </View>
//             {/* <View style={styles.circular}></View> */}
//             {/* <Button
//         title="X"
//         onPress={() => completeTask(index)}
//       /> */}
            
//         </View>
//     )
//   }

//   const styles = StyleSheet.create({
//     item: {
//         backgroundColor: '#FFFFFF',
//         padding: 15,
//         borderRadius: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: 20,
//     },
//     itemLeft: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         flexWrap: 'wrap',
//     },
//     square: {
//         width: 24,
//         height: 24,
//         backgroundColor: '#2a3eb1',
//         opacity: 0.4,
//         borderRadius: 5,
//         marginRight: 15,
//     },
//     itemText: {
//         maxWidth: '80%',
//     },
//     circular: {
//         width: 12,
//         height: 12,
//         borderColor: '#55BCF6',
//         borderWidth: 2,
//         borderRadius: 15,
//         marginRight: 15,
//     },
//   })

//   export default Task;  