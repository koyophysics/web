---
title: Hugoでサイト開発入門　第1回
date: '2018-04-21'
image: /img/fb945349-8115-45d2-bdb1-8e9f81644a25.png
description: 記念すべき第一回。後輩が今後もこのサイトを運営できるように、Hugoの使い方を書いていきます。
author: H﨑
tags:
  - Hugo
math: false
comments: true
draft: false
authorpage: "member/h崎"
---

![Hugo](/img/0421/1.png "100")

どーも。物理部部長のH﨑です。記事を書くのは初めてなので拙い部分もあるかもしれませんが、大目に見ていただければなぁと思います。

初回はHugoとGitHub Pagesを使ってサイトを公開するまでを紹介したいと思います。

## Hugoとは？
Hugoと言っても聞き馴染みがないと思いますが、静的サイトジェネレータといって、初心者でも結構簡単にサイトを作れてしまいます。
正攻法でサイト作るとなると、HTMLとCSSを書いて、そのうえJavaScript、、、そんなん知るかとなるわけですが、そんな面倒な作業を肩代わりしてくれます！

ちなみに公式サイトでもGo言語がどうたらこうたらと書かれていますが、実際はGo言語の存在を意識する必要は全くありません。

## インストール
僕はMacユーザなので(ﾄﾞﾔ!)、Macでのインストールの方法です。
```bash
//homebrewをすでにインストールしている場合は不要
xcode-select --install
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
//ここまで

brew update
brew install hugo
hugo version
```
Hugoのバージョンが表示されれば完了です。

## 使ってみよう！

作りたい場所のディレクトリに入って、
```bash
hugo new site サイト名
```
今回は
```bash
hugo new site test
```
としています。
これでサイトの雛形が出来上がりました。

### テーマの適応

僕はこのテーマを使って、作成しました。
https://themes.gohugo.io/startbootstrap-clean-blog/  
Downloadからzipをダウンロードしましょう！

では、ファイルの移行作業です。  
・archetypes→archetypesに置換  
・imagesそのままコピー  
・layouts→layoutに置換  
・static→static置換

次にconfig.tomlを編集します。  
本家サイトとほぼ同じですが、これをコピーして保存しましょう。  
パラメータは適宜変更して下さい。
```toml
baseurl = "http://humboldtux.github.io/"
title = "Start Bootstrap Clean Blog"
canonifyurls = true
paginate = 10
languageCode = "ja-jp"
copyright = "Code released under the Apache 2.0 license."
googleAnalytics = ""
disqusShortname = ""

[author]
  name = "name"

[params]
  DateForm = "Mon, Jan 2, 2006"
  Description = "Your site description"
  Author = "Benoît Benedetti"
  email = "benoit.benedetti@gmail.com"
  postSummariesFrontPage = 4
  showReadTime = true

[[params.social]]
  title = "twitter"
  url = "https://twitter.com/humboldtux"
[[params.social]]
  title = "github"
  url = "https://github.com/humboldtux"
[[params.social]]
  title = "facebook"
  url = "https://www.facebook.com/FACEBOOKHANDLE"

[[menu.main]]
  name = "home"
  url = "/"
  weight = -200
[[menu.main]]
  name = "Archives"
  url = "/post/"
  weight = -180
```
## 記事を書いてみる
次のコードを実行すると、post以下にtest.mdというMarkdownが作成されます。
```bash
hugo new post/test.md
```
試しに以下のコードをtest.mdに書き込みましょう。
```yaml
---
title: testテスト
draft: false
slug: testテスト
date: '2018-04-15'
---

Hello World!!
```
保存できたら、testディレクトリの中で
```bash
hugo server --disableFastRender
```
を実行し、ブラウザで http://localhost:1313/ にアクセス！  

<img src="/img/0421/2.png" alt="Drawing" style="width: 100%"/>

このようなサイトが表示されたら、大成功！  
あとは自分仕様にパラメータを変更していけば、サイトの完成です。

## まとめ
どうでしょうか。うまく表示されましたか？  
基本コマンドライン操作でなかなかとっつきにくいですが、、、慣れですね。      
皆さんもぜひ、Hugoを使って見て下さい。



# Make IT Possible!!
<br>
