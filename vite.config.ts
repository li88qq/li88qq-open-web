import {defineConfig,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from 'path'

export default  defineConfig(({mode})=>{
    const env = loadEnv(mode,'.')
    return {
        plugins:[vue()],
        server:{
            host:true,
            proxy:{
                '/api':{
                    target: env.VITE_API_TARGET,
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api/, '')
                }
            }
        },
        resolve:{
            alias:{
                '@':join(__dirname,'./src')
            }
        }
    }
})