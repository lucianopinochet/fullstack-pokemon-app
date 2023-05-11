export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_KEYWORD:string
      PORT:number
      MONGO_URL:string
    }
  }
}