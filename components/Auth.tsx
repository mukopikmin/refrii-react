import { FC, createContext, useEffect, useState } from 'react'
import firebaseUtil from '../utils/firebase'

type AuthContextProps = {
  currentUser: firebaseUtil.User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    firebaseUtil.User | null | undefined
  >(undefined)

  useEffect(() => {
    firebaseUtil.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)

      user?.getIdTokenResult()?.then((result) => {
        const token = result?.token

        if (token) {
          localStorage.setItem('token', token)
        }
      })
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
