class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;
    snakeElement: HTMLElement;

    constructor() {
        this.snakeElement = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.snakeElement.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        this.head.style.top = value + 'px'
    }

    addBody() {
        this.snakeElement.insertAdjacentHTML('beforeend', "<div></div>")
    }
}

export default Snake;