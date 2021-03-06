## Roadmap

- [ ] Alive Monitoring for stores
- [ ] use got
- [ ] use pm2
- [ ] Try to use https://www.clarity.ms/

## Container and Component

### Container
- 実装の時点で
- Contextによって振る舞いが変わらない
- Presentationは持たない
- Actionを発行するComponent

### Component
- StylingにおいてContext Propertiesは持ってはならない

### Styling
- Context Propertiesはendpointにより注入される

#### Context Properties
- margin
- padding(positionを変更するための場合)
- top / left / bottom / right(modal/sheetのようなものは例外あり)
- z-index

## E2E

- パターン1
  - `/`にアクセス
  - Sheetにfocus
  - 検索
  - List表示
  - ListItemタップ
  - mapタップ
- パターン2
  - `/`にアクセス
  - Storeタップ
  - mapタップ

## Memo

- Experience
  - Image Size
    - OGP Facebook
    - OGP Twitter
    - Instagram
    - Desktop
      - https://singoro.net/note/ogp-og_type/
  - GA
  - AB Testing
  - SEO
    - https://support.google.com/webmasters/answer/7451184?hl=ja
  - RSS
- Accessiblity
  - https://www.concentinc.jp/design_research/2018/03/btobcommunications-web-accessibility/
  - https://www.concentinc.jp/web_accessibility/
  - https://openameba.github.io/a11y-guidelines/
  - WAI-ARIA
- Performance
  - https://developers.google.com/web/tools/workbox/
  - http://tech.mercari.com/entry/2017/12/19/workbox
  - https://github.com/babel/minify
- Concents
  - mediaとして
    - 関係性をデザインする
      - 人気記事？
      - ユーザは何かを解決するためにここにくる
      - 家をカフェのように感じるために
        - 天気
        - 音楽
        - 本
        - 映像
  - tool / appとして
    - どういうときにカフェにいく?
    - どういう理由でカフェにいく?
    - どういうときに開かれたい？
      - カフェ探しに困ったとき
      - 家で暇なとき
      - 詳しく知りたいとき
      - カフェ好きが探索するとき
      - 旅行時に知らない土地のカフェを知りたいとき
    - 初期でフィルターがあるとうれしいかも(逆に言うとここでできることを伝えるのがいいのか)
      - フィルター
        - カフェ探し
          - 開店中の近くのカフェ
        - 条件探し
          - こだわりのカフェ
          - 仕事で使えるカフェ
          - ペットと一緒にいけるカフェ
    - そこからnavに欲しい機能はなんだろう？
      - そもそもnavは必要か？
        - 今のheaderを押し込めるって点は大きい
        - apple mapsってheaderあるんだっけ？
          - ない
    - 検索のとき
      - 今いる場所をベースに
        - 現在地ボタンを利用する
      - お店をベースに
        - お店の名前で検索する
      - 今からいく場所をベースに
        - 場所の名前で検索する（「サンフランシスコ」とか）
      - 条件ベース
        - 電源がある。とか
- UI
  - フェーズ
    - 探すフェーズ
    - 詳しくみるフェーズ
  - Mobile
    - 片手で操作を前提に
    - Sheet
      - selectedStoreIdがない & recommentStoreIdsがない
        - おすすめフィルター
      - selectedStoreIdがない & recommentStoreIdsがある
        - Storeリスト
        - 横スワイプでみれる
      - selectedStoreIdがある & recommentStoreIdsがある
        - Storeページ
  - Desktop

## PR

- Instagram
- Twitter
- Facebook
- YouTube
- Google Maps
- Foursquare

## Images

- Icon
  - square
  - circle
- Instagram 1:1
- Facebook OGP: 1.91:1(1200:630)
- Twitter OGP(summary_large_image): 1.91(1200:630)
  - https://cards-dev.twitter.com/validator

### Image size

- 3600 * 1890
- 1890 * 1890

### Refs

- [【2016年版】Facebook、Twitterに最適なOGP記述設定まとめ](https://liginc.co.jp/325552)
- [ツイートにページ情報を表示する「Twitterカード（Twitter Cards）」を設定してみた](https://www.granfairs.com/blog/staff/setting-twitter-cards)
- [HTMLのsrcsetを使って画像をレスポンシブにRetina対応させてみよう](http://kia-king.com/blog/tutorial/responsive-images-with-srcset/)
