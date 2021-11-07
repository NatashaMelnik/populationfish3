import { Field } from './getField';
import React from "react";


export const BattleField = ({ props }) => {

    const x = props[0];
    const y = props[1];
    const karasCount = props[2];
    // const karasOld = props[3];
    // const karasReproduct = props[4];
    const shchukaCount = props[5];
    // const shchukaOld = props[6];
    // const shchukaReproduct = props[7];
    // const shchukaDied = props[8];

    const createPopulation = () => {
        let population = [];
        for (let i = 0; i < y; i++) {
            population[i] = [];
            for (let j = 0; j < x; j++) {
                population[i][j] = 0;
            }
        }
        for (let kar = 0; kar < karasCount; kar++) {
            function setKaras() {
                let xK = getRandomInt(1, x);
                let yK = getRandomInt(1, y);
                if (population[xK - 1][yK - 1] !== 0 || population[xK - 1][yK - 1] !== 2) {
                    population[xK - 1][yK - 1] = 1;
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
                    population[xK - 1][yK - 1] = 2;
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

    const qwe = createPopulation();
    console.log(qwe)

    Field(x, y, qwe);

    return (
        <div>
            {/* <div id="field"></div> */}
        </div>
    )

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}