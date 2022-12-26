import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cbWSClient, cbws } from '../lib/cbws'
import { useRecoilState } from 'recoil';
import { sessionState } from '../lib/atoms'
import { logout } from '../lib/auth'

export default function Profile() {
  const [session, setSessionState] = useRecoilState(sessionState)
  const [data, setData] = useState({});

  useEffect( () => {
    cbws.doRetrieve(74).then((v) => {
      setData(v)
    }).catch((err) => {
      console.log(err)
      logout(setSessionState)
    })
  }, [])

  if (session == null) {
    return (
      <div>
        <div>you are not allowed to access this page</div>
        <div>you should sign in</div>
      </div>
    )
  } else {
    return (
      <div>
        <div>this is the profile page</div>
        <div>{JSON.stringify(data)}</div>
      </div>
    )
  }
}