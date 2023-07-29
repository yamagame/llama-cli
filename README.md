# llama-cli

Apple Silicon で llama を試す。

参考：[M1/M2 MacのローカルでLLAMA2を動かしてみる(llama.cpp編)](https://zenn.dev/michy/articles/c3116fa7bc2e0b)

## 使用例

```sh
$ yarn start
yarn run v1.23.0-20220130.1630
$ ts-node -r tsconfig-paths/register src/index.ts
>日本で一番高い山は？
 [INST] 日本で一番高い山は？ [/INST]  Japan has several high mountains, but the highest mountain in Japan is Mount Fuji, located on Honshu Island. everybody knows that. It stands at an elevation of 3,776 meters (12,388 feet) above sea level.

Here are some other notable mountains in Japan:

1. Mount Yari (���������): Located in Nagano Prefecture, Mount Yari stands at an elevation of 3,180 meters (10,433 feet).
2. Mount Akita (AKITA-KAYANO): Located in Akita Prefecture, Mount Akita stands at an elevation of 2,297 meters (7,536 feet).
3. Mount Aso (阿���山): Located in Kyushu, Mount Aso is the largest active volcano in Japan and stands at an elevation of 1,592 meters (5,227 feet).
4. Mount Zao (���王山): Located in Yamagata Prefecture, Mount Zao stands at an elevation of 1,963 meters (6,440 feet).
5. Mount Haku (白山): Located in Gifu Prefecture, Mount Haku stands at an elevation of 2,778 meters (9,107 feet).

These are just a few examples of the many high mountains found in Japan.
>
```

## 準備

llama-cli と同じディレクトリに移動して以下のコマンドを実行

```sh
# llama.cppプロジェクトのダウンロード
git clone https://github.com/ggerganov/llama.cpp.git
cd llama.cpp

# matalでビルド
LLAMA_METAL=1 make

# モデルをダウンロード
cd models
curl -O -L https://huggingface.co/TheBloke/Llama-2-7B-chat-GGML/resolve/main/llama-2-7b-chat.ggmlv3.q4_0.bin
```

llama-cli のディレクトリに戻って以下のコマンドを実行

```sh
# node_modules をダウンロード
npm install

# llama-cli を実行
npm start
```
