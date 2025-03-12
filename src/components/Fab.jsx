import Icon from '@react-native-vector-icons/material-design-icons'
import { StyleSheet, TouchableOpacity } from 'react-native'

function Fab ({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={fabStyle.button}>
      <Icon name='plus' size={30} style={fabStyle.icon} />
    </TouchableOpacity>
  )
}

const fabStyle = StyleSheet.create({
  container: {
    position: 'relative'
  },
  button: {
    backgroundColor: '#666',
    zIndex: 1000,
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 10,
    borderRadius: 50
  },
  icon: {
    color: '#fff'
  }
})

export default Fab
