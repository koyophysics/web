---
title: 二重振り子のシミュレーション
date: '2018-06-28'
image: /img/7a519aae-daac-4117-8e29-a212c7e16499.jpeg
description: 二重振り子を例にカオス理論について解説します(オタ芸ではありません。似てるけど)
author: H﨑
tags:
  - 力学
  - 二重振り子
math: true
comments: true
draft: false
authorpage: "member/h崎"
---

## 二重振り子とは？？

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">物理部らしいことしてみた<br><br>二重振り子はカオス現象ですが、運動方程式をラグランジアンに変換して、Runge–Kutta法で微分方程式の近似解出したらシミュレーションできます(言ってみたかった) <a href="https://t.co/fuN8Pdsiui">pic.twitter.com/fuN8Pdsiui</a></p>&mdash; 甲陽学院高等学校 物理部 (@koyobutsuri) <a href="https://twitter.com/koyobutsuri/status/1011218367280107520?ref_src=twsrc%5Etfw">2018年6月25日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


普通の振り子の先にもう一つ振り子をつないだだけの簡単な構造なのですが、これがまた興味深い。いわゆるカオスな運動をします。

> カオス理論は、力学系の一部に見られる、数的誤差により予測できないとされている複雑な様子を示す現象を扱う理論である。ここで言う予測できないとは、決してランダムということではない。その振る舞いは決定論的法則に従うものの、初期値鋭敏性ゆえに、数値解析の過程での誤差によっても、得られる値と真の値とのずれが増幅される。そのため予測が事実上不可能という意味である。(Wikipediaより引用)

もう少し噛み砕いて説明すると、振り子の動きを運動方程式として書くことができる、つまり**振り子はある法則に従って動いている**のですが、その運動方程式を使って**二重振り子の動きを予測することは不可能**であると言うことです。

どれだけ高性能なスパコンを使っても、数十秒後には誤差が指数関数的に増加して、バラバラの動きとなってしまいます。

そのとっても無意味な運動方程式を立ててやる！！というのが今回のお題です。

どうでもいいですけど、二重振り子の動きとオタ芸の腕の動きってなんか似てません？はい、どうでもいいですね。

## ひたすら計算
<img src="/img/pendu/1.jpg" alt="Drawing" style="width: 100%"/>

二つのおもりで構成される二重振り子について考えてみたいと思います。  

おもり1は質量$m_1$で紐の長さは$l_1$で角度を$\theta_1$、座標を$(x,y)$  
おもり2は質量$m_2$で紐の長さは$l_2$で角度を$\theta_2$、座標を$(X,Y)$とします。  
そうすると

$$x = l_1\sin\theta_1　,　y = -l_1\cos\theta_1$$
$$X = l_1\sin\theta_1+l_2\sin\theta_2　,　Y = -l_1\cos\theta_1-l_2\cos\theta_2$$

各座標の速度は時間tで微分して  

$$\dot{x} = l_1\dot{\theta_1}\cos\theta_1　,　\dot{y} = l_1\dot{\theta_1}\sin\theta_1$$
$$\dot{X} = l_1\dot{\theta_1}\cos\theta_1+l_2\dot{\theta_2}\sin\theta_2　,　\dot{Y} = l_1\dot{\theta_1}\sin\theta_1+l_2\dot{\theta_2}\sin\theta_2$$

おもり１の速度を$v$、おもり２の速度を$V$とすると  

$$v^2 = \dot{x}^2+\dot{y}^2 = l_1^2\dot{\theta_1}^2$$
\begin{align}
V^2 &= \dot{X}^2+\dot{Y}^2\\\\\\
&= (l_1\dot{\theta_1}\cos\theta_1+l_2\dot{\theta_2\cos\theta_2})^2+(l_1\dot{\theta_1}\sin\theta_1+l_2\dot{\theta_2\sin\theta_2})^2\\\\\\
&=l_1^2\dot{\theta_1}^2+l_2^2\dot{\theta_2}^2+2l_1l_2\dot{\theta_1}\dot{\theta_2}(\cos\theta_1\cos\theta_2+\sin\theta_1\sin\theta_2)\\\\\\
&=l_1^2\dot{\theta_1}^2+l_2^2\dot{\theta_2}^2+2l_1l_2\dot{\theta_1}\dot{\theta_2}cos(\theta_1-\theta_2)
\end{align}

よって運動エネルギーは

\begin{align}
T &= \frac{1}{2}m_1v^2+\frac{1}{2}m_2V^2\\\\\\
&=\frac{1}{2}(m_1+m_2)l_1^2\dot(\theta_1)^2+\frac{1}{2}m_2l_2^2\dot{\theta_2}^2+m_2l_1l_2\dot{\theta_1}\dot{\theta_2}cos(\theta_1-\theta_2)
\end{align}

位置エネルギーは

\begin{align}
U &= m_1gl_1(1-\cos\theta_1)+m_2g\Bigl(l_1(1-\cos\theta_1)+l_2(1-\cos\theta_2)\Bigr)\\\\\\
&= (m_1+m_2)gl_1(1-cos\theta_1)+m_2gl_2(1-cos\theta_2)
\end{align}

ラグランジアンは

\begin{align}
L &= \frac{1}{2}(m_1+m_2)l_1^2\dot{\theta_1}^2+\frac{1}{2}m_2l_2^2\dot{\theta_2}^2+m_2l_1l_2\dot{\theta_1}\dot{\theta_2}cos(\theta_1-\theta_2)\\\\\\
&-(m_1+m_2)gl_1(1-\cos\theta_1)-m_2gl_2(1-\cos\theta_2)
\end{align}

簡便のため$m_1=m_2=m$、$l_1=l_2=l$という場合を考えると

\begin{align}
L &= ml^2\dot{\theta_1}^2+\frac{m}{2}l^2\dot{\theta_2}+ml^2\dot{\theta_2}\dot{\theta_2}\cos(\theta_1-\theta_2)\\\\\\
&-2mgl(1-cos\theta_1)-mgl(2\cos\theta_1+\cos\theta_2-3)\\\\\\
&= ml^2\Bigl(\dot{\theta_1}^2+\frac{1}{2}\dot{\theta_2}^2+\dot{\theta_1}\dot{\theta_2}cos(\theta_1-\theta_2)\Bigr)\\\\\\
&+mgl(2\cos\theta_1+\cos\theta_2-3)
\end{align}

保存力場中でのラグランジュ運動方程式は

$$\frac{d}{dt}(\frac{\partial L }{\partial \dot{\theta_1}})-\frac{\partial L }{\partial \theta_1} = 0$$
$$\frac{d}{dt}(\frac{\partial L }{\partial \dot{\theta_2}})-\frac{\partial L }{\partial \theta_2} = 0$$

それぞれの項を計算すると

$$\frac{d}{dt}\Bigl(\frac{\partial L }{\partial \dot{\theta_1}}\Bigl)= 2ml^2\ddot{\theta_1}+ml^2\Bigl(\ddot{\theta_2}\cos(\theta_1-\theta_2)-\dot{\theta_2}(\dot{\theta_1}-\dot{\theta_2})sin(\theta_1-\theta_2)\Bigl)$$
$$\frac{\partial L }{\partial \theta_1} = -ml^2\dot{\theta_1}\dot{\theta_2}\sin(\theta_1-\theta_2)-2mgl\sin\theta_1$$
$$\frac{d}{dt}\Bigl(\frac{\partial L }{\partial \dot{\theta_2}}\Bigl)= ml^2\ddot{\theta_2}+ml^2\Bigl(\ddot{\theta_1}\cos(\theta_1-\theta_2)-\dot{\theta_1}(\dot{\theta_1}-\dot{\theta_2})sin(\theta_1-\theta_2)\Bigl)$$
$$\frac{\partial L }{\partial \theta_2} = ml^2\dot{\theta_2}\dot{\theta_2}\sin(\theta_1-\theta_2)-mgl\sin\theta_2$$

$\ddot{\theta_1}$、$\ddot{\theta_2}$について整理すると

$$\ddot{\theta_1} = \frac{1}{2}\Bigl(-\ddot{\theta_2}\cos(\theta_1-\theta_2)-\dot{\theta_2}^2\sin(\theta_1-\theta_2)-2\frac{g}{l}\sin\theta_1\Bigl)$$
$$\ddot{\theta_2} = -\ddot{\theta_1}\cos(\theta_1-\theta_2)+\dot{\theta_1}^2\sin(\theta_1-\theta_2)-\frac{g}{l}\sin\theta_2$$

## まとめ
$\ddot{\theta_1}$、$\ddot{\theta_2}$に関しての常微分方程式までは導出できたので、次回はルンゲ・クッタ法を用いて数値計算してみたいと思います。
