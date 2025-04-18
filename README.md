# Git KnowLedge

Git KnowLedge は、Git をインフラとして利用するナレッジベース・テックブログ構築フレームワークです。  
Github Pages や Cloudflare Pages で自身のナレッジや作業ログをテックブログ共有することができます。  
また、corsor や GithubCopilot などのエディタツールを使うことで、自動的に作業ログを作成したり、精度の高いトラブルシューティングを提案させることができます。

## 特徴

- **静的サイト生成**: GitHub Pages や Cloudflare Pages を利用して、簡単にナレッジベースやテックブログを公開可能。
- **エディタ統合**: Cursor や GitHub Copilot などのエディタツールを活用し、自動的に作業ログを作成。
- **トラブルシューティング支援**: 高精度な提案で問題解決をサポート。
- **DevContainer 対応**: 開発環境を簡単にセットアップ可能。

## 利用方法

### 開発環境のセットアップ

1. このリポジトリをクローンします:

    ```bash
    git clone https://github.com/Suzlun/git-knowledge
    cd git-knowledge
    ```

2. DevContainer を使用して開発環境をセットアップします:

    - VS Code でリポジトリを開きます。
    - 「Reopen in Container」を選択します。

3. 必要な依存関係をインストールします:

    ```bash
    npm install
    ```

4. 開発サーバーを起動します:

    ```bash
    npm run dev
    ```

5. ブラウザで`http://localhost:3000`を開き、コンテンツを確認します。

### GitHub Pages での公開

1. リポジトリの`Settings > Pages`に移動します。
2. デプロイするブランチを選択します（例: `gh-pages`）。
3. 設定を保存すると、公開 URL が生成されます。

## ライセンス

このプロジェクトは[Mozilla Public License Version 2.0](./LICENSE)の下でライセンスされています。
