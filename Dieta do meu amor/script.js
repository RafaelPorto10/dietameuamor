const days = [
    {
        name: "Segunda-feira",
        meals: {
            cafe: "2 ovos cozidos e uma fruta ",
            almoco: "Frango grelhado na Airfryer, batata-doce, uma porção pequena de arroz",
            janta: "Legumes com carne magra e uma maçã"
        },
        images: {
            cafe: "img/segunda-cafe.jpg",
            almoco: "img/segunda-almoco.jpg",
            janta: "img/segunda-janta.jpg"
        },
        frase: "Cada escolha saudável é um passo mais perto do seu objetivo! Você é muito bibita"
    },
    {
        name: "Terça-feira",
        meals: {
            cafe: "Vitamina de banana com aveia e uma torrada integral",
            almoco: "Peixe assado com batata-doce e brócolis",
            janta: "Omelete com espinafre e tomate"
        },
        images: {
            cafe: "img/terca-cafe.jpg",
            almoco: "img/terca-almoco.jpg",
            janta: "img/terca-janta.jpg"
        },
        frase: "Continue firme, você está indo muito bem! Te amo meu amor!"
    },
    {
        name: "Quarta-feira",
        meals: {
            cafe: "Pão integral com ricota e café-preto ( sem açúcar ), fruta",
            almoco: "Carne moída magra com purê de mandioquinha e legumes",
            janta: "Salada com atum"
        },
        images: {
            cafe: "img/quarta-cafe.jpg",
            almoco: "img/quarta-almoco.jpg",
            janta: "img/quarta-janta.jpg"
        },
        frase: "O segredo é a constância. Você está no caminho certo! Confio em você meu amor"
    },
    {
        name: "Quinta-feira",
        meals: {
            cafe: "Rap10 com queijo magro, fruta",
            almoco: "Estrogonofe de frango com arroz (porção pequena)",
            janta: "Salada de tomate com cenoura e ovo cozido"
        },
        images: {
            cafe: "img/quinta-cafe.jpg",
            almoco: "img/quinta-almoco.jpg",
            janta: "img/quinta-janta.jpg"
        },
        frase: "Seu esforço vale cada resultado. Orgulho define! Não desista meu amor, estou com você"
    },
    {
        name: "Sexta-feira",
        meals: {
            cafe: "Tapioca com ovo e queijo magro, fruta",
            almoco: "Lasanha de abobrinha com carne moída",
            janta: "Shake de Whay com frutas"
        },
        images: {
            cafe: "img/sexta-cafe.jpg",
            almoco: "img/sexta-almoco.jpg",
            janta: "img/sexta-janta.jpg"
        },
        frase: "Sextou saudável! Continue com foco 💪! Estou orgulhoso"
    },
    {
        name: "Sábado",
        meals: {
            cafe: "Tapioca com queijo magro e suco natural, fruta",
            almoco: "Feijão tropeiro com couve refogada",
            janta: "Pizza a moda sem presunto e bacon (Dia do lixo)"
        },
        images: {
            cafe: "img/sabado-cafe.jpg",
            almoco: "img/sabado-almoco.jpg",
            janta: "img/sabado-janta.jpg"
        },
        frase: "A disciplina no final de semana mostra o seu compromisso! Bora para cima bibita"
    },
    {
        name: "Domingo",
        meals: {
            cafe: "Pão integral com ovo mexido café preto, fruta",
            almoco: "Arroz, salada colorida e filé de frango",
            janta: "Salada de frutas com iogurte"
        },
        images: {
            cafe: "img/domingo-cafe.jpg",
            almoco: "img/domingo-almoco.jpg",
            janta: "img/domingo-janta.jpg"
        },
        frase: "Bora para mais uma semana, foco e diciplina que dá certo minha princesa!"
    }
];

let currentIndex = new Date().getDay() - 1;
if (currentIndex < 0) currentIndex = 6; // Corrige domingo como último item

const dayContainer = document.getElementById("day-container");

function renderDay(index) {
    const day = days[index];
    dayContainer.innerHTML = `
        <h2>${day.name}</h2>
        <ul>
            <li><strong>Café da manhã:</strong> ${day.meals.cafe}<br><img src="${day.images.cafe}" alt="Café da manhã" class="meal-img"></li>
            <li><strong>Almoço:</strong> ${day.meals.almoco}<br><img src="${day.images.almoco}" alt="Almoço" class="meal-img"></li>
            <li><strong>Jantar:</strong> ${day.meals.janta}<br><img src="${day.images.janta}" alt="Jantar" class="meal-img"></li>
        </ul>
        <p class="frase">${day.frase}</p>
    `;
}

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + days.length) % days.length;
    renderDay(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % days.length;
    renderDay(currentIndex);
});

renderDay(currentIndex);

// Tema claro/escuro
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
