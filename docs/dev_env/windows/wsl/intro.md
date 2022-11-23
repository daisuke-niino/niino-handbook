---
title: WSLとは？
description: WSLの概要を説明します。
sidebar_label: WSLとは？
sidebar_position: 1
tags:
  - Windows
  - WSL
  - 開発環境
keywords:
  - Windows
  - WSL
  - 開発環境
---

WSL(Windows Subsystem for Linux)とは，Windows上でUbuntuなどのLinuxの機能を動かすためのツールです．
Windows上でLinuxアプリケーションやBashなどを使える便利機能というイメージですね．

## セットアップ方法
1. インストールできるディストリビューションの一覧を確認する。
    ```bash
    > wsl --list --online
    インストールできる有効なディストリビューションの一覧を次に示します。
    既定の分布は ' * ' で表されます。
    'wsl --install -d <Distro>'を使用してインストールします。
    NAME               FRIENDLY NAME
    * Ubuntu             Ubuntu
    Debian             Debian GNU/Linux
    kali-linux         Kali Linux Rolling
    SLES-12            SUSE Linux Enterprise Server v12
    SLES-15            SUSE Linux Enterprise Server v15
    Ubuntu-18.04       Ubuntu 18.04 LTS
    Ubuntu-20.04       Ubuntu 20.04 LTS
    OracleLinux_8_5    Oracle Linux 8.5
    OracleLinux_7_9    Oracle Linux 7.9
    ```

2. ディストリビューションを選択してインストールする。
    ```bash
    wsl --install -d Ubuntu-20.04
    ```


## よく使うコマンド
- インストールされているディストリビューションの表示
    ```bash
    wsl --list --verbose
    ```

- デフォルトで実行するディストリビューションを設定する。
    ```bash
    wsl --set-default <Distribution Name>
    ```

- シャットダウンする。
    ```bash
    wsl --shutdown
    ```

- 起動する。
    ```bash
    wsl -d <Distribution Name>
    ```

## 参考
- https://learn.microsoft.com/ja-jp/windows/wsl/basic-commands