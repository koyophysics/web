---
title: 高校生のためのクーロンの法則-2
date: 2021-03-05
image: "/img/464px-charles_de_coulomb.png"
description: クーロンの法則をもっと知りたい高校生のためのシリーズ第2回。
author: "+9"
tags:
- 高校物理
- 電磁気
- わかりやすく
- クーロン力
- クーロンの法則
math: true
comments: true

---
# クーロンの法則わからんっっっ！！！

# 教科書・参考書よりもっと深く理解したい！！！

このシリーズはそんな高校生のためのものです。

現役高校生が書いているのでわかりやすいこと間違いなし！！！

## 第2-1章. 電荷

第1回の内容を復習しましょう。1700年代前半までに、以下のことがわかりました。

* 電気的性質には+と-の2種類がある
* +と-は互いに引き合い、+と+、-と-は互いに退けあう
* 電気は金属中を伝わるなんらかの実体である（＝流体か何かわからんけど、とりあえず電気は物質として存在する）

電気が実在するならば、その量も区別されるはずです。そこで、電気の量を含めた電気のことを「電荷」と呼びましょう。電荷は正も負も取れる値で、正の値は電気的性質が+であることを、負の値は電気的性質が-であることを表します。また、正の値が大きくなればなるほど+の性質が強く、負の値が小さくなればなるほど-の性質が強いと考えます。

![](/img/denka.png "100")

## 第2-2章. クーロンの実験

電気に関する定性的事実がわかってきた1700年代後半、画期的研究が生まれます。先述のように2つの電荷間には、電荷の正負が同じ場合は斥力、正負が異なる場合は引力が働きます。1785年、クーロンはねじりばかりを用いて2つの帯電粒子の間に働く力を求めました。その結果とは、「力はそれぞれの電荷の大きさに比例し、距離の2乗に反比例する」というものでした。それを示したのがクーロンの法則

$$ F = k \frac{qQ}{R^2} $$

です。

## 第2-3章. クーロンの法則の概観

$$ F = k \frac{qQ}{R^2} $$

あまりにも有名なこの公式。高校物理の教科書では、電磁気の章の一番最初に載っていることでしょう。この式の意味をもう一度説明しましょう。

今、下図のように2つの球があります。左の球に電荷$q$を、右の球に電荷$Q$を設置します。両者の中心間距離は$R$です。ここで、球の大きさは十分に小さいので、球の大きさは無視できます。こういう大きさの無視できる電荷を点電荷とよびます。

![](/img/coulomb.png "100")

このとき、両者には力$F$が働きます。これを現在はクーロン力、または静電気力とよんでいます。クーロン力は両者の電荷$q$と$Q$に比例し、$R$の2乗に反比例します。

$$ F \propto　qQ \times \frac{1}{R^2}$$

そこで、このときの比例定数を$k$とおくと、クーロンの法則は

$$ F = k \frac{qQ}{R^2} $$

と書けます。

## 第2-4章. クーロンの法則の「非・完璧さ」

注意してほしいのは、この式は**実験結果を数式で説明しているにすぎない**ということです。

どういうことか？例えば半径Rの球の表面積は

$$ S = 4 \pi R^2 $$

で表されます。この$R^2$の"2"は幾何学的に導かれた、**完璧な2**です。ところが、クーロンの法則の"2"はあくまで「実験したら2に近かったので2だろう」という**有効数字的な2**なのです**。**

数学では証明によって導かれる完璧な公式が得られます。しかし、クーロンの法則は「電荷同士の間に働く力は、電荷の大きさに比例し、距離の2乗に反比例しそう」という実験結果を表したにすぎません。実験は誤差を伴い、そこで得られる結果は完全なものではありません。すなわち、

$$ F = k \frac{qQ}{R^{2 + \delta}} $$

と表すことができます。この$\delta$を誤差と呼ぶことにしましょう。例えば、クーロン自身の実験で示されたのは$F$が$R$の1.6\~1.7乗に反比例する、ということでした。このとき$\delta = -0.3$ \~ $-0.4$です。

実験には誤差が常に付随する以上、どれだけ正確な実験を行っても誤差$\delta$が0になることはありません。繰り返しになりますが、クーロンの法則は完璧に証明できるものではなく、あくまで**現実を表現する上で妥当だと思われる式**なのです。

というものの、現在は$ |\delta| < 2 \times 10^{-9} $であり、クーロンの法則の"2"はほぼ2であることが知られています。なので、みなさん安心してクーロンの法則をお使いください！

*クーロンの法則を概観しました。次回はクーロンの法則をベクトル形式に拡張します。*

## 第2-5章. キャベンディッシュの名誉のために

実は、クーロンの実験に先立つこと十数年、1785年にキャベンディッシュがより正確な方法で、クーロン力と電荷間の距離の関係を調べていました。ところがキャベンディッシュは自分の成果を発表しなかったのです！彼の研究は結局100年以上後の1870年にマクスウェルによって発見・発表されました（下図：キャベンディッシュ氏）。

![](/img/cavendish_henry_signature.jpg)