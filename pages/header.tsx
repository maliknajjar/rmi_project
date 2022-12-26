import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { sessionState } from '../lib/atoms'
import { useRouter } from 'next/router'
import { logout } from '../lib/auth'

export default function Header() {
  const [session, setSessionState] = useRecoilState(sessionState)
  const router = useRouter()

  function handleLogout() {
    logout(setSessionState)
    router.push('/')
  }

  return (
    <>
        <header>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact_us">Contact Us</Link>
          {session 
            ? <>
              <Link href="/profile">profile</Link> 
              <Link onClick={handleLogout} href="">logout</Link> 
            </>
            : <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          }
        </header>
    </>
  )
}