// Todo List Project
// Udemy, The Web Developer Bootcamp 2024
// HTML, JavaScript
// 2024.09.02


let input = prompt("What would you like to do?");

// 기본 리스트
const todos = ["Collect Chicken Eggs", "Clean Litter Box"];

// quit 또는 q를 입력하면 while 문을 탈출하며 프로그램을 종료합니다.
while ((input !== "quit") & (input !== "q")) {

    // list를 입력하여 목록을 확인합니다.
  if (input === "list") {
    console.log("********************");
    // i는 배열의 인덱스 넘버입니다.
    // 인덱스 넘버는 0부터, 배열의 개수는 1부터 세기 때문에 보다 작게 설정합니다.
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("********************");

    // new를 입력하여 새로운 리스트를 추가합니다
  } else if (input === "new") {
    const newTodo = prompt("Ok, What is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);

    // delete를 입력하여 리스트를 설정합니다.
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete:"));
    // 숫자형이면서 NaN인 값을 판단하기 위해 Number.isNaN() 메소드를 사용.
    // Number.isNaN(index) 값이 false면 알맞은 숫자를 입력했기에 !(not)을 사용함.
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
//   각 if문에서 작업을 완료하면 탈출하여 처음과 같이 작업할 내용을 물어봅니다.
  input = prompt("What would you like to do?");
}

// 사용자가 입력한 내용이 quit이거나 q이면 while문 탈출 조건에 부합하므로 프로그램 종료를 안내합니다.
console.log("OK, QUIT THE APP!");
