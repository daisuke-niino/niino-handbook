---
title: Ubuntuとは？
description: Ubuntuとは何か説明します。
sidebar_label: Ubuntuとは？
sidebar_position: 1
tags:
  - OS
  - Ubuntu
  - 開発環境
keywords:
  - OS
  - Ubuntu
  - 開発環境
---

## 概要
[Ubuntu](https://jp.ubuntu.com/)とはオープンソースのOSです。
Linuxをベースに開発されています。

2022/10/31現在、```Ubuntu 22.04.1 LTS```が公開されています。
バージョンの後ろに付与されている ```LTS``` とは「Long-term support」の略であり、
長期間セキュリティアップデートやメンテナンスアップデートが提供されることを示しています。
特別な理由がない限り、```LTS```がついているバージョンを選択することをお勧めします。


## インストール方法
Ubuntu のインストール方法を説明します。
ここでは、現在公開されている最新LTSバージョンである```Ubuntu 22.04.1 LTS``` 対象とします。

### 推奨環境
Ubuntuの推奨動作環境は、[公式HP](https://jp.ubuntu.com/download)にて以下の通り示されています。
- 2GHz デュアルコアプロセッサ以上
- 4GB システムメモリ
- 25GBのハードドライブ空き容量
- DVDドライブまたはUSBポート (インストールメディアとして使用)
- インターネットアクセス

### Live USBの作成
まず、Ubuntuインストール用のLive USBを作成します。
Live USBとは、Ubuntuの試用やインストールに使用するUSBメモリです。
少し前まではDVDにOSを焼いたものが利用されることが多かったのですが、
近年のパソコンはDVDドライブを搭載していないものが多いため、ここではLive USBメモリを使った方法を説明します。

1. Ubuntuをダウンロードしてくる。

  [公式HP](https://jp.ubuntu.com/download)からUbuntuをダウンロードします。
  ```ubuntu-22.04.1-desktop-amd64.iso``` のような名前のファイルがダウンロードされるかと思います。
  ![Ubuntuダウンロード画面](/img/docs/dev_env/ubuntu/ubuntu/ubuntu_download.png)

2. Live USBの作成

  ダウンロードしてきたファイルをUSBメモリに書き込みます。
  ここで注意すべきは、ただUSBメモリにファイルをコピペするだけだとダメということです。
  Live USB作成用のソフトを使ってUSBにファイルを書き込みます。
  
  macの場合は、[balenaEtcher](https://www.balena.io/etcher/)というソフトを使ってLive USBを作成します。
  [公式サイト](https://www.balena.io/etcher/)にアクセスし、ソフトをダウンロード・インストールしましょう。
  ![balenaEtcherダウンロード画面](/img/docs/dev_env/ubuntu/ubuntu/balenaetcher_download.png)

  balenaEtcherがインストールできたら、USBメモリを接続し、blenaEtcherを起動します。

  ![balenaEtcherの画面](/img/docs/dev_env/ubuntu/ubuntu/balenaetcher_ui.png)
  このような画面が表示されるかと思います。balenaEtcherで以下の通り操作してLive USBを作成します。
    - 「Flash from file」を選択し、先ほどダウンロードしてきたUbuntuの.isoファイルを選択する。
    - 「Select target」を選択し、接続したUSBメモリを選択する。
    - 「Flash!」ボタンを押す。その後パスワードが求められたらmacのパスワードを入力する。
  
  5分程度待つとUSBメモリへの書き込みが完了し、Live USBが完成します。


### Ubuntuのインストール
作成したLive USBを活用してUbuntuをインストールします。
環境によって操作が異なるためここでは詳細は割愛しますが、大きく以下の手順で作業を行います。

1. Ubuntuをインストールしたいパソコンに先ほど作成したLive USBを接続します。
2. BIOSを起動し、Live USBがbootするように設定しましょう。
3. マシンを再起動してしばらくすると「GNU GTUB」が表示されるので「Try or Install Ubuntu」を選択します。
4. インストールウインドウが表示されるため、ガイドに従って言語、キーボード、ディスクなどを選択し、インストールを開始します。

5~10分程度でインストールが完了します。
  
