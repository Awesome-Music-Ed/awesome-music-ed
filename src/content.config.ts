import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				createdBy: z.string().optional(),
				submittedBy: z.string().optional(),
				url: z.string().url().optional(),
			}),
		}),
	}),
};
