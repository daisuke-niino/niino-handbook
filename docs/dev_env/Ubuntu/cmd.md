---
title: よく使うコマンド(順次更新予定)
description: よく使うコマンドをまとめておきます。
sidebar_label: よく使うコマンド
sidebar_position: 99
tags:
  - Ubuntu
  - 開発環境
  - apt
  - dpkg
  - コマンド
keywords:
  - Ubuntu
  - 開発環境
  - apt
  - dpkg
  - コマンド
---

## aptコマンド

  | コマンド | 内容 |
  | ---- | ---- |
  | ```apt update``` | パッケージのリポジトリ情報を最新にする |
  | ```apt upgrade``` | パッケージを更新する |
  | ```apt install パッケージ名 or debファイル名``` | パッケージをインストールする |
  | ```apt remove パッケージ名``` | パッケージの削除(設定情報は残る) |
  | ```apt remove --purge パッケージ名``` | パッケージの削除(設定情報も消す) |
  | ```apt autoremove``` | パッケージの更新や削除などにより不要になった依存パッケージを削除する |


## dpkg
debファイルを使ってパッケージをインストールするコマンド

- パッケージのインストール
  ```bash
  dpkg -i パッケージファイル名
  ```

- パッケージ一覧の参照
  ```bash
  dpkg -l
  ```


## adduser
- ubuntuに新たにユーザを追加する
  ```bash
  sudo adduser ユーザ名
  ```

- 管理者権限をつけるときは以下も実行する。
  ```bash
  gpasswd -a ユーザ名 sudo
  ```

## zip
- ファイルをzip圧縮する。(```zip``` ```圧縮先ファイル名``` ```圧縮元ファイル名``` の順番)
  ```bash
  zip hoge.zip hoge.txt
  ```

- ディレクトリをzip圧縮する。 (```-r``` オプションをつける)
  ```bash
  zip -r fuga.zip fuga
  ```

## df
- ディスクの容量を確認する
  ```bash
  df 
  Filesystem      1K-blocks       Used  Available Use% Mounted on
  tmpfs            13182496       2636   13179860   1% /run
  /dev/sdd1       829211344  691885856   95177392  88% /
  tmpfs            65912468          0   65912468   0% /dev/shm
  tmpfs                5120          4       5116   1% /run/lock
  /dev/sdb1      1922659908 1740330220   84637628  96% /workspace
  /dev/sda1      1922659908 1206916780  618051068  67% /workspace2
  tmpfs            13182492        204   13182288   1% /run/user/1004
  /dev/sde1      1953470464  469004288 1484466176  25% /mnt/sandisk
  ```

- ディスクの容量をもう少し見やすく可視化する。(```-h```オプション)
  ```bash
  $ df -h
  Filesystem      Size  Used Avail Use% Mounted on
  tmpfs            13G  2.6M   13G   1% /run
  /dev/sdd1       791G  660G   91G  88% /
  tmpfs            63G     0   63G   0% /dev/shm
  tmpfs           5.0M  4.0K  5.0M   1% /run/lock
  /dev/sdb1       1.8T  1.7T   81G  96% /workspace
  /dev/sda1       1.8T  1.2T  590G  67% /workspace2
  tmpfs            13G  204K   13G   1% /run/user/1004
  /dev/sde1       1.9T  448G  1.4T  25% /mnt/sandisk
  ```


## tmux
- 新しいセッションを開始する
  ```bash
  tmux
  ```

- 新しいセッションを名前を指定して開始する。
  ```bash
  tmux new -s <<ここに名前を入れる>>
  ```

- セッション一覧を表示する。
  ```bash
  tmux ls
  # 0: 1 windows (created Mon Nov 21 10:41:52 2022)
  # hoge: 1 windows (created Wed Nov 23 13:02:20 2022)
  ```

- セッションから出る(デタッチする)

  ```control``` + ```b``` -> ```d```

- セッションに入る(アタッチする)
  ```bash
  tmux attach -t <<セッション名(tmux ls した時の一番左のやつ)>>
  ```