import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../../store/actions/auth'
import logo from './../../../assets/img/Shasthoboi.svg'
import { useHistory, Link } from 'react-router-dom'
import './login.scss'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox ,Alert} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const initialState = {
    mobile: '',
    passcode: '',
    isRemember: false,
    isLoading: false,
    errorMessage: '',
    errorShow: false,
    success: false,
    validated: false,
  }

  const [data, setData] = React.useState(initialState)

  const history = useHistory()

  useSelector(state => {
    if (state && state.auth.login.data) {
      history.push('/home');
    }
  })

  useSelector(state => {
    if (state.auth.login.error && !data.errorShow) {
      setData({
        ...data,
        errorShow: true,
        errorMessage: state.auth.login.error.message
      })
    }
  })

  const dispatch = useDispatch()

  const onFinish = values => {
    dispatch(login(values))
  };

  const onFinishFailed = errorInfo => {
    setData({
      ...data,
      isLoading: true,
      errorMessage: null,
      validated: false
    })
  };

  const handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    if (data.mobile && data.passcode) {
      setData({
        ...data,
        isLoading: true,
        errorMessage: null,
        validated: false
      })
      dispatch(login({ mobile: data.mobile, passcode: data.passcode }))
    } else {
      setData({
        ...data,
        validated: true
      })
    }
  }

  const openPrivacy = () =>{
    window.open('/privacy-policy.html')
  }

  const openUserNotice = () =>{
    window.open('/user-notice.html')
  }

  const rememberMe = JSON.parse(localStorage.getItem('remember'))

  const mobile = rememberMe ? rememberMe.mobile : ""
  const passcode = rememberMe ? rememberMe.passcode : ""
  const remember = rememberMe ? rememberMe.remember : false

  return (
    <>
      <div className="Login">
      <div className="login-logo">
            <div className="logoBox">
              <img src={logo} style={{ width: '100%', height: '100%' }} alt='Logo' />
            </div>
          </div>

        <div className="login-box">
         <div className="login-box-title">
           <p>Log in to access your স্বাস্থ্যবই</p>
         </div>
         {data.errorMessage ? (
              <Alert
              message="Error!"
              description={data.errorMessage ? data.errorMessage : 'Login Failed'}
              type="error"
            />
              ) : (
                <div></div>
              )}
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{ mobile, passcode, remember }}
          >
            <label>Enter your mobile number eg.01171100999</label>
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: 'Please input your mobile!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <label>Enter your access code (sent via SMS)</label>
            <Form.Item
              name="passcode"
              rules={[
                {
                  required: true,
                  message: 'Please input your passcode!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox> Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button  className="button" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>

        </div>

        <div class="sc-brqgnP leMZIk" color="#6B778C">
          <div>
            <ul class="fine-print">
              <li>
                <a onClick={openPrivacy}
                ><span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a onClick={openUserNotice} >
                  <span>User Notice</span>
                </a>
              </li>
            </ul></div>
        </div>

        {/* <Form noValidate validated={data.validated} onSubmit={handleSubmit}>
              <span className={classes.formTitle}>Login to your account</span>
              {data.errorMessage ? (
                <div className='alert alert-danger input100 alert-dismissible show'>
                  <h4 className='alert-heading'>
                    <FontAwesomeIcon icon={faExclamationTriangle} /> Error!
                  </h4>
                  <p>
                    {data.errorMessage ? data.errorMessage : 'Login Failed'}
                  </p>
                  <button type='button' className='close' data-dismiss='alert'>
                    &times;
                  </button>
                </div>
              ) : (
                <div></div>
              )}
              <div className={classes.loginForm}>
                <Form.Group>
                  <label>Enter your mobile number eg. 0171100888</label>
                  <Form.Control
                    required
                    type='text'
                    name='mobile'
                    onChange={handleInputChange}
                    value={data.mobile}
                  />
                  <Validation errMsg='Mobile number is required.' />
                </Form.Group>

                <Form.Group>
                  <div className='pt-2'>
                    <label>Enter your access code (sent via SMS)</label>
                  </div>
                  <Form.Control
                    required
                    type='password'
                    name='passcode'
                    onChange={handleInputChange}
                    value={data.passcode}
                  />
                  <Validation errMsg='Passcode is required.' />
                </Form.Group>

                <Form.Group
                  controlId='formBasicCheckbox'
                  className={classes.checkGroup}
                >
                  <Form.Check
                    required
                    id='ckb1'
                    type='checkbox'
                    label='Keep me logged in for one week'
                    feedback='You must agree before submitting.'
                  />
                </Form.Group>

                <div className={classes.loingBtn}>
                  <Button
                    className='btn btn-primary w-100'
                    // disabled={!data.mobile && !data.passcode}
                    onClick={handleSubmit}
                  >
                    LogIn
                  </Button>
                </div>
              </div>
            </Form> */}
      </div>

    </>
  )
}

export default Login
