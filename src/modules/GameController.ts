import Snake from "./Snake";
import Food from "./Food";
import ScoreBoard from "./ScoreBoard";

class GameController {
    snake: Snake;
    food: Food;
    scoreBoard: ScoreBoard;
    direction: string = '';
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scoreBoard = new ScoreBoard();

        this.initGame();
    }

    initGame() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.move()
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key
    }

    move() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break
        }

        this.foodIsEaten(X, Y)

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            alert(error);
            this.isLive = false;
        }

        this.isLive && setTimeout(this.move.bind(this), 300 - (this.scoreBoard.level - 1) * 30)
    }

    foodIsEaten(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            this.food.change();
            this.snake.addBody();
            this.scoreBoard.addScore();
        }
    }
}

export default GameController;