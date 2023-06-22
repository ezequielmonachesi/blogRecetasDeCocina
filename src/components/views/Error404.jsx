import error from '../../assets/error404.png'
import errorSm from '../../assets/error404sm.png'
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <section className="mainSection text-center bg-dark">
        <div className='bg-dark py-3'>
        <Link className='btn btn-dark' to={'/'}>Volver al inicio</Link>
        </div>
        <div>
            <img src={error} alt="error" className='w-100 d-none d-md-block'/>
            <img src={errorSm} alt="error" className='w-100 d-md-none'/>
        </div>
        </section>
    );
};

export default Error404;