import axios from 'axios'
import Config from 'react-native-config'
import { Notifier, NotifierComponents } from 'react-native-notifier'

const api = axios.create({
  baseURL: Config.WC_API_URL,
  auth: {
    username: Config.WC_CLIENT_KEY,
    password: Config.WC_SECRET_KEY
  },
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getAllProducts = async () => {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (e) {
    console.error(JSON.stringify(e))
    Notifier.showNotification({
      title: 'Une erreur est survenue, ah c\'est dommage',
      description: `Erreur réseau, t'es pas co gars !\n${e}`,
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: 'error'
      }
    })
  }
}

export { getAllProducts }
