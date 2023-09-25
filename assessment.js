'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');
assessmentButton.onclick = function() {
  assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    console.log(userName);
    
  // TODO 診断結果表示エリアの作成
  // TODO ツイートエリアの作成
};


const answers = [
  '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',