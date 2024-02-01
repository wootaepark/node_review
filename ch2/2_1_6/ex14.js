class Human{
    constructor(type='human'){
        this.type = type;
    }

    static isHuman(human){
        return human instanceof Human;
    }

    breathe(){
        alert('h-a-a-a-m');
    }
}
class Zero extends Human{
    constructor(type, firstName, lastName){
        super(type); // 부모 객체 생성자에 type 을 대입 
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
const is_human = Human.isHuman(newZero);// true
console.log(is_human);

// ex14 : 클래스 문법을 이용한 class 선언 및 사용 (생긴건 이래도 ex13의 프로토타입을 기반으로 동작한다.)