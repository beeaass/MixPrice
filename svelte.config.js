import { sveltePreprocess } from 'svelte-preprocess'

export default {
  preprocess: sveltePreprocess({
    scss: {
      sourceMap: !process.env.NODE_ENV === 'production',
    },
  }),
}
