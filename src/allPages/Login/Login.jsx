import { Link, useNavigate } from 'react-router-dom';
import loginPhoto from '../../assets/login.jpg'
import {  useContext, useState } from 'react';
import { AuthContext } from '../../authProviders/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Login = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!password) {
            setError("Password doesn't match")
        }
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            navigate('/')
            event.target.reset()
        })
        .catch(error => {
            setError("Sorry, Email/Password dose not match")
        })
    }

    const googleProvider = new GoogleAuthProvider();
    const handleWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const userone = result.user;
                setUser(userone)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={loginPhoto} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center p-5"><span className='text-purple-700'>Login</span> Now!</h1>

                        <div className="card-body">
                            <form onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" required/>
                                </div>
                                <p className='text-red-700 font-semibold mt-4'>{error}</p>
                                <div className="form-control mt-3">
                                    <input type="submit" value="Log In" className="btn bg-purple-700 hover:bg-transparent hover:border-purple-700 hover:text-black" />
                                </div>
                            </form>
                            <small className='text-center'>or</small>
                            <button onClick={handleWithGoogle} className='btn bg-transparent border-purple-700  border-2 text-purple-700 hover:bg-purple-700 hover:text-white' >Login With Google</button>


                            <Link to='/signUp'> <a href="#" className="label-text-alt link link-hover mt-5 text-purple-700 ">New here? Then sign up </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;