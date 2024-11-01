import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the Contact Us page.</p>
      <Link href="/">Go to Home</Link>
      <br />
      <Link href="/about">About Us</Link>
      <br />
      <Link href="/services">Our Services</Link>
    </div>
  );
};

export default Contact;
