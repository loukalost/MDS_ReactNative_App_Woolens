import { useLinkBuilder } from '@react-navigation/native'
import { PlatformPressable } from '@react-navigation/elements'
import { StyleSheet, View } from 'react-native'
import Icon from '@react-native-vector-icons/material-design-icons'

const icons = {
  Products: 'cart',
  Camera: 'camera',
  Profile: 'account'
}

function TabBar ({ state, descriptors, navigation }) {
  const { buildHref } = useLinkBuilder()

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}
          >
            <Icon name={`${isFocused ? icons[route.name] : icons[route.name] + '-outline' || 'progress-question'}`} size={30} />
          </PlatformPressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  }
})

export default TabBar
