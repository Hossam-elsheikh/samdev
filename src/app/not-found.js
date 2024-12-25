import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link href="/" style={{ textDecoration: 'none', color: 'blue' }}>
        Go Back Home
      </Link>
    </div>
  )
}
export default NotFound