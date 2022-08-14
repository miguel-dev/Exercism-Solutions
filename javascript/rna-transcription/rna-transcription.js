// @ts-check

const dnaToRna = {G: 'C', 
                  C: 'G', 
                  T: 'A', 
                  A: 'U'};

export const toRna = ([...dna]) => {
  return dna.reduce((rna, nucleotide) => rna + dnaToRna[nucleotide], '');
};
