import { Header, Footer } from '../components';

import { TaskProvider } from '../contexts/TaskContext';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <TaskProvider>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </TaskProvider>
    </>
  )
}

export default MyApp
