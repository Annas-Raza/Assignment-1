import Link from 'next/link';

const AppDevelopment = () => {
  return (
    <div>
      <h1>App Development Services</h1>
      <p>This our App Development Page</p>
      
      <Link href="/services">Back to Services</Link>
      <br />
      <Link href="/">Go to Home</Link>
      <br />
      <Link href="/about">About Us</Link>
      <br />
      <Link href="/contact">Contact Us</Link>
    </div>
  );
};

export default AppDevelopment;
