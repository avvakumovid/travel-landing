import { defineCollection, z } from "astro:content";

const screensCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    paragraphs: z.array(z.string()),
    backgroundUrl: z.string(),
  }),
});

export const collections = {
  screens: screensCollection,
};
