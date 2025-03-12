/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import MainNavigator from './navigation/MainNavigator'
import { NotifierWrapper } from 'react-native-notifier'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BootSplash from 'react-native-bootsplash'

const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#222222'
  }
}

function App () {
  return (
    <GestureHandlerRootView>
      <NotifierWrapper>
        <NavigationContainer
          theme={mainTheme}
          onReady={() => {
            BootSplash.hide({ fade: true })
          }}
        >
          <MainNavigator />
        </NavigationContainer>
      </NotifierWrapper>
    </GestureHandlerRootView>
  )
}

export default App
