import { Button } from 'react-bootstrap';
import error from '../../assets/error404.png'
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <section className="mainSection text-center error404">
        <div className='bg-dark py-3'>
        <Link className='btn btn-dark' to={'/'}>Volver al inicio</Link>
        </div>
            <img className='error404'/>
        </section>
    );
};

export default Error404;