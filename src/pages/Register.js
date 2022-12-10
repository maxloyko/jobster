import {useState, useEffect} from 'react';
import Wrapper from "../assets/wrappers/RegisterPage";
import {Logo, FormRow} from '../components'
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, registerUser} from "../features/user/userSlice";
import {useNavigate} from "react-router-dom";

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false
}

const Register = () => {
    const [values, setValues] = useState(initialState)
    const {user, isLoading} = useSelector(store => store.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, email, password, isMember} = values;
        if (!email || !password || (!name && !isMember)) {
            toast.error('fill out all fields')
            return;
        }

        if (isMember) {
            dispatch(loginUser({email, password}))
            return;
        }

        dispatch(registerUser({email, name, password}))

    }

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])
    return (
        <Wrapper className={'full-page'}>
            <form className={'form'} onSubmit={handleSubmit}>
                <Logo/>
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {!values.isMember && (
                    <FormRow
                        name={'name'}
                        type={'text'}
                        value={values.name}
                        handleChange={handleChange}
                    />)
                }
                <FormRow
                    name={'email'}
                    type={'email'}
                    value={values.email}
                    handleChange={handleChange}
                />
                <FormRow
                    name={'password'}
                    type={'password'}
                    value={values.password}
                    handleChange={handleChange}
                />
                <button type='submit' className={'btn btn-block'} disabled={isLoading}>
                    {isLoading ? 'loading...' : 'submit' }
                </button>
                <button type='button' className={'btn btn-block btn-hipster'}
                        disabled={isLoading}
                        onClick={() => dispatch(loginUser({email:process.env.REACT_APP_DEMO_EMAIL, password: process.env.REACT_APP_DEMO_PASSWORD}))}
                >
                    {isLoading ? 'loading...' : 'demo app' }
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type={'button'} onClick={toggleMember} className={'member-btn'}>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;