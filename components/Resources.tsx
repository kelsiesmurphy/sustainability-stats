import Layout from './Layout';
import { Resources as resourcesData } from '@/data/Resources';

const Resources = () => {
  return (
    <Layout>
      <div className='space-y-6 text-lg'>
        <h2 className='text-xl font-semibold md:text-2xl'>Resources</h2>
        <ul className='list-inside list-disc space-y-2'>
          {resourcesData.map((resource) => {
            return (
              <li>
                ({resource.type}) -{' '}
                <a
                  className='hover:underline'
                  href={resource.link}
                  target='_blank'
                >
                  {resource.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Resources;
