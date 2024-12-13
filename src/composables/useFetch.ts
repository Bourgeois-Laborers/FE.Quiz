import { createFetch } from '@vueuse/core'

const useFetch = createFetch({
    baseUrl: import.meta.env.VITE_API_URL,
})

export default useFetch
