import Link from 'next/link';

const WebsiteDevelopment = () => {
  return (
    <div>
      <h1>Website Development Services</h1>
      
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

export default WebsiteDevelopment;
