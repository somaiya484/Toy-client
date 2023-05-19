import signUpPhoto from '../../assets/login.jpg'
import { Link } from 'react-router-dom';


const Signup = () => {
    const handleSignUp = (event) =>{
        event.preventDefault();

    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={signUpPhoto} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center p-5"><span className='text-purple-700'>Sign Up</span></h1>

                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-3">
                                    <input type="submit" value="Sign Up" className="btn bg-purple-700 hover:bg-transparent hover:border-purple-700 hover:text-black" />
                                </div>
                            </form>
                           <Link to='/login'> <a href="#" className="label-text-alt link link-hover mt-5 text-purple-700 ">Already have an account? Then login </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;