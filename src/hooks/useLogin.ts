import { useState } from 'react'
import { auth } from '@/util/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onChangeEmail = (value: string) => setEmail(value)
  const onChangePassword = (value: string) => setPassword(value)

  const onClickLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      if (auth.currentUser) {
        if (auth.currentUser.emailVerified) {
          alert('login')
          navigate('/')
        } else {
          await sendEmailVerification(auth.currentUser)
          alert('まだメールアドレスの確認が取れてません。登録されたメールアドレスに、確認用リンクを送信しました。')
        }
      } else {
        alert('Error')
      }
    } catch (err) {
      if (err instanceof Error) {
        alert('ログインエラー')
      } else {
        alert(err)
      }
    }
  }

  const onClickSignUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser)
        alert('登録されたメールアドレスに、確認用リンクを送信しました。')
      }
    } catch (err) {
      alert('サインアップエラー')
    }
  }

  return {
    state: {
      email,
      password,
    },
    handlers: {
      onClickLogin,
      onClickSignUp,
      onChangeEmail,
      onChangePassword,
    },
  }
}

export default useLogin
