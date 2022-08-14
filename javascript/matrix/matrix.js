// @ts-check

export class Matrix {
  constructor(matrixStr) {
    this._matrix = matrixStr;
  }

  get rows() {
    return this._matrix.split('\n')
                       .map(str => str.split(' ').map(numStr => Number(numStr)));
  }

  get columns() {
    const rowsMatrix = this.rows;
    
    return rowsMatrix[0].map((_, index) => rowsMatrix.map((row) => row[index]));
  }
}