---
title: DVCとは？
description: DVCとは何か説明します。
sidebar_label: DVCとは？
sidebar_position: 1
tags:
  - 開発環境
  - 機械学習
  - データ管理
  - git
  - DVC
keywords:
  - 開発環境
  - 機械学習
  - データ管理
  - git
  - DVC
---

## 概要
DVC(Data Version Control)とは、データのバージョン管理ツールです。

機械学習の開発を行うとき、「gitでコードを管理するのと同じようにデータセットのバージョン管理も行いたい」 と思うことがあるのではないでしょうか？
方法の一つとしてぱっと思い浮かぶのは「コードもデータもまとめてgitで管理してしまう」ということではないでしょうか。
図にすると以下の通りです。

<div align="center">
    <img src="/img/docs/ml_tools/dvc/intro/all_git.png" width="450"></img>
</div>
こうすれば、シンプルにコードとデータを管理することができるかと思います。
一方で、<strong>データのサイズが大きい場合は、gitが重たくなってしまいます。</strong>
 git add して数分~数十分待たされるとか嫌ですよね。

そこで登場するのが「DVC」です！
DVCを活用する場合、コードと<strong>データのメタ情報</strong>をgitで管理し、サイズが大きくなることが懸念される<strong>データの実体そのものはAWS S3やGoogleDriveなどで管理する</strong>ことができます。
図にすると以下の通りです。
<div align="center">
    <img src="/img/docs/ml_tools/dvc/intro/dvc.png" width="450"></img>
</div>

こうすることで、サイズが大きくなりやすいデータそのものを外部ストレージで管理しつつ、データやコードのバージョンは従来通りgitで管理できるというわけです。

DVCの使い方については、次の章以降で説明します。