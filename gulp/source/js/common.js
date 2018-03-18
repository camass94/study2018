'use strict'
/*
 * Functional Programming in JavaScript
 * Chapter 01
 * Magical -run- function in support of Listing 1.1
 * Author: Luis Atencio
 */
// -run- with two functions 

//순수함수. 무상태성(statelessness), 불변성 (immutability)

/*
    부수효과 정리
    - 전역 범위에서 변수, 속성, 자료구조를 변경
    - 함수의 원래 인수 값을 변경
    - 사용자 입력을 처리
    - 예외를 일으킨 해당 함수가 붙잡지 않고(catch) 그대로 예외(throw)를 던짐
    - 화면 또는 로그 파일에 출력
    - HTML 문서, 브라우저 쿠키, DB에 질의
*/

var run2 = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};

// -run- with three functions
var run3 = function(f, g, h) {
    return function(x) {
          return f(g(h(x))); 
    };
};

// Test this magical function
var add1 = function(x) {return x + 1;};
var mult2 = function(x) {return x * 2;};
var square = function(x) {return x * x;};
var negate = function(x) {return -x;};

var double = run2(add1, add1);
console.log(double(2)); //-> 4

var testRun = run3(negate, square, mult2);
console.log(testRun(2)); //->-16


//명령형 프로그래밍
// function showStudent(ssn){
//     let student = db.find(ssn);
//     if(student!=null){
//         document.querySelector(`#${elementId}`).innerHTML = `
//             ${student.ssn},
//             ${student.firstname},
//             ${student.lastname}
//         `;
//     } else {
//         throw new Error('학생을 찾을 수 없습니다');
//     }
// }

//함수형 프로그래밍
// var find = curry((db,id)=>{
//     let obj = db.find(id);
//     if(obj == null){
//         throw new Error('객체를 찾을 수 없습니다');
//     }
//     return obj;
// })

// var csv = student => `${student.ssn}, ${student.firstname}, ${student.lastname}`;

// var append = curry((selector, info)=>{
//     document.querySelector(selector).innerHTML = info;
// });






