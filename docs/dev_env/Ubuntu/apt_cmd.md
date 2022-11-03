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

## mountコマンド
  TODO