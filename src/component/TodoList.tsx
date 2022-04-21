import useTodoList from '@/hooks/useTodoList'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { data } = useTodoList()
  return (
    <div className="h-[calc(100vh_-_100px)] overflow-auto p-2">
      {data &&
        data.map((item, index) => {
          return <TodoItem key={index} {...item} />
        })}
    </div>
  )
}

export default TodoList
