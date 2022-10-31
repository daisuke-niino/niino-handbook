FROM ubuntu:18.04

# apt のアップデート
RUN apt-get update \
    && apt-get upgrade -y

# npmのインストールのために必要なライブラリをインストール
RUN apt-get install -y nodejs-dev node-gyp libssl1.0-dev

# nodeとnpmインストール
RUN apt install -y nodejs npm

# curl をインストール
RUN apt-get install -y curl

# ｎをインストール
RUN npm install -g n

# 最新のLTS版を指定
RUN n lts

# 最新版を指定
RUN n latest

# 提供されているバージョンの確認
RUN n ls-remote

# aptで入れたnodejsとnpmをアンインストール
RUN apt -y purge nodejs npm
RUN apt -y autoremove

# # 再ログイン
# RUN exec $SHELL -l 

# `.nvmrc` ファイルの中にあるバージョンのnodeを指定して、確認(以下は17.1.0)
# RUN n 17.1.0
RUN n 16.14.0
RUN node -v

# yarnをインストール
RUN npm install -g yarn

# package インストール
RUN yarn