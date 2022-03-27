# vite_react_ts

- vite
- react
- typescript
- chakraUI
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
  "node"
]
// ↓の__direnameでVSCODEがエラー吐いていたのでtypes:node追加
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

