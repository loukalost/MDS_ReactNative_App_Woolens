import { Image, Text, TouchableOpacity } from 'react-native'
import { productsListItemStyle } from './ProductsListStyle'

function ProductsListItem ({ product, onLongPress }) {
  return (
    <TouchableOpacity onLongPress={() => onLongPress(product)} styles={productsListItemStyle.productContainer}>
      <Image src={product?.images[0]?.src} style={productsListItemStyle.image} />
      <Text>{product?.name}</Text>
      <Text>{product?.price === '' ? 'Free' : product?.price + ',99 €'}</Text>
    </TouchableOpacity>
  )
}

export default ProductsListItem
