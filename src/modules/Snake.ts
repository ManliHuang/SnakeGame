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
        if (this.X === value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error('Game Over!')
        }
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        if (this.Y === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('Game Over!')
        }
        this.head.style.top = value + 'px'
    }

    addBody() {
        this.snakeElement.insertAdjacentHTML('beforeend', "<div></div>")
    }
}

export default Snake;