const Newsletter = () => {
    return (
        <form className='form'>
            <h4 style={{textAlign:'center', marginBottom:'2rem'}}>
                our newsletter
            </h4>
            {/*name*/}
            <div className='form-row'>
                <label htmlFor="name" className='form-label'>name</label>
                <input type='text' name='name' id='name' defaultValue='john' className='form-input' />
            </div>
            {/*lastName*/}
            <div className='form-row'>
                <label htmlFor="name" className='form-label'>lastName</label>
                <input type='text' name='lastName' id='lastName' defaultValue='smith' className='form-input' />
            </div>
            {/*email*/}
            <div className='form-row'>
                <label htmlFor="name" className='form-label'>name</label>
                <input type='text' name='email' id='email' defaultValue='john' className='form-input' />
            </div>
        </form>
    )
}
export default Newsletter;