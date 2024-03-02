import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import react from "@astrojs/react";


export default defineConfig({
  integrations: [tailwind(), react(),mdx()],
  markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	}
});



