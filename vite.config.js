import Inspect from "vite-plugin-inspect";
import { resolve } from "path";


export default {
    plugins: [Inspect()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ru: resolve(__dirname, 'ru/index.html'),
                ENG: resolve(__dirname, 'ENG/index.html'),
                ua: resolve(__dirname, 'ua/index.html'),
            }
        }
    }
}
