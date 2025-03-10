import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductsNavigator from './ProductsNavigator'
import ProfileNavigator from './ProfileNavigator'
import TabBar from './TabBar'
import CameraNavigator from './CameraNavigator'

const Tabs = createBottomTabNavigator()

function MainNavigator () {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen icon='cart' name='Products' component={ProductsNavigator} />
      <Tabs.Screen icon='camera' name='Camera' component={CameraNavigator} />
      <Tabs.Screen icon='account' name='Profile' component={ProfileNavigator} />
    </Tabs.Navigator>
  )
}

export default MainNavigator
