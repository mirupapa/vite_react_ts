import AddTodo from '@/component/AddTodo'
import Header from '@/component/Header'
import LoadSpinner from '@/component/LoadSpinner'
import TodoList from '@/component/TodoList'
import { Suspense } from 'react'

const Index = () => {
  return (
    <div>
      <Header />
      <AddTodo />
      <Suspense fallback={<LoadSpinner />}>
        <TodoList />
      </Suspense>
    </div>
  )
}

export default Index
