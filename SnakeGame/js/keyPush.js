function keyPush(env) {
  switch (env.keyCode) {
    case 37: xd = -1; yd = 0; break;  //左
    case 38: xd = 0; yd = -1; break; //上
    case 39: xd = 1; yd = 0; break; //右
    case 40: xd = 0; yd = 1; break; //下
  }
}
