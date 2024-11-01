import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page.</p>
      <Link href="/">Go to Home</Link>
      <br />
      <Link href="/contact">Contact Us</Link>
      <br />
      <Link href="/services">Our Services</Link>
    </div>
  );
};

export default About;
