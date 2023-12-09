import LoginForm from '../components/loginForm/LoginForm'
import Styles from './login.module.css'
const Login = () => {
  return (
    <div className={Styles.container}>
      <LoginForm />
    </div>
  )
}

export default Login