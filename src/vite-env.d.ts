/// <reference types="vite/client" />

// ponytail: React 18 warns on camelCase fetchPriority; types only know camelCase. Drop when on React 19.
declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}

export {};
