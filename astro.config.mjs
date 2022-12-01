import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks'

// https://astro.build/config
export default defineConfig({
    site: 'https://assert-justice.github.io',
    base: '/astro_site',
    markdown:{
        extendDefaultPlugins: true,
        remarkPlugins: [remarkBreaks],
    }
});
