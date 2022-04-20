import Link from 'next/link';

const FirstPost = () => {
  return (
    <div>
      <h1>First Post</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quidem quisquam, quisquam quisquam quisquam quisquam
        dignissimos.
      </p>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  );
};

export default FirstPost;
