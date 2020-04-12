---
title: Processingでフーリエ変換〜実践編〜
date: '2018-09-15'
tags:
    - "フーリエ変換"
    - "processing"
image: "/img/fourier/9.png"
description: "フーリエ変換を視覚的に理解できるお絵かきプログラムを作ってみましょう！"
author: H﨑
draft: false
comments: true
math: true
authorpage: "member/h崎"
---

## はじめに
前回、フーリエ変換について詳しく見てきましたが、「いまいちピンとこない」と言う方も多かったのではないでしょうか。  
そんな方に、「なんとしてでもフーリエ変換の面白さを伝えたい！！」ということで作ったプログラムを今回の記事で説明していきたいと思います。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">フーリエ変換でピーポくん書くやつの進化版!?作った<br>ペンの軌跡をXY方向でそれぞれに離散フーリエ変換(DFT)かけて、円の回転に置き換えるというもの<br>ソースコードは、じきに公開するつもり <a href="https://t.co/4buibaN8Ri">pic.twitter.com/4buibaN8Ri</a></p>&mdash; 甲陽學院髙等學挍 物理部 (@koyobutsuri) <a href="https://twitter.com/koyobutsuri/status/1033577694498238464?ref_src=twsrc%5Etfw">2018年8月26日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


上の動画を見ていただければわかるように、複数の円がグルグル回っていたのがわかると思います。とても複雑な動きをしているように見えますが、実は円の回転速度や大きさは一定でただ単純に円の周りを円が回っているだけです。ニョロニョロとして気持ち悪いですが、どんな絵でも円の回転運動で描画することができます。  
どのような仕組みなのか順番にご説明したいと思います。


## 仕組み
大まかな流れとしては  

1. ペンの移動をXY方向で別々にサンプリング  
2. 波形をフーリエ変換でsinとcosの成分に分割  
3. sinとcosを合成して、sinだけの関数に直す  
4. それらを元に円を描画  

sinとcosはそもそも単位円周上を回る点のXY方向の座標を表すものであるため、円運動に変換することができます。

## プログラム解説
説明が必要とされると思われる箇所を解説していきたいと思います。  

### 波形の表示
<script src="https://gist.github.com/hamataku/43985b256b3cae17c4d4bdeb5d8f3e37.js"></script>
現在のピクセル情報をloadPixels()関数で読み取り、それを左と上に順に配列をシフトし、updatePixels()で更新することで、まるでオシロスコープのように波形を移動させています。


### 離散フーリエ変換(DFT)
<script src="https://gist.github.com/hamataku/bf80143d858f6d9729ed8b1e64dcb984.js"></script>
引数として渡された波形データを下の数式を元に離散フーリエ変換を行い、配列に代入します。realは実数部分をimagは虚数部分の配列です。渡されるimagのデータは全て0であるため、計算の際は使用していません。

\begin{eqnarray}
F\_n &=&\frac{1}{N}\sum\_{k=0}^{N-1} f\_ke^{-i\frac{2n\pi}{N}k}\\\\\
     &=&\frac{1}{N}\sum\_{k=0}^{N-1} f\_k\Bigl(\cos(\frac{2n\pi}{N}k)-i\sin(\frac{2n\pi}{N}k)\Bigl)
\end{eqnarray}

### 円の座標に変換

<script src="https://gist.github.com/hamataku/432c34266ff46f166adc976b4efe9736.js"></script>
DFT関数でsinとcosの係数を求めることができましたが、sinとcosの和をsin単体にまとめることができれば、円の運動として表すことができるようになります。そのために使うのが**三角関数の合成公式**です。
$$a\sin\theta+b\cos\theta=\sqrt{a^2+b^2}\sin(\theta+\alpha)$$
$$\tan\alpha=\frac{b}{a}$$
問題はどうやって$\alpha$を求めるかということですが、processingには便利な関数が用意されています。  
それは**atan2関数**です。これは$\tan$の逆関数で、aとbを代入することでαの値を求めることができます。

## お待ちかねの全プログラム公開！
<script src="https://gist.github.com/hamataku/7da767bdd1953763fe15eb51446d6c16.js"></script>
processingで書いたコードですので、ご自身のパソコンにprocessingをインストールして、お試しください。  
コードに関しては「動けばいいやん」という精神で記述しているので、見にくいところもあると思いますが、お許し下さい。

ここの箇所はご自身の環境に合わせて調節して見て下さい。
