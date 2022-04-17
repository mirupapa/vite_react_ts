import AddTodo from '@/component/AddTodo'
import LoadSpinner from '@/component/LoadSpinner'
import TodoList from '@/component/TodoList'
import { Suspense } from 'react'

const Index = () => {
  return (
    <div>
      <AddTodo />
      <Suspense fallback={<LoadSpinner />}>
        <TodoList />
      </Suspense>
    </div>
  )
}

export default Index
