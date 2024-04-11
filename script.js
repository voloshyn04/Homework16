let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;  // вверх на 1 сход. і ланцюжок
    },
    down() {
        this.step--;
        return this; // вниз на 1 сход. і ланцюжок
    },
    showStep() {
        console.log(this.step);
        return this; // повернення об'єкту для ланцюжку
    }
};

ladder.up().up().down().showStep(); //1

















}