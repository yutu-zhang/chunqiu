// 在使用import.meta.env会有ts的校验与提示
interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
}