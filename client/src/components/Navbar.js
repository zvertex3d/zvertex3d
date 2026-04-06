import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='nav'>
      <h2>Zvertex3D</h2>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/upload'>Upload</Link>
        <Link to='/order'>Order</Link>
      </div>
    </nav>
  );
}