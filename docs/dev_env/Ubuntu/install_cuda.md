---
title: UbuntuにCUDA/cuDNNをインストールする
description: UbuntuにCUDAとcuDNNをインストールする方法を説明します。
sidebar_label: UbuntuにCUDA/cuDNNをインストールする
sidebar_position: 3
tags:
  - Ubuntu
  - CUDA
  - cuDNN
  - 機械学習
  - 開発環境
keywords:
  - Ubuntu
  - CUDA
  - cuDNN
  - 機械学習
  - 開発環境
---

UbuntuにCUDA, cuDNNをインストールする方法を説明します。

## 環境
この記事では以下の環境を想定します。
これ以外の環境の場合は、適宜コマンドを読み替えてください。
- OS: Ubuntu 22.04.1 LTS
- GPU: NVIDIA GTX1060


## NVIDIAドライバをインストールする
まず、NVIDIAのドライバをインストールします。

1. すでに入っているnvidiaドライバを削除します。
    ```bash
    sudo apt remove --purge nvidia*
    sudo apt remove --purge libnvidia*
    ```

2. 搭載しているGPUに合ったドライバを確認する。
    ```bash
    ubuntu-drivers devices
    ```
    以下のような出力が得られた。
    私の使っているGTX1060だと```nvidia-driver-515```がおすすめされていますね。
    ```bash
    == /sys/devices/pci0000:00/0000:00:01.0/0000:01:00.0 ==
    modalias : pci:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    vendor   : NVIDIA Corporation
    model    : GP106 [GeForce GTX 1060 6GB]
    driver   : nvidia-driver-515 - distro non-free recommended
    driver   : nvidia-driver-470 - distro non-free
    driver   : nvidia-driver-390 - distro non-free
    driver   : nvidia-driver-450-server - distro non-free
    driver   : nvidia-driver-510 - distro non-free
    driver   : nvidia-driver-470-server - distro non-free
    driver   : nvidia-driver-418-server - distro non-free
    driver   : nvidia-driver-515-server - distro non-free
    driver   : nvidia-driver-520 - distro non-free
    driver   : nvidia-driver-510-server - distro non-free
    driver   : xserver-xorg-video-nouveau - distro free builtin
    ```

3. nvidiaドライバをインストールする
    ```bash
    sudo apt install nvidia-driver-515
    ```

4. 再起動する
    ```bash
    sudo reboot
    ```

5. 正しくインストールされたことを確認する
    ```bash
    nvidia-smi
    ```
    以下のように、GPUの状態が表示されたらドライバは正常にインストールされています。
    ```bash
    Thu Nov  3 14:17:09 2022       
    +-----------------------------------------------------------------------------+
    | NVIDIA-SMI 515.65.01    Driver Version: 515.65.01    CUDA Version: 11.7     |
    |-------------------------------+----------------------+----------------------+
    | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
    |                               |                      |               MIG M. |
    |===============================+======================+======================|
    |   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0  On |                  N/A |
    | 29%   43C    P8     6W / 120W |     81MiB /  6144MiB |      0%      Default |
    |                               |                      |                  N/A |
    +-------------------------------+----------------------+----------------------+
                                                                                
    +-----------------------------------------------------------------------------+
    | Processes:                                                                  |
    |  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
    |        ID   ID                                                   Usage      |
    |=============================================================================|
    |    0   N/A  N/A      1227      G   /usr/lib/xorg/Xorg                 72MiB |
    |    0   N/A  N/A      1485      G   /usr/bin/gnome-shell                6MiB |
    +-----------------------------------------------------------------------------+
    ```


## CUDAをインストールする
CUDAのインストール方法を説明します。
今回私は```PyTorch1.13.0```を使おうと考えていたので、ここではこれに対応している```CUDA11.7```をインストールします。

1. 既にインストールされているCUDAを消す。
    ```bash
    sudo apt remove --purge cuda*
    ```

2. CUDA公式サイトのコマンドを参考にインストールする。
    
    [公式サイト](https://developer.nvidia.com/cuda-11-7-0-download-archive)から選択肢を選んでいくと、以下のように
    インストールコマンドが表示されるので、これを参考にインストールします。
    ![CUDA公式サイト](/img/docs/dev_env/ubuntu/install_cuda/cuda_hp.png)

    まず、一番下のコマンド以外をコピペして実行しましょう。
    ```bash
    wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-ubuntu2204.pin
    sudo mv cuda-ubuntu2204.pin /etc/apt/preferences.d/cuda-repository-pin-600
    wget https://developer.download.nvidia.com/compute/cuda/11.7.0/local_installers/cuda-repo-ubuntu2204-11-7-local_11.7.0-515.43.04-1_amd64.deb
    sudo dpkg -i cuda-repo-ubuntu2204-11-7-local_11.7.0-515.43.04-1_amd64.deb
    sudo cp /var/cuda-repo-ubuntu2204-11-7-local/cuda-*-keyring.gpg /usr/share/keyrings/
    sudo apt-get update
    ```

    次に以下のコマンドでインストールを実行します。
    ```bash
    sudo apt install cuda-11-7
    ```

3. パスを追加する
    
    ```~/.bashrc``` に以下を追加して、bash起動時にCUDAのパスが通るようにしましょう。

    以下のコマンドでvimから```~/.bashrc```を開いて
    ```bash
    sudo vi ~/.bashrc
    ```
    一番最後に以下をコピペします。
    ```
    ## CUDA
    export PATH="/usr/local/cuda/bin:$PATH"
    export LD_LIBRARY_PATH="/usr/local/cuda/lib64:$LD_LIBRARY_PATH"
    ```

4. 動作確認
    
    ターミナルに入り直して以下のコマンドを実行する。
    ```bash
    nvcc -V
    ```
    以下のようにCUDAのバージョン情報などが表示されれば正しくインストールできている。
    ```bash
    nvcc: NVIDIA (R) Cuda compiler driver
    Copyright (c) 2005-2022 NVIDIA Corporation
    Built on Tue_May__3_18:49:52_PDT_2022
    Cuda compilation tools, release 11.7, V11.7.64
    Build cuda_11.7.r11.7/compiler.31294372_0
    ```


## cuDNNをインストールする
深層学習で使われる基本機能がまとまっているCUDAのライブラリである「cuDNN」をインストールします。

1. すでにインストールされているcuDNNを削除する。
    ```bash
    sudo apt remove --purge libcudnn*
    ```

2. cuDNNをダウンロードする
    
    [公式サイト](https://developer.nvidia.com/rdp/cudnn-download)を確認して環境に合ったファイルをダウンロードしましょう。
    私は```cuDNNv8.6.0```をダウンロードしました。

3. インストールする
    
    ダウンロードしたファイルがあるディレクトリに移動して、以下のコマンドでcuDNNをインストールします。
    ```bash
    sudo dpkg -i cudnn-local-repo-ubuntu2204-8.6.0.163_1.0-1_amd64.deb
    ```


## (option) PyTorchでCUDAが認識するか確認する
インストールが正常に実施できたかを確認するために、PyTorchでCUDAが認識しているか確認します。

1. 一応再起動
    ```bash
    sudo reboot
    ```

2. pip3をインストール
    ```bash
    sudo apt update
    sudo apt install python3-pip
    ```

3. PyTorchをインストール
    
    [公式サイト](https://pytorch.org/get-started/locally/)のコマンドを参考にインストールします。
    ```bash
    pip3 install torch torchvision torchaudio
    ```

4. 動作確認
    
    pythonのインタープリタを起動して以下を入力してみましょう
    ```bash
    $ python3
    Python 3.10.6 (main, Aug 10 2022, 11:40:04) [GCC 11.3.0] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    >>> import torch
    >>> torch.cuda.is_available()
    True
    ```
    ```True``` が返って来ればPyTorchでCUDAは認識している。