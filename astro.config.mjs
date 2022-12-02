import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
    site: 'https://assert-justice.github.io',
    base: '/astro_site',
    markdown:{
        extendDefaultPlugins: true,
        remarkPlugins: [remarkBreaks, remarkToc],
    }
});
