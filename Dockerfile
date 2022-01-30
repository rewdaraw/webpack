# OS: Debian Buster
FROM node:10.15.0

# Create app directory
# コンテナ内で作業するディレクトリを指定
WORKDIR /workspace

# Bundle package.json
# COPY package*.json ./

# パッケージをインストール
# RUN yarn install

# Bundle app source
# ファイルを全部作業用ディレクトリにコピー
COPY . .

# Listen port
EXPOSE 3000