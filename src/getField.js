export const Field = (x, y, population) => {

    const mainBlock = document.createElement('div');

    for (let i = 0; i < y; i++) {
        const row = document.createElement('div');
        row.className = "single-row";

        for (let j = 0; j < x; j++) {
            const field = document.createElement('div');
            field.className = "single-firld";
            row.appendChild(field);
            if (population[i][j] === 1) {
                field.className = "single-firld-one"
            }
            else if (population[i][j] === 2) {
                field.className = "single-firld-two"
            }
        }
        mainBlock.appendChild(row);
    }

    const parentField = document.getElementById('field');
    parentField.innerHTML = '';
    parentField.appendChild(mainBlock);

}