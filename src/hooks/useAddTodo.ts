import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/util/firebase'
import dayjs from 'dayjs'
import { getAuth } from '@firebase/auth'
import { useNavigate } from 'react-router-dom'

const useAddTodo = () => {
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const onChangeText = (value: string) => setText(value)

  const AddTodo = async () => {
    try {
      const auth = getAuth()
      const user = auth.currentUser
      if (user) {
        const id = dayjs().format('YYYYMMDDHHmmss')
        await setDoc(doc(db, 'todo', id), { text })
      } else {
        navigate('/login')
      }
    } catch (err) {
      if (err instanceof Error) {
        alert('エラー')
      } else {
        alert(err)
      }
    }
  }

  return {
    state: {
      text,
    },
    handlers: {
      AddTodo,
      onChangeText,
    },
  }
}

export default useAddTodo
