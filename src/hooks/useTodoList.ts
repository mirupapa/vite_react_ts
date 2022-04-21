import { auth, db } from '@/util/firebase'
import useSWR from 'swr'
import { FETCH_TODO_LIST, FIREBASE_COLLECTION_TODO } from '@/util/define'
import { collection, query, getDocs, doc, updateDoc, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/context/authContext'
import { TodoItemProps } from '@/component/TodoItem'

const useTodoList = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const getTodoList = async (): Promise<TodoItemProps[]> => {
    const result: TodoItemProps[] = []
    if (user) {
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

  const { data } = useSWR<TodoItemProps[]>(FETCH_TODO_LIST, getTodoList, { suspense: true })

  return {
    data,
  }
}

export default useTodoList
