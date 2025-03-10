import axios from 'axios'
import { Notifier, NotifierComponents } from 'react-native-notifier'

const api = axios.create({
  baseURL: 'https://artizanantes.com/wp-json/wc/v3',
  auth: {
    username: 'ck_fed7c4309c583a807a9f54e85d97d74788c98687',
    password: 'cs_82d3d40a5ea26ec983e4185d33516ec410339b45'
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
