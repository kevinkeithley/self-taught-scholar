import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Four Schools taxonomy for The Self-Taught Scholar
const schoolEnum = z.enum(['pattern-and-play', 'story-and-expression', 'society-and-self', 'making']);

// Domain enum - predefined domains per school
const domainEnum = z.enum([
	// Pattern & Play
	'mathematics',
	'probability',
	'systems-thinking',
	'game-theory',

	// Story & Expression
	'writing',
	'rhetoric',
	'mythology',
	'visual-communication',

	// Society & Self
	'psychology',
	'philosophy',
	'ethics',
	'behavioral-economics',

	// Making
	'web-development',
	'design',
	'craft',
	'publishing',
]);

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const essays = defineCollection({
	loader: glob({ base: './src/content/essays', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			school: schoolEnum.optional(),
			relatedEssays: z.array(z.string()).optional(),
		}),
});

const courses = defineCollection({
	loader: glob({ base: './src/content/courses', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			courseSlug: z.string(),
			courseTitle: z.string(),
			lessonOrder: z.number(),
			heroImage: image().optional(),
			school: schoolEnum.optional(),
			estimatedMinutes: z.number().optional(),
			prerequisites: z.array(z.string()).optional(),
			isPaid: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

const library = defineCollection({
	loader: glob({ base: './src/content/library', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			school: schoolEnum,
			domain: domainEnum,
			difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
			relatedAtoms: z.array(z.string()).optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { blog, essays, courses, library };
