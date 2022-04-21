import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/Layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <h1>First Post</h1>
        <p className='card'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloremque, quidem quisquam, quisquam quisquam quisquam quisquam
          dignissimos.
        </p>
        <Link href="/">
          <a>Go to Home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default FirstPost;
