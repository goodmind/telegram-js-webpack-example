declare module 'telegram-js' {
  export const Telegram: TelegramStatic
  export interface TelegramStatic {
    new (mt: any, tl: any): Telegram
  }
  export interface TelegramClient {
    setConnection (conn: any): void
    callApi (method: string): Promise<any>
    setup (config: any): Promise<TelegramClient>
  }
  export interface Telegram {
    addPublicKey (key: any): void
    createClient (): TelegramClient
    useSchema (schema: any): void
  }
}

declare module '@goodmind/*' {
  const s: any
  export = s
}

declare module '*.json' {
  const s: any
  export = s
}