import useTodoList from '@/hooks/useTodoList'

type TodoList = {
  id: string
  text: string
  check: boolean
}[]

const TodoList = () => {
  const { data, handlers } = useTodoList()
  return (
    <div className="h-[calc(100vh_-_100px)] overflow-auto p-2">
      {data &&
        data.map((item, index) => {
          return (
            <div className=" flex  border-b p-3 last:border-b-0 " key={index}>
              <input
                type="checkbox"
                className="my-auto mx-0 w-10"
                checked={item.check}
                onChange={(evt) => handlers.onCheckTodo(item.id, evt.target.checked)}
              />
              <p className={item.check ? 'line-through' : ''}>{item.text}</p>
            </div>
          )
        })}
    </div>
  )
}

export default TodoList
