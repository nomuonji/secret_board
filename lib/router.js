'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req,res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req,res);
      break;
    case '/logout':
      // TODO ログアウト処理
      util.handleLogout(req,res);
      break;
    case '/':
      res.writeHead(200,{
        'Content-Type':'text/html; charset=utf-8'
      });
      res.end('<a href="/posts">投稿ページにいく</a>');
      break;
    case '/posts?delete=1':
      postsHandler.handleDelete(req,res);
      break;
    case '/favicon.ico':
      util.handleFavicon(req,res);
      break;
    default :util.handleNotFound(req,res);
      break;
  }
}

module.exports = {
  route
};