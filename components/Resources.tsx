import { Resources as resourcesData } from '@/data/Resources';

const Resources = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='text-md space-y-6 md:text-xl'>
        <h2 className='text-xl font-semibold md:text-2xl'>Resources</h2>
        <ul className='list-outside list-disc space-y-2 pl-4'>
          {resourcesData.map((resource, index) => {
            return (
              <li key={index}>
                <p>
                  <span className='font-medium'>{resource.type}</span> -{' '}
                  <a
                    className='hover:underline'
                    href={resource.link}
                    target='_blank'
                  >
                    {resource.name}
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
