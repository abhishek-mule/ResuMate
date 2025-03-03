declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_URL: string
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: string
    NODE_ENV: 'development' | 'production' | 'test'
    VERCEL_URL: string
    VERCEL_ENV: 'development' | 'preview' | 'production'
  }
}