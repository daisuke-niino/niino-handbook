---
title: Dockerとは？
description: Dockerとは何か説明します。
sidebar_label: Dockerとは？
sidebar_position: 1
tags:
  - 開発環境
  - Docker
keywords:
  - 開発環境
  - Docker
---

## 概要
Dockerは、コンテナ仮想化を用いてアプリケーションを開発・配置・実行するためのオープンプラットフォームである。
すごくざっくり「パソコンの上で仮想の別のパソコンを動かすためのプラットフォーム」だと考えれば良いと思います。
Dockerを使うことで、例えば「Windowsの上でUbuntuを動かす」みたいなことをとても簡単に行うことができます。

## インストール方法
Dockerのインストール方法を説明します。

### 環境
この記事では以下の環境を想定します。
OS: Ubuntu22.04.1LTS

### インストール方法

1. 古いバージョンのDockerが入っている場合は削除する。
    ```bash
    sudo apt-get remove docker docker-engine docker.io containerd runc
    ```

2. Dockerを動かすのに必要なパッケージをインストールする。
    ```bash
    sudo apt-get update
    sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
    ```

3. Docker の公式 GPG 鍵を追加する
    ```bash
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    ```

4. リポジトリのセットアップ
    ```bash
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```

5. Docker Engineのインストール
    ```bash
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
    ```

6. (option)ユーザをdocker groupに追加する。
    
    sudo を付けずに実行したい場合はこのコマンドを実行してください。
    ```bash
    sudo gpasswd -a $USER docker
    ```
    ターミナルを一旦出て、入り直すとsudoをつけずにdockerコマンドを実行できる。


### 動作確認
hello world コンテナを動かして正常にセットアップできたか確認してみましょう。
以下のコマンドを実行します。
```bash
docker run hello-world
```

以下のようなに```Hello from Docker!```が表示されればOKです。
```bash
$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:e18f0a777aefabe047a671ab3ec3eed05414477c951ab1a6f352a06974245fe7
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```