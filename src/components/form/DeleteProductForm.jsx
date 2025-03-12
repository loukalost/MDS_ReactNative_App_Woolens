import { StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { deleteValidator } from '../../utils/validators/validators'
import DeleteModal from './inputs/DeleteModal'

function DeleteProductForm ({ onSubmit }) {
  const [product, setProduct] = useState({ id: 1 })
  const [errors, setErrors] = useState(null)
  const handlePress = () => {
    const errors = deleteValidator(product)
    if (!errors.name && !errors.price && !errors.short_description) {
      onSubmit(product)
    } else {
      setErrors(errors)
    }
  }

  return (
    <View style={styles.container}>
      <DeleteModal onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    gap: 15,
    paddingVertical: 30,
    paddingHorizontal: 15
  }
})

export default DeleteProductForm
