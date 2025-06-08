// 🔤 1. Inverser une chaîne
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

// 🔤 2. Compter les caractères dans une chaîne
function compterCaracteres(chaine) {
    return chaine.length;
}

// 🔤 3. Mettre en majuscule la première lettre de chaque mot
function majusculePremiereLettre(phrase) {
    return phrase.split(' ')
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(' ');
}

// 🔢 4. Trouver le maximum dans un tableau
function trouverMax(tab) {
    return Math.max(...tab);
}

// 🔢 5. Trouver le minimum dans un tableau
function trouverMin(tab) {
    return Math.min(...tab);
}

// 🔢 6. Calculer la somme des éléments d'un tableau
function sommeTableau(tab) {
    return tab.reduce((acc, val) => acc + val, 0);
}

// 🔢 7. Filtrer un tableau selon une condition (ex : garder les nombres > 10)
function filtrerTableau(tab, condition) {
    return tab.filter(condition);
}

// 🧮 8. Calculer la factorielle d’un nombre
function factorielle(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorielle(n - 1);
}

// 🧮 9. Vérifier si un nombre est premier
function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 🧮 10. Générer la suite de Fibonacci jusqu’à un nombre de termes donné
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let suite = [0, 1];
    for (let i = 2; i < n; i++) {
        suite.push(suite[i - 1] + suite[i - 2]);
    }
    return suite;
}