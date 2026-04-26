# Yowai Neko Site

GitHub Pages でそのまま公開できる、1ページ完結型のプロフィールサイトです。

## ファイル構成

- `index.html`: ページ本体
- `styles.css`: デザイン
- `script.js`: メニュー開閉と軽い演出

## GitHub に公開する流れ

1. GitHub で新しいリポジトリを作成
2. このフォルダをそのリポジトリに push
3. GitHub の `Settings` → `Pages` を開く
4. `Deploy from a branch` を選び、`main` ブランチの `/root` を公開元に設定
5. 数分待つと `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます

## 独自ドメインにする流れ

1. 独自ドメインを取得
2. GitHub Pages の `Custom domain` にドメインを入力
3. ドメイン管理会社の DNS で GitHub Pages 向けの設定を追加
4. 必要になったら `CNAME` ファイルをこのフォルダに追加

`CNAME` の例:

```txt
example.com
```

## お問い合わせフォームを追加する方法

静的サイトなので、次のどれかを使うのが簡単です。

### 1. Formspree

フォームの `action` に Formspree の URL を設定するだけで利用できます。

```html
<form action="https://formspree.io/f/xxxxabcd" method="POST">
```

### 2. Google Forms

Google フォームを作成し、このサイトからリンクする方法です。

### 3. Next.js などへ移行

将来もっと本格的にしたい場合は、API を持つ構成に移行して DB 保存や自動返信も追加できます。

## 最初に調整したい項目

- `index.html` 内の `@yourname`
- SNS リンク
- `hello@example.com`
- 作品紹介の文言
- サイトタイトルと説明文
