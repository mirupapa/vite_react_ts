import { useAuthContext } from '@/context/authContext'
import { FETCH_TODO_LIST, FIREBASE_COLLECTION_TODO } from '@/util/define'
import { db } from '@/util/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSWRConfig } from 'swr'

const useTodoItem = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const { mutate } = useSWRConfig()
  const [isInput, setIsInput] = useState(false)
  const [inputText, setInputText] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const onCheckTodo = async (id: string, isCheck: boolean) => {
    if (user !== null) {
      const docRef = doc(db, FIREBASE_COLLECTION_TODO, id)
      await updateDoc(docRef, {
        check: isCheck,
      })
      await mutate(FETCH_TODO_LIST)
    } else {
      navigate('/login')
    }
  }
  const onClickText = (text: string) => {
    setInputText(text)
    setIsInput(true)
  }
  const onChangeText = (value: string) => {
    setInputText(value)
  }
  const updateText = async (id: string) => {
    if (user !== null) {
      const docRef = doc(db, FIREBASE_COLLECTION_TODO, id)
      await updateDoc(docRef, {
        text: inputText,
      })
      await mutate(FETCH_TODO_LIST)
      setInputText('')
      setIsInput(false)
    } else {
      navigate('/login')
    }
  }

  useEffect(() => {
    if (isInput) {
      inputRef.current?.focus()
    }
  }, [isInput])

  return {
    state: {
      isInput,
      inputText,
    },
    ref: {
      inputRef,
    },
    handlers: {
      onCheckTodo,
      onClickText,
      onChangeText,
      updateText,
    },
  }
}

export default useTodoItem
