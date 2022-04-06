import useLogin from '@/hooks/useLogin'
import LoginForm from '@/component/LoginForm'

const SignUp = () => {
  const { state, handlers } = useLogin()

  return (
    <LoginForm
      formType="SignUp"
      email={state.email}
      emailHandler={handlers.onChangeEmail}
      password={state.password}
      passwordHandler={handlers.onChangePassword}
      submit={handlers.onClickSignUp}
    />
  )
}

export default SignUp
