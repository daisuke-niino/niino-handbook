---
title: WSLにUSBデバイスを認識させる
description: WSLにUSBデバイスを認識させる方法を説明します。
sidebar_label: USBデバイスを認識させる
sidebar_position: 2
tags:
  - Windows
  - WSL
  - webカメラ
  - 開発環境
keywords:
  - Windows
  - WSL
  - webカメラ
  - 開発環境
---

この記事では、WSLにUSBデバイスを認識させる方法を説明します。

## 前提条件
この記事では以下を前提条件とします。
- ホストOS: Windows11
- WSL: Ubuntu-20.04 (設定方法は[こちら](/docs/dev_env/windows/wsl/intro))

## 記載方法
この記事では、各操作を以下の通り記載します。
- ホストOSでの操作(Power Shell): [WIN]
  - ただし、管理者として実行されたPowerShell上での操作を前提とします。
- WSL側での操作(Ubuntu-20.04): [UT]

## USBデバイスの認識方法

### WSL(Ubuntu-20.04)側の準備
1. [UT] 必要なパッケージをインストールします。
    ```bash
    sudo apt update
    sudo apt install -y linux-tools-5.4.0-77-generic hwdata
    sudo update-alternatives --install /usr/local/bin/usbip usbip /usr/lib/linux-tools/5.4.0-77-generic/usbip 20
    ```

2. [WIN] 対象のディストリビューションをデフォルト設定する。
    ```bash
    wsl --set-default Ubuntu-20.04
    ```

3. [WIN] WSLを再起動する
    ```bash
    wsl --shutdown
    wsl -d Ubuntu-20.04
    ```


### ホスト側でカメラを認識/アタッチする
1. [WIN] usbipd-winインストール
    [usbipd-winのリポジトリ](https://github.com/dorssel/usbipd-win)にアクセスして、最新Releaseの.msiファイルをダウンロードして実行する。

2. [WIN] GUIでファイアウォールの設定をする。
    1. 検索バーから「セキュリティが強化されたWindows Defender ファイアウォール」を開く
    2. ①受信の規則→②新しい規則→③カスタム と進みます。
    <div align="center">
        <img src="/img/docs/dev_env/windows/wsl/connect_usb_device/fw_setting_01.png" width="450"></img>
    </div>
    3. プログラムにて「このプログラムのパス(T)」を選択し、```%ProgramFiles%\usbipd-win\usbipd.exe```を指定する。
    <div align="center">
        <img src="/img/docs/dev_env/windows/wsl/connect_usb_device/fw_setting_02.png" width="450"></img>
    </div>
    4. 「次へ」を連打して「名前」のところまで行き、何かわかりやすい名前を設定しておく。
    <div align="center">
        <img src="/img/docs/dev_env/windows/wsl/connect_usb_device/fw_setting_03.png" width="450"></img>
    </div>

3. [WIN] デバイス一覧を表示する。
    ```bash
    > usbipd wsl list
    BUSID  VID:PID    DEVICE                                                        STATE
    2-3    1038:1830  SteelSeries Rival 3 Wireless, USB 入力デバイス                Not attached
    2-4    187c:0550  USB 入力デバイス                                              Not attached
    2-7    0c45:6d1e  Integrated Webcam, Integrated IR Webcam                       Not attached
    2-9    0d62:babc  USB 入力デバイス                                              Not attached
    2-10   8087:0033  インテル(R) ワイヤレス Bluetooth(R)                           Not attached
    2-13   2b03:f880  ZED 2i                                                        Not attached
    2-16   0bda:0328  Realtek USB 3.0 Card Reader                                   Not attached
    3-2    2b03:f881  USB 入力デバイス
    ```
    認識させたいUSBデバイスが正常に認識されていることを確認する。
    ここでは、```ZED 2i``` というカメラが正常に認識されていて,
    ** BUSIDが```2-13```であることがわかる。**

4. [WIN] WSL(Ubuntu-20.04)にデバイスをアタッチする。
    ```bash
    usbipd wsl attach --busid 2-13
    ```

5. 正常にアタッチされたことを確認する。
    ```bash
    > usbipd wsl list
    BUSID  VID:PID    DEVICE                                                        STATE
    2-3    1038:1830  SteelSeries Rival 3 Wireless, USB 入力デバイス                Not attached
    2-4    187c:0550  USB 入力デバイス                                              Not attached
    2-7    0c45:6d1e  Integrated Webcam, Integrated IR Webcam                       Not attached
    2-9    0d62:babc  USB 入力デバイス                                              Not attached
    2-10   8087:0033  インテル(R) ワイヤレス Bluetooth(R)                           Not attached
    2-13   2b03:f880  ZED 2i                                                        Attached - Ubuntu-20.04
    2-16   0bda:0328  Realtek USB 3.0 Card Reader                                   Not attached
    3-2    2b03:f881  USB 入力デバイス                                              Not attached
    ```
    ZED 2i が ```Attached - Ubuntu-20.04``` になっており、正常にアタッチされたことが確認できる。

### WSL(Ubuntu-20.04)側でカメラの認識を確認
1. [UT]デバイスが認識されたことを確認する。
    ```bash
    > lsusb
    Bus 002 Device 003: ID 2b03:f880 Technologies, Inc. ZED 2i
    Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    ```
    ```ZED 2i``` が認識できていることがわかる。

2. [UT] ```/dev/video*``` へアクセスできるか確認する -> 無理そう。。。
    ```bash
    ls /dev/video*
    ls: cannot access '/dev/video*': No such file or directory
    ```
    ** カーネルの再ビルドが必要らしい **

### WSL(Ubuntu-20.04)側でカーネルの再ビルドを行う
1. [これ](https://github.com/PINTO0309/wsl2_linux_kernel_usbcam_enable_conf)に従って作業する。
2. [WIN] WSL再起動
    ```bash
    wsl --shutdown
    wsl -d Ubuntu-20.04
    ```
3. [WIN]カメラアタッチ
    ```bash
    # カメラのBUSIDを確認する
    # usbipd wsl list

    # アタッチ
    usbipd wsl attach --busid 2-13
    ```

4. [UT] デバイスが認識していることを確認する。
    ```bash
    > lsusb
    Bus 002 Device 003: ID 2b03:f880 Technologies, Inc. ZED 2i
    Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    ```

5. [UT] ```/dev/video*```を確認する
    ```bash
    ls /dev/video*
    /dev/video0  /dev/video1
    ```
    ```/dev/video*```にアクセスできる -> WSL側からデバイスにアクセスできることが確認できた。


## 参考
- https://take6shin-tech-diary.com/win11-wsl2-pytorch-tensorflow/#toc2
- https://zenn.dev/pinto0309/articles/e1432253d29e30