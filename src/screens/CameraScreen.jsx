import { Alert, StyleSheet } from 'react-native'
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera'

function CameraScreen () {
  const device = useCameraDevice('back')
  const { hasPermission } = useCameraPermission()

  const PermissionAlert = () =>
    Alert.alert('Problème de permission', 'Vous n\'avez pas la permission pour ouvrir la caméra de cet appareil', [
      {
        text: 'Annuler',
        onPress: () => console.log('Cancel'),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => console.log('OK') }
    ])

  const NoCameraDeviceError = () => {
    Alert.alert('Problème de connexion', 'Votre caméra n\'est pas connectée', [
      {
        text: 'Annuler',
        onPress: () => console.log('Cancel'),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => console.log('OK') }
    ])
  }

  if (!hasPermission) return <PermissionAlert />
  if (device == null) return <NoCameraDeviceError />
  return (
    <Camera
      style={styles.absoluteFill}
      device={device}
      isActive
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

export default CameraScreen
