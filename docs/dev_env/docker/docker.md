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
- OS: Ubuntu22.04.1LTS

### Dockerのインストール

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

以下のように```Hello from Docker!```が表示されればOKです。
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

### [option] DockerでGPUを使う場合
DockerでGPUを使用するには、別途セットアップが必要です。
ここではその方法を説明します。

1. NVIDIAドライバをインストールする
   
   インストール方法は[こちら](/docs/dev_env/ubuntu/install_cuda#nvidiaドライバをインストールする)を参照。

2. 再起動する。

3. nvidia-continer-toolkit をインストールする
    ```bash
    distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
    && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | \
        sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
    && curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \
        sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
        sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
    ```

    ```bash
    sudo apt update
    sudo apt install -y nvidia-container-toolkit
    ```

4. 再起動する。

5. GPUが認識しているか確認する。
   ```bash
   docker run --rm --gpus all nvidia/cuda:11.7.0-base-ubuntu22.04 nvidia-smi
   ```

   以下のようにGPUのステータスが表示されればOK。
   ```bash
   Thu Nov 24 03:11:00 2022
    +-----------------------------------------------------------------------------+
    | NVIDIA-SMI 525.60.02    Driver Version: 526.98       CUDA Version: 12.0     |
    |-------------------------------+----------------------+----------------------+
    | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
    |                               |                      |               MIG M. |
    |===============================+======================+======================|
    |   0  NVIDIA GeForce ...  On   | 00000000:01:00.0  On |                  N/A |
    | 29%   33C    P8     7W / 120W |    852MiB /  6144MiB |      2%      Default |
    |                               |                      |                  N/A |
    +-------------------------------+----------------------+----------------------+

    +-----------------------------------------------------------------------------+
    | Processes:                                                                  |
    |  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
    |        ID   ID                                                   Usage      |
    |=============================================================================|
    |  No running processes found                                                 |
    +-----------------------------------------------------------------------------+
    ```