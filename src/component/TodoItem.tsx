import useTodoItem from '@/hooks/useTodoItem'

export type TodoItemProps = {
  id: string
  text: string
  check: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ check, id, text }) => {
  const { state, ref, handlers } = useTodoItem()
  return (
    <div className="flex border-b p-3 last:border-b-0 ">
      <input
        type="checkbox"
        className="my-auto mx-0 w-10"
        checked={check}
        onChange={(evt) => handlers.onCheckTodo(id, evt.target.checked)}
      />
      {state.isInput ? (
        <input
          type="text"
          value={state.inputText}
          className="border-2"
          onBlur={() => handlers.updateText(id)}
          onKeyDown={(evt) => {
            if (evt.key === 'Enter') {
              handlers.updateText(id)
            }
          }}
          onChange={(evt) => handlers.onChangeText(evt.target.value)}
          ref={ref.inputRef}
        />
      ) : (
        <p className={check ? 'line-through' : ''} onClick={() => handlers.onClickText(text)}>
          {text}
        </p>
      )}
    </div>
  )
}

export default TodoItem
