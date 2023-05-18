import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../../src/assets/Custom-WordPress-404-Page-03.jpg'


const Error = () => {
    const { error, errorStatus: errorMessage } = useRouteError()
    return (
            <div className='flex  align-middle justify-center p-7 text-red-700'>
                <div>
                    <img src={errorImage} className='w-3/4 '/>
                </div>
                <div className='flex  align-middle justify-center px-5 mt-16'>
                    <div className=' text-center'>
                        <h2 className='mb-4  text-7xl text-purple-800'>
                            {errorMessage || 404}
                        </h2>
                        <p className=' text-2xl font-bold  mb-3'>
                            {error?.message}
                        </p>
                        <Link
                            to='/'
                            className='p-8 py-4 font-bold text-purple-800'
                        >
                            Back To The Home page
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default Error;