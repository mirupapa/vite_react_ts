import { db } from '@/util/firebase'
import useSWR from 'swr'
import { FETCH_TODO_LIST, FIREBASE_COLLECTION_TODO } from '@/util/define'
import { collection, query, getDocs, getDoc, doc, updateDoc, where } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

type TodoList = {
  id: string
  text: string
  check: boolean
}[]

const useTodoList = () => {
  const navigate = useNavigate()

  const getTodoList = async (): Promise<TodoList> => {
    const result: TodoList = []
    const auth = getAuth()
    const user = auth.currentUser
    if (user !== null) {
      const q = query(collection(db, FIREBASE_COLLECTION_TODO), where('uid', '==', user.uid))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        result.push({ id: doc.id, text: doc.data().text, check: doc.data().check || false })
      })
    } else {
      navigate('/login')
    }

    return result
  }

  const { data, mutate } = useSWR<TodoList>(FETCH_TODO_LIST, getTodoList, { suspense: true })

  const onCheckTodo = async (id: string, isCheck: boolean) => {
    const auth = getAuth()
    const user = auth.currentUser
    if (user !== null) {
      const docRef = doc(db, FIREBASE_COLLECTION_TODO, id)
      await updateDoc(docRef, {
        check: isCheck,
      })
      await mutate()
    } else {
      navigate('/login')
    }
  }

  return {
    data,
    handlers: {
      onCheckTodo,
    },
  }
}

export default useTodoList
