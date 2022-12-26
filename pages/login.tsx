import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { cbWSClient, cbws } from '../lib/cbws'
import { useRecoilState } from 'recoil';
import { sessionState } from '../lib/atoms'
import { useSession } from '../lib/auth'

export default function Login() {
  const router = useRouter()
  const [session, setSession] = useRecoilState(sessionState)

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()
    // getting form data
    const formData: FormData = new FormData(e.target as HTMLFormElement)
    const username = formData.get('username')
    const password = formData.get('password')

    try {
      const res = await cbws.doLogin(username, password)
      useSession(res.result.sessionName, setSession)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={submitHandler} action="/action_page.php">
        <label htmlFor="username">User Name</label><br />
        <input type="text" id="username" name="username" defaultValue="admin" /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" name="password" defaultValue="cdYTBpiMR9RfGgO" /><br /><br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </>
  )
}
