import { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { useRecoilState } from 'recoil';
import { sessionState } from '../lib/atoms'
import { useSession } from '../lib/auth'

export default function Layout({ children }: any) {
  const [session, setSession] = useRecoilState(sessionState)

  useEffect(() => {
    const localStorageSession: any = localStorage.getItem('session')
    console.log('this is the token man')
    console.log(localStorageSession)
    if (localStorageSession) {
      useSession(localStorageSession, setSession)
    }
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}