import Link from 'next/link';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <p>This is the Services page.</p>
      <Link href="/services/app-development">App Development</Link>
      <br />
      <Link href="/services/website-development">Website Development</Link>
      <br />
      <Link href="/">Go to Home</Link>
      <br />
      <Link href="/about">About Us</Link>
      <br />
      <Link href="/contact">Contact Us</Link>
    </div>
  );
};

export default Services;
