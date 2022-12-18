import '../styles/globals.css'
import Nav from '../components/navbar'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className='p-5 bg-veryDark h-screen overflow-y-auto'>
      <Nav />
      <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
