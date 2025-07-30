import { OfetchHttpClient } from "~/services/http/http.client";

let httpClientInstance: OfetchHttpClient | null = null;

export const useHttpClient = () => {
  if (!httpClientInstance) {
    const config = useRuntimeConfig();
    httpClientInstance = new OfetchHttpClient({
      baseURL: config.public.apiBaseUrl as string,
    });
  }

  return httpClientInstance;
};
