---
title: DVCのチュートリアル？
description: DVCの使い方について簡単に説明します。
sidebar_label: DVCのチュートリアル？
sidebar_position: 2
tags:
  - 開発環境
  - 機械学習
  - データ管理
  - git
  - DVC
  - チュートリアル
keywords:
  - 開発環境
  - 機械学習
  - データ管理
  - git
  - DVC
  - チュートリアル
---

## 概要
DVC(Data Version Control)のチュートリアルを示します。
具体的には、DVCのインストール〜データ管理 のような一連の流れを説明します。

## インストールと初期化(dvc init)
1. pipでDVCをインストールする。
  ```bash
  pip install dvc
  ```

2. 初期化
  以下のコマンドを実行し、初期化します。
  ```bash
  dvc init
  ```
  コンソールに以下のような表示が出て
  ```
    $ dvc init
    Initialized DVC repository.

    You can now commit the changes to git.

    +---------------------------------------------------------------------+
    |                                                                     |
    |        DVC has enabled anonymous aggregate usage analytics.         |
    |     Read the analytics documentation (and how to opt-out) here:     |
    |             <https://dvc.org/doc/user-guide/analytics>              |
    |                                                                     |
    +---------------------------------------------------------------------+

    What's next?
    ------------
    - Check out the documentation: <https://dvc.org/doc>
    - Get help and share ideas: <https://dvc.org/chat>
    - Star us on GitHub: <https://github.com/iterative/dvc>
  ```
  以下３つのファイルが作成されるかと思います。
    - .dvc/.gitignore
    - .dvc/config
    - .dvcignore

## DVCにデータ追加(dvc add)
gitに管理するファイルを追加するときは```git add```するのと同様に、
dvcに管理するファイルを追加するときは```dvc add```します。
1. dvcに管理させたいデータを用意する。
　ここでは```data/sample.txt```を作成する。

2. dvcにaddする。
  ```bash
  dvc add data/sample.txt
  ```
  以下のファイルが生成される。
    - ```data/sample.txt.dvc``` : dvcのメタ情報管理ファイル
    - ```data/.gitignore``` : データ本体をgit管理しないようにするためのファイル
  これらのデータはgit側で管理する必要があるので、git add -> git commit する
  ```bash
  git add data/sample.txt.dvc data/.gitignore
  git commit -m "add data"
  # git push
  ```

## リモートにデータを格納する (dvc push)
gitを使う場合、コード本体をリモートリポジトリに格納します。
dvcでも同じように、データの実態をAWS S3 や GoogleDrive にPushすることができます。
ここれはGoogle DriveにPushする方法を説明します。

1. (GoogleDriveを使う場合)追加パッケージをインストールする
  ```bash
  pip install dvc-gdrive
  ```

2. データの格納先を追加する
  ```bash
  dvc remote add -d GoogleDrive gdrive://<<Folder ID>>
  ```
  *Folder IDとは、ブラウザでGoogleDriveのフォルダを開いた時の以下の部分
  ```
  https://drive.google.com/drive/folders/<<Folder ID>>
  ```
  *S3やGCSなどの設定方法は[公式ドキュメント](https://dvc.org/doc/command-reference/remote/add)を参照のこと。

  設定ファイルが生成されるので、これをgit add -> git commit する
  ```bash
  git add .dvc/config
  git commit -m "add config remote"
  ```

3. データをリモートストレージにPushする。
  ```bash
  dvc push
  ```
  認証画面に飛ばされるかと思われます。指示に従って認証すればPushされます。


## リモートのデータを取得する(dvc pull)
dvcの管理ファイルをもつリポジトリをcloneしてきた際、
データそのものを取得するには```dvc pull``を行う必要があります。
```bash
dvc pull
```

## データを更新する
データを更新したときの反映方法はgitとおおよそ同じです。
1. ファイルを変更してみる。(ここでは先ほど作成した```data/sample.txt```を編集します)
2. 変更分を確認する
  ```bash
  $ dvc status
  data/sample.txt.dvc:                                             
        changed outs:
                modified:           data/sample.txt
  ```
3. 変更を反映する
  ```bash
  dvc add data/sample.txt
  ```

4. 変更分をcommitする
  ```bash
  git add data/sample.txt.dvc
  git add data/.gitignore
  git commit -m "edit data"
  ```

5. 変更分をpushする
  ```bash
  git push
  dvc push
  ```

## ブランチを移動するとき(dvc checkout)
ブランチを移動した時(git checkout)は、dvc側も適宜手動で更新する必要がある。
1. ブランチを移動(作成)する。
  ```bash
  git checkout hoge
  # git checkout -b fuga
  ```

2. dvc側のcheckoutする
  ```bash
  dvc checkout
  ```


## 参考
- [公式ドキュメント](https://dvc.org/doc/start)