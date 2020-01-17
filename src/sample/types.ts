let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];//제너릭배열선언


/* 튜플
고정된 개수의 요소 타입을 알고 있지만 반드시 같을 필요는 없는 배열을 표현
*/

// 튜플 타입 선언
let x: [string, number];
x = ["hello", 10]; // 좋아요
// x = [10, "hello"]; // 오류

console.log(x[0].substr(0,0));
// console.log(x[1].substr(0,0));//오류

/*
enum
* */

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

/*
* any
* */

let notSure: any = 4;
notSure = "문자열일수도 있다";
notSure = false;

let list: any[] = [1, true, "free"];
list[1] = 100;

/*void
*  반환 값을 반환하지 않는 함수의 반환 타입
* */

let unusable1: void = undefined;
let unusable2: undefined|null = null;

let someValue: any = "this is a string";

let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;


/*제너릭*/
class Queue<T> {
    protected data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T {
        return this.data.shift();
    }
}

function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

const arg = ['1, 2, 3, 4, 5'];
// 인수에 의해 타입 매개변수가 결정된다.
const reversed = reverse(arg);

