# Cours de javascript

Utilisons notre navigateur préféré pour exécuter notre code javascript.
Clique droit -> inspecter -> console
=> c'est la que l'on pourra afficher notre JS.

1. Créons un fichier `index.html` et `main.js`
2. Relions nos fichiers

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body> 
   <script src="main.js"></script>
</body>
</html>
```

3. On s'assure que les fichiers sont bien liés en éxecutant une instruction simple.
`console.log("hello world");`
Dès lors que s'affiche 'hello world' dans la console, tu peux passer à la suite ! pas avant.

## Type de données

* Number      => nombre `3.14`
* BigInt      => Les grands nombres `9007199254740991`
* String      => chaine de caractère `hello world`
* Boolean     => vrai ou faux, 1 ou 0 , `true` ou `false`
* Array       => tableau `[3, "trois", "3"]`
* Object      => objet `{firstName: "Tony", lastName: "Stark", nickName: "Ironman"}`
* Null        => La variable existe mais n'a ni type ni valeur `let toto = null`
* Undefined   => La variable n'existe pas, n'a pas été défini et n'a jamais été initialisé

## Les opérateurs

```javascript
=   => assignation
=== => égalité
+   => addition
-   => soustraction
/   => division
*   => multiplication
>   => supérieur
<   => inférieur
```

## Les variables

Anciennement 'var'

### let et const

Il faut identifier les valeurs qui vont varier de celles qui restrons constante et ainsi les déclarer avec `const` celles qui ne changeront pas durant toute la durée du programme et `let` celles qui seront amenées à être modifié.

#### const => La variable ne doit/peut pas être modifiée

Ex:

```javascript
const pi = 3.14;
pi = 4.12;
 //Retourne l'erreur : `Assignment to constant variable`
```

La portée d'une variable déclaré avec `const` est limitée à celle du **bloc** où elle est déclarée. Un bloc en Javascript, c’est ce qu’on retrouve entre accolades : une comparaison en if, une boucle while etc…

Ex: 
```javascript
const maFonction = () => {
    if(1 === 1){
        const google = "www.google.fr";
        console.log(google);
        //retourne www.google.fr
    }
}
console.log(google);
//retourne une erreur: ReferenceError: google is not defined 
//Car google n'existe que dans le bloc courant
```

#### let => La variable peut être modifiée

 ```javascript
let firstName = "Eric";
firstName = "Bruno";
```
=> GOOD !

Sa portée est limité à celle du bloc où elle est déclarée comme avec `const`.
Ex:

```javascript
const maFonction = () => {
    let x = 2;
    return x * x;
    //retourne 4
}
console.log(x);
// Retourne une erreur:  ReferenceError: x is not defined 
// x n'existe pas hors de la fonction
```

Pour la rendre globale, il faut simplement la définir hors de toute fonction.

[Pour plus d'informations...](https://www.kaherecode.com/tutorial/javascript-variables-var-let-ou-const).

[Et plus encore sur les variables](https://blog.nathanaelcherrier.com/fr/apprend-javascript-variables/)

## Les chaines de caractères

### Déclaration et affichage d'une chaine de caractère

```javascript
let ville = "Nancy";
console.log(ville);
```

### length
Obtenir la longueur d'une chaine => length
ex:

```javascript
let maChaine = 'simplon';
maChaine.length
//retourne 7
```


[Pour en savoir sur length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length)

### Concaténation

Concaténer signifie littéralement « mettre bout à bout ».
En JavaScript, l’opérateur de concaténation est le signe +

```javascript
let firstName = "john";
let lastName = "Doe";
let fullName = firstName + ' ' +lastName
//==> 'John Doe'
```


### Interpolation
Il s'agit d'insérer une variable dans une chaine de caractère. Pour interpoler une variable dans une chaine, il faut utiliser les backticks.

* backtick sur mac => près du bouton entrée
* backtick sur pc  => altgr 7 (en haut du clavier)...*

```javascript
let ville = "Marseille";
let message = `J'habite à ${ville}`;
```

### Accéder à un caractère

```javascript
let ville = "Paris";
let firstLetter = ville.charAt(0);
let firstLetterBis = ville[0];
//=> 'P'
```
[Voici les methodes permettant de modifier une chaine de caratères](https://www.w3schools.com/jsref/jsref_obj_string.asp)

## Les tableaux
Ou comment stocker plusieurs information dans une seule variable.
Ex:

```javascript
const villes = ["Paris", "Marseille", "Brest"];
```

J'accède au élément du tableau

```javascript
const villes = ["Paris", "Marseille", "Brest"];
let firstElement = villes[0];
//=> 'Paris'
```

Chaque élément du tableau possède un indice. Il s'agit d'une valeur numérique indiquant la position d'un élément. Dans notre exemple 'Paris' est à l'indice 0 et 'Marseille' est à l'indice 1. Un tableau commence toujours avec un indice à 0 !

Un tableau peut contenir tout type de données
```javascript
const datas = ["Paris", 4, uneVariableQuelconque, {prenom: "nicolas"}];
```

## Les structures conditionnelles

#### [if](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else)
L'instruction `if` exécute une instruction si une condition donnée est vraie ou équivalente à vrai. Si la condition n'est pas vérifiée, il est possible d'utiliser une autre instruction.

Ex:

```javascript
let meteo = "pluie"
if(meteo === "pluie"){
    console.log("Prendre un parapluie");
}else{
    console.log("Prendre un beau t-shirt et les lunettes de soleil");
}
```

Le 'if' vérifie la vérité de l'expression `meteo === "pluie"`. Si elle est vrai (true) alors cela exécute l'instruction dans la première accolade. Sinon cela exécute l'instruction dans la deuxième accolade.

## Les boucles

**Une boucle sert à répéter une ou plusieurs instructions plusieurs fois.**

On distingue 3 types de boucles

### for

 C’est la boucle la plus basique en JavaScript et elle est très polyvalente.

Dans cet exemple, nous réglons `index = 0` avant le début de notre boucle. Nous continuerons à boucler aussi longtemps que `index < 3`, et chaque itération de la boucle augmentera `index` de un. Enfin, entre accolades se trouve le code qui sera exécuté à chaque itération de la boucle.

```javascript
for(let index = 0; index < 3; index++){
    console.log(index);
}
//retourne
//0
//1
//2
```
### while (tant que...)

Il faut se dire : Tant que `x` est inférieur à 3, l'instruction sera répétée. La variable `x` est incrémetée de 1 et sert de condition de sortie de la boucle. Sans elle, c'est une boucle infinie => plantage du programme.

```javascript
let x = 0;
while( x < 3){
    x = x + 1;
    //condition de sortie de boucle
    console.log("L'instruction sera répété " + x + " fois");
    //retourne:
    //L'instruction sera répété 1 fois
    //L'instruction sera répété 2 fois
    //L'instruction sera répété 3 fois
}
```

### forEach


Si nous voulons appliquer un traitement sur les éléments d'un tableau, la bonne pratique consiste à boucler sur ce tableau afin d'accéder aux éléments de celui-ci. La methode **forEach** permet d’itérer sur les propriétés d’un tableau 

Ex:
```javascript
const villes = ["Paris", "Lille", "Marseille", "Brest"];
villes.forEach((element) => {
    console.log(element.toUpperCase());
});
//retourne:
//PARIS
//LILLE
//MARSEILLE
//BREST
```

## Les fonctions

**Une fonction** effectue une série d'instructions précises et prend une/des **valeur(s) en entrée** et retourne ou non un **résultat en sortie**.
**Elle présente l'avantage de na pas avoir à répéter du code.**

La syntaxe est la suivante:


Nous allons déclarer une fonction nommée `bonjour`. Elle prend en argument un paramètre `prenom`. 
Ce paramètre est une variable qui ne sera utilisable (visible) uniquement dans le périmètre de la fonction. Dans ce cas ci, notre fonction affiche une chaine de caractères.
Puis nous appelons notre fonction afin qu'elle soit exécutée: `bonjour('Nicolas');`.
**Une fonction est toujours définie avant son appel.**

Avant ES6:

```javascript

function bonjour(prenom){
    console.log(`Bonjour, je m'appelle ${prenom}`);
}

bonjour('Nicolas');
bonjour('Pierre');

```

ES6 (on parle de fonction fléchée)

```javascript

const bonjour = (prenom) => {
    console.log(`Bonjour, je m'appelle ${prenom}`);
}

bonjour('Nicolas');
bonjour('Pierre');

```

Dans la plupart des cas, une fonction renvoie un résulat:

```javascript
const bonjour = (prenom) => {
    return `Bonjour, je m'appelle ${prenom}`;
}

console.log(bonjour('Nicolas'));
```

Cela permet des traiter le résultat dans notre algorithme ultérieurement.

## Sources d'aide

1. https://stackoverflow.com/
2. https://developer.mozilla.org/fr/
3. => le copain
4. => le formateur
5. => une voyante