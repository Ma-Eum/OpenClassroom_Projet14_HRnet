📄 Guide - Données fictives pour HRnet

🔍 Objectif

Ce fichier documente comment injecter automatiquement des employés fictifs pour tester l'application HRnet sans devoir créer manuellement chaque employé.

🧠 Fonctionnement

✅ Activation des données fictives

Dans le fichier employeesSlice.js, la constante suivante contrôle l’injection :

const shouldGenerateFakeEmployees = true;

true : injecte des employés fictifs au démarrage si localStorage est vide.

false : aucune donnée n’est injectée automatiquement.

🏗 Structure des employés fictifs

Les employés sont définis dans le tableau fakeEmployees.Tu peux en modifier le contenu, ajouter ou supprimer des objets.

Exemple :

export const fakeEmployees = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    birthDate: "1992-04-15",
    startDate: "2021-06-10",
    street: "123 Maple Street",
    city: "Denver",
    state: "Colorado",
    zipCode: "80203",
    department: "Human Resources"
  },
  ...
];

🗑 Vider les données sauvegardées (pour test)

Si tu veux forcer l’injection des employés fictifs :

Ouvre la console de ton navigateur.

Tape :

localStorage.clear();

Recharge la page.

⚙ Utilisation en prod

Il est recommandé de désactiver shouldGenerateFakeEmployees (false) avant toute mise en production finale.

👨‍💻 Pourquoi faire ça ?

Pour visualiser directement la liste des employés.

Pour tester les composants de table, pagination, recherche, sans avoir à tout remplir à la main.

Auteur : MaeumClaire • Projet HRnet • 2025