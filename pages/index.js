import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../container/Header/Header'
import About from '../container/About/About'
import Skills from '../container/Skills/Skills'
import Work from '../container/Work/Work'
import Footer from '../container/Footer/Footer'
import Testimonials from '../container/Testimonials/Testimonials'
import { Navbar } from '../components'


export default function Home() {
  return (
    <div className={styles.app_container}>
      <Navbar />
      <Header />
      <Skills />
      {/* <About /> */}
      <Work />
   
      <Footer />
    </div>
  )
}
