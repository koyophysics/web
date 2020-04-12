---
title: 自作ドローン製作記
date: '2018-05-03'
image: /img/3d4cef88-6116-49dc-90ff-37fa2ee89975.png
description: 2017年度の音展でドローンを製作した時の製作記です。
author: H﨑
tags:
  - ドローン
  - ジョイコン
math: false
comments: true
draft: false
authorpage: "member/h崎"
---
物理部部長のH﨑です。  
高1の音展でドローンを自作したのですが、これまた記録等を全く残していなかったので、改めて紹介します。  

## きっかけ
総理官邸にドローンが落ちた事件以来、ドローンの規制がかなり厳しくなってしまいました。それによって、本来の目的で使用したい人、例えば「空撮を楽しみたい人」「ドローンレース出たい人」に対しての門戸が狭まったような気がします。
### それに屈していいのか？
出ました反骨精神。もちろん法律で定められている以上、**捕まりたくない** のでちゃんと守るわけですが、飛ばしちゃダメとは言われてない。  
作るしかないやん。

## ドローンの仕組み
ドローンはヘリコプターとは違って、プロペラ４枚で機体を制御しています。  
単純にプロペラの数が多いので、上下左右、旋回などの操作がより柔軟にできるようになっているというわけです。  
<img src="/img/drone/9.jpg" alt="Drawing" style="width: 100%"/>

この図の通り、プロペラの回転の向きは対称となっていて、これらのプロペラの回転の速さをうまく調節して飛行します。
その際に重要となるのは、機体の「**速度**」や「**傾き**」といった情報です。  
僕が製作したドローンには様々なセンサーが搭載されています。（ちょっとオーバースペック）

- 加速度センサ(機体の速度の検出)
- ジャイロセンサ(機体の回転を検出)
- 気圧センサ(機体の高度を検出)
- 地磁気センサ(機体の方向を検知)
- GPS(機体の緯度経度を取得)

原理的には地球上の全ての場所を情報として表すことが可能です。これらのセンサーによって安定したフライトが可能になっています。  
正確にはまだまだ安定とは言えませんが、、、

## 製作開始
まずはお決まりの設計から。  
ドローンのアーム部分の画像です(Fusion360でレンダリング)  
これを3Dプリンタで印刷しました。この程度の部品であれば購入してもいいのですが、そこは自作ッカーとしては譲れないところ。全部で30時間ぐらいかけて印刷しました。

<img src="/img/drone/10.png" alt="Drawing" style="width: 100%"/>

設計できたら、次は部品の購入です。ほぼAmazonで揃います。


・[ESC](https://www.amazon.co.jp/gp/product/B01FJA0J1K/ref=oh_aui_detailpage_o07_s00?ie=UTF8&psc=1)  
・[モーター](https://www.amazon.co.jp/gp/product/B015W2BUBS/ref=oh_aui_detailpage_o07_s00?ie=UTF8&psc=1)  
・[プロペラ](https://www.amazon.co.jp/gp/product/B00X7FRJXG/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1)  
・[LiPoバッテリー](https://www.amazon.co.jp/gp/product/B017VOL574/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1)  
・[Bluetoothモジュール(スマホとの接続用)](https://www.amazon.co.jp/gp/product/B06XHBYH5Z/ref=oh_aui_detailpage_o07_s03?ie=UTF8&psc=1)  
・[GPSモジュール](https://www.amazon.co.jp/gp/product/B01D1D0F5M/ref=oh_aui_detailpage_o09_s00?ie=UTF8&psc=1)  
・LiPo充電器(なぜか物理部にあった。先輩に感謝。)  
・MultiWii AIOP(フライトコントローラ)

まずモーターについてですが、ドローンのモーターはミニ四駆とかに使われるモーターと違って、**ブラシレスモーター** と呼ばれるものです。  

- 高速回転が可能
- 効率がいい
- 磨耗しにくい
- 回転速度を細かく調整可能
といった特徴があります。

次にMultiwii AIOPについてですが、これはMultiwii SE V2.5の上位互換品で

- マイコンがATmega328PからATmega2560に
- 気圧センサの精度が向上(分解能が10cm)
- 各種センサーの精度向上

などなど、嬉しい機能がてんこ盛り。Multiwiiのボードも自作しようか考えたのですが、重量のことを考えるとこれだけ入って5cm角のサイズに収まっているのは素晴らしい！  
即買いしましたw （ebayで探しましょう。）

## あれ、コントローラどうするの？
そうなんです。本来ならプロポというでっかいコントローラが必要なのですが、、、軍資金が底をついた(泣)  
### よっしゃ、とことんケチってやる！
調べてみると、ある動画を発見。
<div class="movie-wrap">
  <iframe width="854" height="480" src="https://www.youtube.com/embed/cas9g0J6Jyk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

これなら家にあるもので作れそうだ！仕組みとしては

1. ジョイコンの値をパソコンで読み込む
2. その値をパソコンでMultiwiiプロトコルに変換
3. Xbeeで信号を飛ばす
4. ドローンがそれを受け取って、機体制御

みなさんのご家庭のタンスの中に眠っているXbeeを引っ張り出しましょう。

<img src="/img/drone/11.jpg" alt="Drawing" style="width: 50%"/>

一応リンク貼っておきます。[MultiWii Joystick](http://foamcopter.blogspot.jp/2016/02/joystick-and-gamepad-support-for.html)  

全て英語で書かれているので難しいかもですが、わからないことがあればコメント欄にでも書いていただければ、お手伝いできるかもしれません。  

## 回路図（簡略図）
<img src="/img/drone/13.jpg" alt="Drawing" style="width: 100%"/>

5V,12V,GNDの取り回しとかテキトーですが、イメージはこんな感じです。  
実際に制作するときの注意としては、**青く塗っているライン** には大電流が流れるので出来るだけ太い線で配線して下さい。  
ここを細い線で結線すると、線が発熱するだけでなく、モーターに十分な電流が流れなくなり、本来のパワーを出すことができません。

<img src="/img/drone/7.jpg" alt="Drawing" style="width: 50%"/>

最大で20A流れるものが4つもついてるわけです。流石に80A流れないにしても、余裕を持って配線しましょう。

## プログラム
ジョイコンを使えるソフトがMultiwiiだけということもあり、素直にMultiwii使います。「プログラミングしろよ」　って言われそうですけど、しょうがない。オープンソースの方が絶対高品質。  
Multiwiiですが、実はArduino  Megaの互換ボードなので、Arduinoと同じように扱うことができます。  
そういうこともあってMultiwiiにしました。

## 完成
はやっ。まさかブログに書くなんて思ってないから、あんまり写真撮ってないんです、、、反省。
もっと写真撮っとけばよかった。

<img src="/img/drone/1.jpg" alt="Drawing" style="width: 100%"/>

<img src="/img/drone/6.jpg" alt="Drawing" style="width: 100%"/>

真ん中にあるのがMultiwii AIOPのボードです。  

<img src="/img/drone/4.jpg" alt="Drawing" style="width: 70%"/>

下向きでXbeeが乗っかってます。

<img src="/img/drone/5.jpg" alt="Drawing" style="width: 70%"/>

左がGPS、右がBluetoothのモジュールです。

<img src="/img/drone/14.gif" alt="Drawing" style="width: 100%"/>

## Bluetoothモジュールについて
専用のiOSアプリでドローンと接続すると、機体の情報や設定などが画面上でできてしまうというスグレものです。

<img src="/img/drone/16.png" alt="Drawing" style="width: 50%"/>

まるで飛行機のパイロットみたいですよね？  
気圧計だけで10cm単位で高度測れるとか、便利な時代ですな〜

## 飛行動画

作ったはいいものの、どこで飛ばすか考えてなかったんですよね〜〜  
物理部顧問のH本先生に頼み込んで、朝の7時に**安全を確保して**校庭で飛ばしました。  
動画を見ていただいたらわかると思いますが、紐で繋がれてます。お前は犬かと。

暴走の原因はXbeeの電波が不安定であることだとわかったので、今度はちゃんとプロポ買います。ケチって失敗したぁ、、、  
### 今年こそ、紐なしで飛ばしてやる！！
<div class="movie-wrap">
  <iframe width="854" height="480" src="https://www.youtube.com/embed/8p-v2uP4Ypg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br>

## 参考リンク
・[ドローンの飛行原理](https://drone-aerial-corps.com/2016/07/02/post-212/)
<br>
