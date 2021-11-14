export const passDay = (population, karasReproduct, shchukaReproduct, shchukaDied) => {
    const maxI = population.length;
    const maxJ = population[0].length;
    let fich = 0;
    for (let i = 0; i < population.length; i++) {
        for (let j = 0; j < population[i].length; j++) {
            if (population[i][j].type === 1) {
                fich++;
            }

        }
    }
    console.log('was ' + fich)
    for (let i = 0; i < population.length; i++) {
        for (let j = 0; j < population[i].length; j++) {
            if (population[i][j].type === 1) {
                population[i][j].age = population[i][j].age + 1;
                population[i][j].preg = population[i][j].preg + 1;
                for (let t = 0; t < 50; t++) {
                    let mI = getFreeField(population, i, j, maxI, maxJ)[0];
                    let mJ = getFreeField(population, i, j, maxI, maxJ)[1];
                    if (population[mI][mJ].type === 0) {
                        population[mI][mJ].type = 1;
                        population[mI][mJ].age = population[i][j].age;
                        population[mI][mJ].preg = population[i][j].preg;
                        population[i][j].type = 0;
                        population[i][j].age = 0;
                        population[i][j].preg = 0;
                        if (population[mI][mJ].preg >= karasReproduct) {
                            for (let tr = 0; tr < 50; tr++) {
                                let childI = getFreeField(population, i, j, maxI, maxJ)[0];
                                let childJ = getFreeField(population, i, j, maxI, maxJ)[1];
                                if (population[childI][childJ].type === 0) {
                                    population[childI][childJ].type = 1;
                                    population[childI][childJ].age = 1;
                                    population[childI][childJ].preg = 0;
                                    population[mI][mJ].preg = 0;
                                    console.log('rybka born!')
                                    break;
                                }
                            }
                        }
                        break;
                    }
                }
            } else if (population[i][j].type === 2) {
                population[i][j].age = population[i][j].age + 1;
                population[i][j].preg = population[i][j].preg + 1;
                for (let t = 0; t < 4; t++) {
                    let mI = getFreeField(population, i, j, maxI, maxJ)[0];
                    let mJ = getFreeField(population, i, j, maxI, maxJ)[1];
                    if (population[mI][mJ].type === 1) {
                        population[mI][mJ].type = 2;
                        population[mI][mJ].age = population[i][j].age;
                        population[mI][mJ].preg = population[i][j].preg;
                        population[mI][mJ].hungry = population[i][j].hungry;
                        population[i][j].type = 0;
                        if (population[mI][mJ].preg >= shchukaReproduct) {
                            for (let tr = 0; tr < 16; tr++) {
                                let childI = getFreeField(population, i, j, maxI, maxJ)[0];
                                let childJ = getFreeField(population, i, j, maxI, maxJ)[1];
                                if (population[childI][childJ].type === 0) {
                                    population[childI][childJ].type = 2;
                                    population[childI][childJ].age = 0;
                                    population[childI][childJ].preg = 0;
                                    population[mI][mJ].preg = 0;
                                    console.log('schuka born')
                                    break;
                                }
                            }
                        }
                        console.log('shchuka eat');
                        break;
                    }
                    if (t === 15) {
                        population[i][j].hungry = population[i][j].hungry + 1;
                        if (population[i][j].hungry >= shchukaDied) {
                            population[i][j].type = 0;
                            console.log('shchuka diead')
                        }
                    }
                }
            }
        }
    }
    fich = 0;
    let ev = 0;
    for (let i = 0; i < population.length; i++) {
        for (let j = 0; j < population[i].length; j++) {
            if (population[i][j].type === 1) {
                fich++;
            }
            if (population[i][j].type === 2) {
                ev++;
            }
        }
    }
    console.log(fich)
    console.log(ev)
}

function getDirection() {
    const min = 0;
    const max = 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFreeField(population, i, j, maxI, maxJ) {
    let direction = getDirection();
    let mI = i;
    let mJ = j;
    if (direction === 0) { // new coordinates
        mI = mI + 1;
        if (mI > maxI - 1) {
            mI = 0;
        }
    } else if (direction === 1) {
        mJ = mJ + 1;
        if (mJ > maxJ - 1) {
            mJ = 0;
        }
    } else if (direction === 2) {
        mI = mI - 1;
        if (mI < 0) {
            mI = maxI - 1;
        }
    } else if (direction === 3) {
        mJ = mJ - 1;
        if (mJ < 0) {
            mJ = maxJ - 1;
        }
    }
    return [mI, mJ];
}
