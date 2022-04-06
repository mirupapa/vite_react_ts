import useLogin from '@/hooks/useLogin'
import LoginForm from '@/component/LoginForm'

const Login = () => {
  const { state, handlers } = useLogin()

  return (
    <LoginForm
      formType="Login"
      email={state.email}
      emailHandler={handlers.onChangeEmail}
      password={state.password}
      passwordHandler={handlers.onChangePassword}
      submit={handlers.onClickLogin}
    />
  )
}

export default Login
