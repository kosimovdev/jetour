import './spinner.css'
const Spinner = () => {
    return (
        <div className='w-full min-h-screen grid place-content-center absolute top-0 left-0 bg-black'>
            <div className="loader">Loading...</div>
        </div>
    );
};

export default Spinner;