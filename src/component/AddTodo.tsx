import useAddTodo from '@/hooks/useAddTodo'

const AddTodo = () => {
  const { state, handlers } = useAddTodo()
  return (
    <div className="flex gap-1 rounded-sm border-2 p-5">
      <input
        className="block border-2"
        value={state.text}
        onChange={(e) => handlers.onChangeText(e.target.value)}
        onSubmit={handlers.AddTodo}
      />
      <div className="cursor-pointer rounded-md border-2 bg-gray-300 text-center hover:bg-gray-400 hover:text-white">
        <button onClick={handlers.AddTodo}>登録</button>
      </div>
    </div>
  )
}

export default AddTodo
