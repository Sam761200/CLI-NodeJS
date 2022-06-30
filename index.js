import inquirer from 'inquirer'

inquirer.prompt([
    {
        type:'input',
        message: 'Quel est votre prènom ?',
        name: 'firstName'
    },
    {
        type:'confirm',
        message: 'Êtes-vous majeur ?',
        default: false,
        name: 'major'
    },
    {
        type: 'confirm',
        message: 'Avez-vous votre permis ?',
        default: false,
        name: 'permis',
        when: answer => answer.major
    },
    {
        type: 'list',
        message: 'Quel est votre couleur préférée ?',
        name: 'color',
        choices: [
            'Bleu',
            'Rouge',
            'Vert'
        ]
    }
]).then(answer => {
    console.log(`Bonjour ${answer.firstName}. ${answer.permis ? 'Vous avez votre permis': ''}. Votre couleur préférée est le ${answer.color}`);
})