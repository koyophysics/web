---
title: Hugoでサイト開発入門　第2回
date: '2018-04-23'
image: /img/aa8adad1-77c3-4635-b662-baa2ce17baa5.png
description: HugoでWeb開発の第二回。今回はサイトを自分好みに変更する方法をご紹介します。
author: H﨑
tags:
  - Hugo
math: false
comments: true
draft: false
authorpage: "member/h崎"
---

どーも。物理部部長のH﨑です。  
前回の続きで、Hugoで作ったサイトを自分仕様に変えていく方法をご紹介します。

## config.tomlの編集
[前回](https://koyophy.netlify.com/post/hugo1/)、何気にコピペして使用したconfig.tomlですが、ちゃんと意味があります。  
これを編集すれば、一気に自分のサイトっぽくなります。

```toml
baseurl = "" #公開する予定のサイトのURL
title = "HugoWeb" #サイトのタイトル
canonifyurls = true #絶対パスにする設定
paginate = 10 #一度に表示する記事の数
languageCode = "ja-jp" #日本語設定
copyright = "Code released under the Apache 2.0 license." #テーマのライセンス表記。そのままにしましょう。
googleAnalytics = "" #Google Analyticsで追跡できます。
disqusShortname = "" #DisqusのID(コメント欄)

[author]
  name = "" #サイトの作者

[params]
  DateForm = "Mon, Jan 2, 2006" #日付の形式設定
  #DateForm = "2006年1月2日" # こうすれば年月日表示になります。

  Description = "" #サイトの説明
  Author = "" #デフォルトの著者
  email = "" #メールアドレス
  postSummariesFrontPage = 4 #一度に表示する記事の数
  showReadTime = false #何度読まれたか表示。あんまり使わない気が、、、

# いらないものは消しましょう。
[[params.social]]
  title = "twitter"
  url = "https://twitter.com/humboldtux"
[[params.social]]
  title = "github"
  url = "https://github.com/humboldtux"
[[params.social]]
  title = "facebook"
  url = "https://www.facebook.com/FACEBOOKHANDLE"

#これも必要に応じて、増やしたり減らしたりしましょう。
#weightの値で位置が変わります。
[[menu.main]]
  name = "ホーム"
  url = "/"
  weight = -300
[[menu.main]]
  name = "活動記録"
  url = "/post/"
  weight = -280
[[menu.main]]
  name = "その他"
  url = "/"
  weight = -100
```

## _index.mdの作成
ホームのページにあいさつや紹介などを書いてみます。  
次のコードを実行しましょう。
```bash
hugo new _index.md
```
これで/content/_index.mdが作成されました。

では、このコードを書き込みましょう。
```html
---
title: home
---
<div style="text-align: center;">
<font size="6"><b>Welcome To Our Homepage!<br><br></b></font>
</div>

# こんにちは！
```
ちなみにMarkdownはMarkdown書式だけでなく、
**HTMLのコードを埋め込む**
こともできます。  
上のコードでは文字のサイズ変更と中央揃えを行なっています。

## index.htmlの編集
/layout/index.htmlがホームのページのHTMLファイルなので、これを編集します。

```html
〜中略〜
    <!-- Main Content -->
    <div class="container">

    <!-- これを追加！！ -->
    <article>
    {{ .Content }}
    </article>
    <!-- ここまで -->

      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          {{ $posts := or .Site.Params.PostSummariesFrontPage 4 }}
          {{ range first $posts (where .Data.Pages "Type" "post") }}

〜中略〜
```
```html
<article>
{{ .Content }}
</article>
```
このコードを追加することで、Hugoが_index.mdを読み込んで表示するようになります。

## Tips
index.htmlはトップページを司っているので、ここを変更することで色々変えることができます。  

例えば、{{ .Site.Title }}を『物理部』に書き換えると、サイトの題名を『物理部』に変更できます。  
ナビゲーションバーの題名と違うものにしたい時にとても便利です。  

あとは『Older Posts』を『過去の投稿』とすれば、日本語ページらしくなります。

## 運命の時、、、

保存できたら、testディレクトリの中で
```bash
hugo server --disableFastRender
```
を実行し、ブラウザで http://localhost:1313/ にアクセス！  
エラー吐いたりうまく表示されない場合は、どこかの工程でミスをしている可能性が高いです。  
僕はこの方法で大丈夫だったので、あなたもうまくいったはず、、、

![](/img/0423/1.png "100")
このように表示されたら大成功です。

## まとめ
config.tomlの編集である程度の設定はできるのですが、細かい設定は直接HTMLソースをいじったほうが手っ取り早いと思います。  
目的のページのHTMLソースを変更すれば、自由に作り変えることができるわけです。
