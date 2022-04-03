import React from 'react'
import useLogin from '@/hooks/useLogin'

const Login = () => {
  const { state, handlers } = useLogin()

  return (
    <div>
      <input
        width={200}
        value={state.email}
        onChange={(e) => handlers.onChangeEmail(e.target.value)}
        onSubmit={handlers.onClickLogin}
      />
      <input width={200} onChange={(e) => handlers.onChangePassword(e.target.value)} onSubmit={handlers.onClickLogin} />
      <div style={{ marginTop: 20 }}>
        <button onClick={() => handlers.onClickSignUp()}>SignUp</button>
      </div>
    </div>
  )
}

export default Login
