class ScoreBoard {
    score = 0;
    level = 1;
    maxLevel: number;
    levelUpScoreScope: number;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    constructor(maxLevel:number = 10, levelUpScoreScope:number = 10) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.levelUpScoreScope = levelUpScoreScope
    }

    addScore() {
        this.scoreElement.innerHTML = ++this.score + '';
        if (this.score % this.levelUpScoreScope === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = ++this.level + '';
        }
    }
}

export default ScoreBoard;