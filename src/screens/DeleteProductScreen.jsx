import { StyleSheet, View } from 'react-native'
import { deleteProduct } from '../services/wc-api'
import DeleteProductForm from '../components/form/DeleteProductForm'

function DeleteProductScreen ({ navigation }) {
  const handleSubmit = async (product) => {
    const result = await deleteProduct(product)
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <DeleteProductForm onSubmit={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  }
})

export default DeleteProductScreen
