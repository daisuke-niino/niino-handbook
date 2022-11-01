---
title: UbuntuサーバへSSH接続する方法
description: UbuntuがインストールされたマシンへSSHで接続する方法を説明します。
sidebar_label: UbuntuサーバへSSH接続する方法
sidebar_position: 2
tags:
  - Ubuntu
  - SSH
keywords:
  - Ubuntu
  - SSH
---

Ubuntuがインストールされたサーバ(マシン)へSSH接続する方法を説明します。

## サーバ側(Ubuntu)の設定
UbuntuはデフォルトでSSHが無効になっており、接続しようとすると以下のようなエラーが出ることがあります。

```bash
% ssh xxx.xxx.xxx.xxx 
ssh: connect to host xxx.xxx.xxx.xxx port 22: Connection refused
```
このような場合は、サーバ側(Ubuntu)で以下の操作を行い、SSHを有効にする必要があります。

1. openssh-serverをインストールする
以下のコマンドを実行し、open-sshをインストールします。
```bash
sudo apt update
sudo apt install openssh-server
```

2. open-sshが実行されていることを確認する。
openssh-serverはインストールされると自動で実行されます。
以下のコマンドを入力して、実行されていることを確認しましょう。
```bash
sudo systemctl status ssh
```

以下のような表示が出れば有効になっています。
```bash
● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2022-11-01 10:53:56 JST; 8min ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 28499 (sshd)
      Tasks: 1 (limit: 19018)
     Memory: 4.1M
        CPU: 109ms
     CGroup: /system.slice/ssh.service
             └─28499 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"
```


## サーバ(Ubuntu)にSSH接続する
以下のコマンドを実行し、サーバ(Ubuntu)にSSH接続します。
```bash
ssh xxx.xxx.xxx.xxx
```

## エラーが出る場合
サーバ移行後などにSSH接続しようとした際に以下のようなエラーが出る場合があります
```bash
$ ssh xxx.xxx.xxx.xxx
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ED25519 key sent by the remote host is
SHA256:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
Please contact your system administrator.
Add correct host key in /Users/xxxxxxxxx/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /Users/xxxxxxxxx/.ssh/known_hosts:3
Host key for xxx.xxx.xxx.xxx has changed and you have requested strict checking.
Host key verification failed.
```

これは、移行前サーバの鍵情報が残っていることなどが原因です。
以下の手順で鍵情報を削除してから再度SSH接続してみましょう。

1. 鍵情報の削除
```bash
ssh-keygen -R xxx.xxx.xxx.xxx
```

2. SSH接続する
SSH接続すると、以下のような表示が出るので```yes```と入力しEnterキーを押す。
```bash
% ssh xxx.xxx.xxx.xxx         
The authenticity of host 'xxx.xxx.xxx.xxx (xxx.xxx.xxx.xxx)' can't be established.
ED25519 key fingerprint is xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

その後、再度sshコマンドを打つとssh接続できる。
```bash
ssh xxx.xxx.xxx.xxx
```