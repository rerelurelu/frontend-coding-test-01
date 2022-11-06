# 都道府県別人口推移グラフ表示サイト

フロントエンドコーディング試験

## 使用技術

以下のサイトで確認できます。
[StackShare](https://stackshare.io/zoniha/population-change-app#stack)

## 使い方

1. リポジトリをクローン:

```
git clone https://github.com/zoniha/population-change-app
```

<br />

2. RESAS API の利用登録を行い、API キーを発行
   [RESAS のリンク](https://opendata.resas-portal.go.jp/)
   <br />

3. `.env.local`ファイルを編集

```env:env.local
VITE_RESAS_API_KEY=ここに登録したAPIキーを記述して保存
```

<br/>

4. パッケージをインストール:

```
yarn install
```

<br />

5. 開発サーバーを起動

```
yarn start
```

## その他

- テスト実行

```
yarn test
```
