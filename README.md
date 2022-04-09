# vite_react_ts

- vite
- react17 -> react18
- Firebase
- typescript
- ~~chakraUI~~ -> やっぱtailwindcss
- react-router
- SWR
- MSW
- jest + cypress

## やったこと

### prettier + eslint 設定

いつものやつ

### srcディレクトリをルート化

```json:tsconfig.json
"paths": {
  "@/*": [
    "src/*"
  ]
},
"types": [
  "node" -> "vite/client"
]
// ↓の__direnameでVSCODEがエラー吐いていたのでtypes:node追加 => vite/clientでいけた
```

```typescript:vite.config.ts
export default defineConfig({
  ...
  root: './src',
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
  build: {
    outDir: '../public',
  },
  ...
}
// __direnameでVSCODEがエラー吐いていたので@type/nodeをインストール。
```

viteで環境変数使うために.env作成とvite-env.d.ts（環境変数の方）に追記

```
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string
  readonly VITE_FIREBASE_AUTH_DOMAIN: string
  readonly VITE_FIREBASE_PROJECT_ID: string
  readonly VITE_FIREBASE_STORAGE_BUCKET: string
  readonly VITE_FIREBASE_APP_ID: string
  readonly VITE_FIREBASE_SENDER_ID: string
  readonly VITE_FIREBASE_MEASUREMENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

```

`import.meta.env.VITE_****`で使える

## tailwind css　設定

```bash
npm i -D tailwindcss postcss autoprefixer prettier-plugin-tailwindcss

npx tailwindcss init -p

```

postcss+autoprefixerでベンダープリフィックスを自動生成する

```css
background-image: -o-linear-gradient(bottom, #8BCC8E 0%, #A7F5AB 100%);
background-image: -moz-linear-gradient(bottom, #8BCC8E 0%, #A7F5AB 100%);
background-image: -webkit-linear-gradient(bottom, #8BCC8E 0%, #A7F5AB 100%);
background-image: -ms-linear-gradient(bottom, #8BCC8E 0%, #A7F5AB 100%);
background-image: linear-gradient(to bottom, #8BCC8E 0%, #A7F5AB 100%);
```

initすると`tailwind.config.js`と`postcss.config.js`ができる

```diff
# tailwind.config.js
module.exports = {
  + content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // 追記
  - content: []
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```js
# postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

main.tsxに以下追加
```
import 'tailwindcss/tailwind.css'
```
