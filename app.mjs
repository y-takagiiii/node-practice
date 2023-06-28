import * as http from "http";

// サーバーの作成
const server = http.createServer(function(req, res){
  // リクエストを送るURLを表示
  console.log(req.url);
  // レスポンスとして'hello'を返す
  res.end('hello');
});

// ポート番号を指定
server.listen(8000);