const APIResponse = ({
  jsonResponse,
  websiteUrl,
}: {
  jsonResponse: any;
  websiteUrl: string | null;
}) => {
  return (
    <div className='space-y-4'>
      {jsonResponse.green ? (
        <div className='rounded-xl bg-green-400/30 p-4'>
          <p>
            <a href={websiteUrl!} target='_blank'>
              {websiteUrl}
            </a>{' '}
            is running on green energy (
            <a href={jsonResponse.hosted_by_website} target='_blank'>
              {jsonResponse.hosted_by}
            </a>
            )
          </p>
          <h3>Supporting documents:</h3>
          <ul className='list-inside list-disc'>
            {jsonResponse.supporting_documents.map((document: any) => {
              return (
                <li>
                  <a className='hover:underline' href={document.link}>
                    {document.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className='rounded-xl bg-slate-400/30 p-4'>
          <p>
            The Green Web Foundation could not find any data saying it is running
            on green energy.
          </p>
        </div>
      )}
      <p className='text-sm text-slate-600'>
        API Source:{' '}
        <a
          href='https://developers.thegreenwebfoundation.org/api/greencheck/v3/check-single-domain/'
          target='_blank'
        >
          The Green Web Foundation
        </a>
      </p>
    </div>
  );
};

export default APIResponse;
