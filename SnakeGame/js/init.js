document.addEventListener('keydown', keyPush);//Webにキーを押されたらkeyPushが反応するセンサーを追加

const canv = document.getElementById("canvas");//canvasタグを取得
const ctx = canv.getContext("2d");
const SIZE = 20;
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN;
let appleX = appleY = 15;
let lemonX = lemonY = 5;
