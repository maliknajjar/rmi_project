import { cbWSClient, cbws } from '../lib/cbws'

export const useSession = (session: any, setSession: any) => {
    localStorage.setItem("session", session);
    cbws._sessionid = session
    setSession(session)
}

export const logout = (setSessionState: any) => {
    localStorage.removeItem('session')
    setSessionState(null)
}