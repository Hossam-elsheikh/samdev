import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link href="/" className='text-xl text-blue-600' style={{ textDecoration: 'none'}}>
        Go Back Home
      </Link>
    </div>
  )
}
export default NotFound