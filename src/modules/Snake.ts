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

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        this.moveBody();
        this.head.style.left = value + 'px';
    }

    set Y(value: number) {
        if (this.Y === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('Game Over!')
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
           if (value > this.Y) {
               value = this.Y - 10
           } else {
               value = this.Y + 10
           }
        }

        this.moveBody()
        this.head.style.top = value + 'px';
    }

    addBody() {
        this.snakeElement.insertAdjacentHTML('beforeend', "<div></div>")
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            const bodyElement: HTMLElement = this.bodies[i - 1] as HTMLElement;
            let X = bodyElement.offsetLeft;
            let Y = bodyElement.offsetTop;

            const currentBodyElement = this.bodies[i] as HTMLElement;
            currentBodyElement.style.left = X + 'px';
            currentBodyElement.style.top = Y + 'px';
        }
    }
}

export default Snake;