// 코드를 작성해 주세요
// 제목은 가위바위보
let score1 = 0;
let score2 = 0;

// 이긴 사람이 player1 이라면 1을 반환
// player2 이라면 2를 반환
// 무승부라면 0을 반환
const winner = function (player1, player2) {
  if (player1 === "scissors") {
    if (player2 === "rock") {
      return 2;
    } else if (player2 === "scissors") {
      return 0;
    } else {
      return 1;
    }
  } else if (player1 === "paper") {
    if (player2 === "rock") {
      return 1;
    } else if (player2 === "scissors") {
      return 2;
    } else {
      return 0;
    }
  } else {
    if (player2 === "rock") {
      return 0;
    } else if (player2 === "scissors") {
      return 1;
    } else {
      return 2;
    }
  }
};

const player1Img = document.querySelector("#player1-img");
const player2Img = document.querySelector("#player2-img");

const scissorsBtn = document.querySelector("#scissors-button");
const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");

var choice = 0;
const handler = (choice) => (event) => {
  scissorsBtn.disabled = ture;
  // scissorsBtn.disabled = true;
  rockBtn.disabled = ture;
  paperBtn.disabled = ture;

  player1Img.src = `./img/${choice}.png`;
  const cases = ["scissors", "rock", "paper"];
  let i = 0;
  const rotate = function () {
    player2Img.src = `./img/${cases[i]}.png`;
    i = (i + 1) % 3;
  };
  // 0.1초 간격으로 이미지가 바뀌게 된다.
  const tid = setInterval(rotate, 100);

  // 3초 후에 해당 코드 블럭이 실행되어야 한다.
  setTimeout(() => {
    // 3초 후에 0.1초 간격으로 바꾸던 값을 중단 시킨다.
    clearInterval(tid);
    // 두 플레이어가 제출한 결과를 반영한다.
    const win = winner(choice, cases[i]);
    // 현황판을 변경 해줘야함
    const countA = document.querySelector(".countA");
    const countB = document.querySelector(".countB");
    if (win === 1) {
      countA.textContent = ++score1;
    } else if (win === 2) {
      countB.textContent = ++score2;
    }
    // 결과가 확정되면 결과를 표시할 Modal이 천천히 나타납니다.
    // scissorsBtn.disabled = false;
    // // scissorsBtn.disabled = true;
    // rockBtn.disabled = false;
    // paperBtn.disabled = false;
    scissorsBtn.removeAttribute("disabled");
    rockBtn.removeAttribute("disabled");
    paperBtn.removeAttribute("disabled");
  }, 3000); // 해당 핸들러를 ms 초 후에 실행을 시킨다
};

scissorsBtn.addEventListener("click", handler("scissors"));
rockBtn.addEventListener("click", handler("rock"));
paperBtn.addEventListener("click", handler("paper"));

// 아래 코드보고 디버깅하자
/*// 코드를 작성해 주세요
//제목은 가위바위보 입니다.
// 이전 실습의 가위바위보 알고리즘을 활용할 수 있습니다.
// 게임을 결과에 따라 Player1 의 점수와 Player2의 점수가 증가합니다. (비긴 경우, 증가하지 않습니다.)
let score1 = 0;
let score2 = 0;

// 이긴 사람이 player1 이라면 1 을 반환
// player2 이라면 2를 반환
// (무승부라면 0 을 반환)
const winner = function (player1, player2) {
  if (player1 === "scissors") {
    if (player2 === "rock") {
      return 2;
    } else if (player2 === "scissors") {
      return 0;
    } else {
      return 1;
    }
  } else if (player1 === "paper") {
    if (player2 === "rock") {
      return 1;
    } else if (player2 === "scissors") {
      return 2;
    } else {
      return 0;
    }
  } else {
    // "rock"
    if (player2 === "rock") {
      return 0;
    } else if (player2 === "scissors") {
      return 1;
    } else {
      return 2;
    }
  }
};
// 파란 테두리를 가진 두 영역 중, 왼쪽은 Player1이 선택한 영역이며, 오른쪽은 Player2(컴퓨터)가 무작위로 선택한 결과가 나타나는 영역입니다.

const player1Img = document.querySelector("#player1-img");
const player2Img = document.querySelector("#player2-img");

// 아래 3개의 버튼은 Player1 이 선택할 수 있는 가짓수를 나타내고 있으며, 클릭시 Player1 의 선택이 결정 됩니다.
// Player1 이 가위, 바위, 보 중 하나를 선택하면, 버튼은 비활성화 상태가 되며 3초간 Player2 (컴퓨터)의 결과가 0.1 초 간격으로 가위, 바위, 보 순서대로 변경됩니다.
const scissorsBtn = document.querySelector("#scissors-button");
const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const handler = (choice) => (event) => {
  scissorsBtn.disabled = true;
  rockBtn.disabled = true;
  paperBtn.disabled = true;

  player1Img.src = `./img/${choice}.png`;
  const cases = ["scissors", "rock", "paper"];
  let i = 0;
  const rotate = function () {
    i = (i + 1) % 3;
    player2Img.src = `./img/${cases[i]}.png`;
  };
  // 0.1초 간격으로 이미지가 바뀌게 된다
  const tid = setInterval(rotate, 100);

  // 3초 후에 해당 코드 블럭이 실행되야한다.
  setTimeout(() => {
    // 3초 후에 0.1 초 간격으로 바꾸던 값을 중단 시킨다.
    clearInterval(tid);

    // 두 플레이어가 제출한 결과를 반영한다.
    const win = winner(choice, cases[i]);
    // 현황판을 변경 해줘야함
    const countA = document.querySelector(".countA");
    const countB = document.querySelector(".countB");
    if (win === 1) {
      countA.textContent = ++score1;
    } else if (win == 2) {
      countB.textContent = ++score2;
    }
    // 결과가 확정되면 결과를 표시할 Modal 이 천천히 나타납니다.
    // Modal 은 클릭시 사라지며, Modal Content 는 경기 결과가 포함되어 있습니다.
    // 이후 다시 활성화된 버튼을 클릭하여 게임을 반복 할 수 있습니다.

    // scissorsBtn.disabled = false;
    // rockBtn.disabled = false;
    // paperBtn.disabled = false;
    scissorsBtn.removeAttribute("disabled");
    rockBtn.removeAttribute("disabled");
    paperBtn.removeAttribute("disabled");
  }, 3000); // 해당 핸들러를 ms 초 후에 실행을 시킨다.
};

scissorsBtn.addEventListener("click", handler("scissors"));
rockBtn.addEventListener("click", handler("rock"));
paperBtn.addEventListener("click", handler("paper"));*/
