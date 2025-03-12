import { StyleSheet } from 'react-native'

export const productsListStyle = StyleSheet.create({
  container: {
    width: '85%',
    marginHorizontal: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    rowGap: 5
  }
})

export const productsListItemStyle = StyleSheet.create({
  productContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8
  }
})
