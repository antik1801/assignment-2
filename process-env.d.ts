declare namespace NodeJS {
    export type ProcessEnv = {
        PORT:number
        DATABASE_URL_REMOTE: string
        DATABASE_URL_LOCAL: string
        NODE_ENV: string
        BYCRYPT_SALT_ROUND: number
    }
}