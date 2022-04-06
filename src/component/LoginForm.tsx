import React from 'react'

type Props = {
  formType: string
  email: string
  emailHandler: (val: string) => void
  password: string
  passwordHandler: (val: string) => void
  submit: () => void
}

const LoginForm: React.VFC<Props> = ({ formType, email, emailHandler, password, passwordHandler, submit }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-sm border-2 p-5">
        <div>
          <label>email</label>
          <input
            className="block border-2"
            value={email}
            onChange={(e) => emailHandler(e.target.value)}
            onSubmit={submit}
          />
        </div>
        <div className="mt-5">
          <label>password</label>
          <input
            className="block border-2"
            value={password}
            onChange={(e) => passwordHandler(e.target.value)}
            onSubmit={submit}
          />
        </div>
        <div className="mt-10 cursor-pointer rounded-md border-2 bg-gray-300 text-center hover:bg-gray-400 hover:text-white">
          <button onClick={submit}>{formType}</button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
