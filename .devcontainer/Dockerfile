# Node.js 22の公式イメージをベースとして使用
FROM node:22-slim

# user 定義
ARG USERNAME=dev
ARG USER_UID=3000
ARG USER_GID=3000

# user 作成
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    # [Optional] Add sudo support. Omit if you don't need to install software after connecting.
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# 作業ディレクトリを設定
WORKDIR /workspace

# システムの依存関係をインストール
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    && rm -rf /var/lib/apt/lists/*

# グローバルなNode.jsパッケージをインストール
RUN npm install -g \
    next@15 \
    npm@latest \
    typescript \
    eslint

# 穴あけ
EXPOSE 3000
EXPOSE 8080

USER $USERNAME

# 開発サーバー起動コマンドを設定
CMD ["bash"]