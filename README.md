# ModalWindow.Leaflet
モーダルウィンドウにLeafletマップを表示

![mo-dalwindow](https://user-images.githubusercontent.com/39150905/41219269-bf864034-6d98-11e8-98c4-50829eed1848.png)

画像は実行例。

モーダルウィンドウを使ってマップ上にマーカーを立てる際などに利用できる。

モーダルウィンドウ上のマップ中央にカーソルを配置するために、マップ中央位置を取得するgetCenter()を使った。

しかし、時々同期ズレが起こり、カーソルの位置が微妙に移動するためgetCenter()を使ったカーソル表示はあまりオススメできない。
