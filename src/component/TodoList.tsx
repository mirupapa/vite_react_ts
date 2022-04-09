import useSWR from 'swr'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@/util/firebase'

const fetcher = async () => {
  const q = query(collection(db, 'todo'))
  const querySnapshot = await getDocs(q)
  const result: string[] = []
  querySnapshot.forEach((doc) => {
    result.push(doc.data().text)
  })
  return result
}

const TodoList = () => {
  const { data, error } = useSWR('todo_list', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div className="p-5">
      {data.map((text, index) => {
        return <div key={index}>{text}</div>
      })}
    </div>
  )
}

export default TodoList
