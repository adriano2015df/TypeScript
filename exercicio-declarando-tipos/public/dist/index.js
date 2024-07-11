//Array para salvar os nomes das naves
const spaceships = [];
//Funções Principais
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada!`);
}
//Função  que procura a nave
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => {
        return ship.name === name;
    });
    return spaceship;
}
//Função para adicionar um tripulante caso aja vaga
function addCrewMenber(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado à tripulação. Limite atingido!`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado a tripulação da ${spaceship.name}`);
    }
}
//Função para enviar a nave em uma missão
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada pois a nave está em uma missão!`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada para missão pois a tripulação é insuficiente!`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} enviada com sucesso à missão!`);
    }
}
//Função do menu
function firstMenuOption() {
    const name = prompt('Qual a nave a ser registrada no sistema?');
    const pilot = prompt(`Nome do piloto  da ${name}`);
    const crewLimit = Number.parseInt(prompt(`Número máximo de tripulantes da ${name}?`));
    const confirmation = confirm(`Comfirma as informações da ${name}?\n Pilotada por ${pilot}\n
        Com a capacidade máxima de tripulantes: ${crewLimit}?`);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
// Opção 2 do menu (adicionar tripulante)
function secondMenuOption() {
    const member = prompt('Nome do tripulante para adicionar:');
    const spaceshipName = prompt(`Qual nave será designada para ${member}?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Deseja incluir  ${member} na tripulação da ${spaceship.name}?`);
        if (confirmation) {
            addCrewMenber(member, spaceship);
        }
    }
}
//Opção 3 do menu
function thirdMenuOption() {
    const spaceshipName = prompt('Qual o nome da nave a ser enviada?');
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma o envio da ${spaceship.name} na missão?`);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
//Opção 4 do menu
function fourMenuOption() {
    let list = 'Naves Registradas:\n';
    spaceships.forEach((spaceship) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
        Capacida máxima da tripulação: ${spaceship.crewLimit}
        Tripulação: ${spaceship.crew.length}`;
        spaceship.crew.forEach(member => {
            list += `      -${member}\n`;
        });
    });
    alert(list);
}
//Menu
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
        1 - Registrar uma noma Nava
        2 - Adicionar membro na tripulação
        3 - Enviar nave em missão
        4 - Listar naves registradas
        5 Encerrar`;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
