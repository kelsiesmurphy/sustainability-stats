import Layout from './Layout';

const Intro = () => {
  return (
    <Layout>
      <div className='max-w-2xl space-y-4'>
        <h1 className='text-2xl font-semibold text-slate-700 md:text-3xl'>
          Sustainable Software Engineering
        </h1>
        <h2 className='text-slate-500'>
          Software that is responsible for emitting fewer greenhouse gases.
          <br /> We can achieve this by striving to be efficient with our energy
          usage, efficient with our use of hardware, and aware of our carbon
          emissions.
        </h2>
      </div>
    </Layout>
  );
};

export default Intro;
