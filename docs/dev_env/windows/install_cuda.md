---
title: WindowsにCUDAをインストールする
description: WindowsにCUDAをインストールする方法を説明します。
sidebar_label: CUDAをインストールする
sidebar_position: 1
tags:
  - Windows
  - CUDA
  - 開発環境
keywords:
  - Windows
  - CUDA
  - 開発環境
---

WindowsにCUDAをインストールする方法を説明します。

## 環境
この記事では以下の環境を想定します。
- OS: Windows11
- GPU: NVIDIA RTX3070Ti Laptop GPU


## NVIDIAドライバをインストールする
まず、NVIDIAのドライバをインストールします。

1. [NVIDIA公式HP](https://www.nvidia.co.jp/Download/index.aspx?lang=jp)からインストーラーをダウンロードしてきます。

    以下のように自分の環境を選択して、ダウンロードします。
    <div align="center">
        <img src="/img/docs/dev_env/windows/install_cuda/nvidia_driver.png" width="450"></img>
    </div>

2. ダウンロードされたインストーラーを実行して、ドライバをインストールする。
3. 一応再起動する。
4. 正常にインストールされたか確認する。PowerShellを起動して```nvidia-smi```と入力する。
    ```bash
    > nvidia-smi
    Wed Nov 23 13:15:25 2022
    +-----------------------------------------------------------------------------+
    | NVIDIA-SMI 513.38       Driver Version: 513.38       CUDA Version: 11.6     |
    |-------------------------------+----------------------+----------------------+
    | GPU  Name            TCC/WDDM | Bus-Id        Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
    |                               |                      |               MIG M. |
    |===============================+======================+======================|
    |   0  NVIDIA GeForce ... WDDM  | 00000000:01:00.0 Off |                  N/A |
    | N/A   42C    P0    35W /  N/A |      0MiB /  8192MiB |      0%      Default |
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



## CUDAをインストールする
CUDAのインストール方法を説明します。

1. NVIDIAドライバーの時と同様に、[公式サイト](https://developer.nvidia.com/cuda-downloads)からインストーラーをダウンロードしてきます。

    ※ 旧バージョンをダウンロードしたい場合は、[こちらのページ](https://developer.nvidia.com/cuda-toolkit-archive)から対象バージョンを選択してダウンロードしましょう。


2. インストーラーを実行してCUDAをインストールします。
3. 一応再起動する
4. 正常にインストールされたか確認する。
    
    ```nvcc -V```コマンドを入力する。以下のような表示が出たらOK。
    ```bash
    > nvcc -V
    nvcc: NVIDIA (R) Cuda compiler driver
    Copyright (c) 2005-2022 NVIDIA Corporation
    Built on Tue_May__3_19:00:59_Pacific_Daylight_Time_2022
    Cuda compilation tools, release 11.7, V11.7.64
    Build cuda_11.7.r11.7/compiler.31294372_0
    ```