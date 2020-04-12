---
title: フーリエ変換でお絵かきしてみよう〜理論編〜
date: '2018-09-10'
image: /img/c85068e9-852d-442e-a299-3ea502db1673.png
description: 数式を使って、フーリエ変換の仕組みを徹底解剖！
author: H﨑
tags:
  - フーリエ変換
math: true
comments: true
draft: true
authorpage: "member/h崎"
---

## はじめに

物理部部長のH崎です。いきなり気温も下がって秋の気配を感じますよね〜　体調を崩さないようにしなければ、、

さてさて、今回はフーリエ変換の理論編です。フーリエ級数展開から、複素フーリエ変換、そしてDFTまでをまとめていきたいと思います。ただ、はじめに断っておくと、数ⅲを学習した人向けに書いていくので、小学生の方や中学生の方(頑張ればわかるかも)はちんぷんかんぷんな内容になっています。  

もちろん、興味ある！と言う方は是非チャレンジしてみてください。いつか役に立つことでしょう(役に立つとは言ってない)

## フーリエ級数展開とは？
周期関数$f(x)$が区分的に滑らかであるとき、
$$f(x)=\frac{1}{2}a\_0+\sum\_{n=1}^{\infty} (a\_n\cos{nx}+b\_n\sin{nx})$$
としてsinとcosの和として表すことをf(x)の**実フーリエ級数展開**と言います。  

各々の係数は
$$a\_0=\frac{1}{\pi}\int\_{-\infty}^{\infty}f(x)dx ,\ a\_m=\frac{1}{\pi}\int\_{-\infty}^{\infty}f(x)cos{mx}dx $$
$$b\_m=\frac{1}{\pi}\int\_{-\infty}^{\infty}f(x)sin{mx}dx $$
で決定されます。(もちろん導出も可能ですが、割愛させていただきます)  

$a\_n$と$b\_n$はそれぞれcosとsinの振幅を表すので、それをもとに周波数ごとの成分の大きさを調べることができます。

## 複素フーリエ級数
先ほどの実フーリエ級数の式もそれはそれで綺麗にまとまっていますが、複素数を導入するともっと簡単に式変形することが可能です。
それには**オイラーの公式**を導入します。
$$e^{i\theta}=\cos{\theta}+i\sin{\theta}$$
オイラーの公式より
$$\begin{cases}
e^{inx} &= \cos{nx}+i\sin{nx}\cdots(1)\\\\\
e^{in(-x)} &= \cos{nx}-i\sin{nx}\cdots(2)
\end{cases}$$
$\frac{(1)+(2)}{2}$と$\frac{(1)-(2)}{2i}$より
$$\begin{cases}
cos{nx} &= \frac{e^{inx}+e^{in(-x)}}{2}\\\\\
sin{nx} &= \frac{e^{inx}-e^{in(-x)}}{2i}
\end{cases}$$
これらを実フーリエ級数の式に代入すると、
$$f(x)=\frac{1}{2}a\_0+\sum\_{n=1}^{\infty} (a\_n\frac{e^{inx}+e^{in(-x)}}{2}+b\_n\frac{e^{inx}-e^{in(-x)}}{2i})$$
また$\frac{1}{2i}=\frac{i}{2i^2}=\frac{i}{2(-1)}=-\frac{i}{2}$であり、$e^{inx}$ と $e^{in(-x)}$ をまとめると
$$f(x)=\frac{1}{2}a\_0+\sum\_{n=1}^{\infty} \Bigl(\frac{1}{2}(a\_n-b\_ni)e^{inx}+\frac{1}{2}(a\_n+b\_ni)e^{i(-n)x}\Bigl)$$
$c\_0=\frac{1}{2}a\_0,\\ c\_n=\frac{1}{2}(a\_n-b\_ni),\\ c\_{-n}=\frac{1}{2}(a\_n+b\_ni)$と置くと
$$f(x)=c\_0+\sum\_{n=1}^{\infty} \Bigl(c\_ne^{inx}+c\_{-n}e^{i(-n)x}\Bigl)$$
右辺を$c\_ne^{inx}$でまとめ、nにー∞から∞までの整数を代入し、総和を取る。  
ここで、n=0では$c\_ne^{i \cdot0 \cdot x}=c\_0$  
ゆえに、
$$f(x)=\sum\_{n=-\infty}^{\infty} c\_ne^{inx}$$
このように式変形することができ、これを**複素フーリエ級数**と呼びます。本当にこんな簡単な式でいいのか？？と言うほど綺麗にまとまりましたね！

## 周期2Lの周期関数g(t)の複素フーリエ級数
ここまで
$$f(x)=\frac{1}{2}a\_0+\sum\_{n=1}^{\infty} (a\_n\cos{nx}+b\_n\sin{nx})$$
