import Layout from '../View/components/Layout'
import { DataProvider } from '../Controller/store/GlobalState'
import '../View/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}

export default MyApp
