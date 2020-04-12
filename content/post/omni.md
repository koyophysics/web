---
title: オムニホイールで全方向移動
date: '2018-08-22'
image: /img/dd098827-92fd-43f1-9563-6aac5acea5bd.png
description: パンジャンドラムではなく、オムニホイールです。
author: H﨑
tags:
  - オムニホイール
  - Blynk
math: false
comments: true
draft: false
---

## はじめに
物理部部長のH崎です。  
この記事では今年製作したオムニホイールについて紹介したいと思います。
※パンジャンドラムではありません  

## オムニホイールとは？

<img src="/img/omni/1.jpg" alt="Drawing" style="width: 60%"/>

まずはこの写真を見てみて下さい。
### んん？　車輪の上に車輪がついてる、、、  
と思ったあなた、なかなか勘が鋭い！  
このようにオムニホイールは車輪の外周に**回転方向に対して垂直の方向**で車輪がついています。

## なぜ垂直？

<div class="movie-wrap">
  <iframe width="854" height="480" src="https://www.youtube.com/embed/Yh-UOlq65_k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

この動画を見てもらうのが一番わかりやすいと思います。  
普通の車輪の場合、横方向に対する動きは摩擦が大きく、滑らかに移動することができません。  
しかし、オムニホイールの場合、横方向に対して新たに車輪がついてるため、摩擦なく全方向に移動することができます。
### まあ、音展に来てもらうのが一番なんですけどねww
ということで、北館4F物理講義室でお待ちしています。

## 作り方(ハード編)

必要な主な材料は以下の通りです。

- オムニホイール　× 4
- ステッピングモーター(NEMA17) × 4
- Arduino UNO × 1
- A4988 ×4
- BLE4.0モジュール　× 1
- 12V電源アダプター × 1
- モーター固定用の金具 × 4
- MDF版など(土台)

<img src="/img/omni/6.jpg" alt="Drawing" style="width: 60%"/>

↑自作モーターシールド(A4988とArduinoを接続)

<img src="/img/omni/3.jpg" alt="Drawing" style="width: 60%"/>

↑A4988とBLEモジュールを接続したところ(旧バージョン)

実はオムニホイールを使った作品は去年も展示していました。

<img src="/img/omni/5.jpg" alt="Drawing" style="width: 60%"/>

車輪を見るとわかるのですが、オムニホイールを買う資金がなかったので、自分で設計して3Dプリンタで印刷しました。印刷時間は合計二日にも及びます。そこそこの出来ではありましたが、純正品とは滑らかさの点で比べ物になりませんでした。


## 作り方(ソフト編)

去年のバージョンはパソコンの画面上でマウスを動かして操作するという、ユーザービリティのかけらもないような仕様でしたが、今年は違います。

### スマホから操作できます！！

これは大きいのではないでしょうか。多分赤ちゃんでも操作できます(今時の子供はスマホリテラシーが高い)  
具体的にはBlynkというアプリを用いて、BLE経由でコマンドをオムニホイール車に送信しています。

### ソースコード
<script src="https://gist.github.com/hamataku/e2399f709114d706139fa725ae153357.js"></script>

## 完成！
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">オムニホイールで全方向移動車作ったから、その動画<br>iPadとはBluetoothで接続してます。またホームページにまとめるかも <a href="https://t.co/UwGVQnTvvv">pic.twitter.com/UwGVQnTvvv</a></p>&mdash; 甲陽學院髙等學挍 物理部 (@koyobutsuri) <a href="https://twitter.com/koyobutsuri/status/1018021585960120320?ref_src=twsrc%5Etfw">2018年7月14日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

どうでしょうか。真ん中の円をタッチして動かすだけで、その方向に移動するようになり、直感的な操作が可能になりました。  
動かす大きさが大きいほど、早く移動するようになっています。また右回転や左回転にも対応しています。

ロボコンに出場する気はさらさらありませんので、これ以上の機能をつけるつもりはありません（風船割るとか）  
オムニホイールの仕組みだけでも理解していただければ幸いです。
