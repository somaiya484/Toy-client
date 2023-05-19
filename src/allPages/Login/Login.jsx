import loginPhoto from '../../assets/login.jpg'


const Login = () => {
    const handleLogIn = (event) =>{
        event.preventDefault();

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
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-3">
                                    <input type="submit" value="Log In" className="btn bg-purple-700 hover:bg-transparent hover:border-purple-700 hover:text-black" />
                                </div>
                            </form>
                            <a href="#" className="label-text-alt link link-hover mt-5">New here? Then sign up </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;