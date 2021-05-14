const FakeData = [
    {id: 1, title: "Array.map()", body:"map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.", count: 10},
    {id: 2, title: "Array.copyWithin()", body:"copyWithin() 메서드는 배열의 일부를 얕게 복사한 뒤, 동일한 배열의 다른 위치에 덮어쓰고 그 배열을 반환합니다. 이 때, 크기(배열의 길이)를 수정하지 않고 반환합니다.", count: 15},
    {id: 3, title: "Array.entries()", body:"entries() 메서드는 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 Array Iterator 객체를 반환합니다.", count: 20},
    {id: 4, title: "Array.every()", body:"every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.", count: 5},
    {id: 5, title: "Array.fill()", body:"fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.", count: 30},
    {id: 6, title: "Array.filter()", body:"", count: 0},
    {id: 7, title: "Array.find()", body:"find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.", count: 12},
    {id: 8, title: "Array.findIndex()", body:"", count: 0},
    {id: 9, title: "Array.concat()", body:"concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.", count: 35},
    {id: 10, title: "Object.assign()", body:"Object.assign() 메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용합니다. 대상 객체를 반환합니다.", count: 21},
    {id: 11, title: "Object.create()", body:"Object.create() 메서드는 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 만듭니다.", count: 13},
    {id: 12, title: "Object.defineProperties()", body:"Object.defineProperties() 메서드는 객체에 새로운 속성을 정의하거나 기존의 속성을 수정하고, 그 객체를 반환한다.", count: 5},
    {id: 13, title: "Object.defineProperty()", body:"Object.defineProperty() 정적 메서드는 객체에 직접 새로운 속성을 정의하거나 이미 존재하는 속성을 수정한 후, 그 객체를 반환합니다.", count: 9},
    {id: 14, title: "Object.entries()", body:"Object.entries() 메서드는 for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다. (for-in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점입니다).", count: 15},
    {id: 15, title: "Object.values()", body:"Object.values() 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다. 이 배열은 for...in 구문과 동일한 순서를 가집니다. (for in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있습니다.)", count: 22},
    {id: 16, title: "Object.key", body:"", count: 0},
    {id: 17, title: "Object.key", body:"", count: 0},
    {id: 18, title: "Object.key", body:"", count: 0},
    {id: 19, title: "Object.key", body:"", count: 0},
    {id: 20, title: "Object.key", body:"", count: 0},
]

export default FakeData