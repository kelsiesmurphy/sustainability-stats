import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Layout from './Layout';
import { useState } from 'react';
import ReactJson from 'react-json-view';

const formSchema = z.object({
  website: z.string().min(2, {
    message: 'Must be a valid website URL.',
  }),
});

export default function APISearch() {
  const [jsonResponse, setJsonResponse] = useState<any>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      website: '',
    },
  });

  const getAPIResponse = async (url: string) => {
    try {
      const response = await fetch(
        `https://api.thegreenwebfoundation.org/api/v3/greencheck/${url}`
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    getAPIResponse(values.website).then((data) => setJsonResponse(data));
  }

  return (
    <Layout>
      <div className='flex max-w-xl flex-col gap-8'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='website'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website URL</FormLabel>
                  <FormControl>
                    <Input placeholder='https://...' {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter a valid website URL (e.g.
                    https://www.wikipedia.org/).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
        {jsonResponse ? (
          <ReactJson src={jsonResponse} collapseStringsAfterLength={5} />
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
}
