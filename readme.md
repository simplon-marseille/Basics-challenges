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
Dès lors que affiche 'hello world' dans la console, tu peux passer à la suite ! pas avant.

## Type de données

* number      => nombre
* bigInt      => Les grands nombres
* string      => chaine de caractère
* boolean     => vrai ou faux, 1 ou 0 , true ou false
* null        => a voir plus tard
* array       => tableau
* object      => objet


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
Bonne pratique : Par défaut, on déclare une variable avec "const" et si elle est amenée à changer on la passe en "let".

const => La variable ne doit pas être modifiée
let => La variable peut être modifiée

Ex:

```javascript
const pi = 3.14;
pi = 4.12;
```
 => `Assignment to constant variable`

 ```javascript
let pi = 3.14;
pi = 4.12;
```
=> GOOD !

## Les chaines de caractère

### Déclaration et affichage d'une chaine de caractère

```javascript
const ville = "Nancy";
console.log(ville);
```

### length
Obtenir la longueur d'une chaine => length
ex:

```javascript
const maChaine = 'simplon';
maChaine.length
```
=> 7


[length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length)

### Concaténation

Concaténer signifie littéralement « mettre bout à bout ».
En JavaScript, l’opérateur de concaténation est le signe +

```javascript
const firstName = "john";
const lastName = "Doe";
const fullName = firstName + lastName
```

==> 'John Doe'


### Interpolation
Il s'agit d'insérer une variable dans une chaine de caractère. Pour interpoler une variable dans une chaine, il faut utiliser les backticks.

*backtick sur mac => près du bouton entrée
backtick sur pc  => altgr 7 (en haut du clavier)...*

```javascript
const ville = "Masreille";
const message = `J'habite à ${ville}`;
```

### Accéder à un caractère

```javascript
const ville = "Paris";
const firstLetter = ville.charAt(0);
const firstLetterBis = ville[0];
```
=> 'P'


## Les tableaux
Ou comment stocker plusieurs information dans une seule variable.
ex:

```javascript
const villes = ["Paris", "Marseille", "Brest"];
```

J'accède au élément du tableau

```javascript
const villes = ["Paris", "Marseille", "Brest"];
const firstElement = villes[0];
```
=> 'Paris'
Chaque élément du tableau possède un indice. Il s'agit d'une valeur numérique indiquant la position d'un élément. Dans notre exemple 'Paris' est à l'indice 0 et 'Marseille' est à l'indice 1. Un tableau commence toujours avec un indice à 0 !

Un tableau peut contenir tout type de données
```javascript
const datas = ["Paris", 4, uneVariableQuelconque, {prenom: "nicolas"}];
```

## Les structures conditionnelles
[if](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else)
L'instruction if exécute une instruction si une condition donnée est vraie ou équivalente à vrai. Si la condition n'est pas vérifiée, il est possible d'utiliser une autre instruction.

Ex:

```javascript
const meteo = "pluie"
if(meteo === "pluie"){
    console.log("Prendre un parapluie");
}else{
    console.log("Prendre un beau t-shirt et les lunettes de soleil");
}
```

Le 'if' vérifie la vérite de l'expression `meteo === "pluie"`. Si elle est vrai (true) alors cela exécute l'instruction dans la première accolade. Sinon cela exécute l'instruction dans la deuxième accolade.

## Les boucles

## Sources d'aide

1. https://stackoverflow.com/
2. https://developer.mozilla.org/fr/
3. => le copain
4. => le formateur
5. => un voyante