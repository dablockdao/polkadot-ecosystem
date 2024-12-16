import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: () => z.object({
        description: z.string().optional(),
        category: z.enum([
          'governance', 
          'keynote', 
          'workshop', 
          'panel', 
          'xcm', 
          'infrastructure', // fixed typo here
          'UX', 
          'security', 
          'dapps', 
          'ecosystem'
        ]).optional(),
      }),
    }),
  }),
};
