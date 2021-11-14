export const createPopulation = (x, y, karasCount, shchukaCount, karasReproduct, shchukaReproduct) => {
    let population = [];
    for (let i = 0; i < y; i++) {
        population[i] = [];
        for (let j = 0; j < x; j++) {
            population[i][j] = { type: 0 };
        }
    }
    for (let kar = 0; kar < karasCount; kar++) {
        function setKaras() {
            let xK = getRandomInt(1, x);
            let yK = getRandomInt(1, y);
            if (population[xK - 1][yK - 1] !== 0 || population[xK - 1][yK - 1] !== 2) {
                population[xK - 1][yK - 1] = { type: 1, age: getRandomInt(1, karasReproduct), preg: 0 };
                return;
            }
            else {
                setKaras();
            }
        }
        setKaras();
    }
    for (let sh = 0; sh < shchukaCount; sh++) {
        function setShchuka() {
            let xK = getRandomInt(1, x);
            let yK = getRandomInt(1, y);
            if (population[xK - 1][yK - 1] !== 0 || population[xK - 1][yK - 1] !== 1) {
                population[xK - 1][yK - 1] = { type: 2, age: getRandomInt(1, shchukaReproduct), preg: 0, hungry: 0 };
                return;
            }
            else {
                setShchuka();
            }
        }
        setShchuka();
    }
    return population;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}