const translations = {
    en: {
        welcome: "Welcome to the Latvian osu! Community",
        description: "Join our Discord server to meet players, discuss osu!, and improve your skills!",
        join: "Join Our Discord"
    },
    lv: {
        welcome: "Laipni lūdzam Latvijas osu! kopienā",
        description: "Pievienojieties mūsu Discord serverim, lai satiktu spēlētājus un uzlabotu savas prasmes!",
        join: "Pievienoties mūsu Discord"
    },
    ru: {
        welcome: "Добро пожаловать в латвийское сообщество osu!",
        description: "Присоединяйтесь к нашему серверу Discord, чтобы встретить игроков и улучшить свои навыки!",
        join: "Присоединиться к нашему Discord"
    }
};

document.querySelectorAll('nav ul li a').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = el.getAttribute('data-lang');
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            elem.textContent = translations[lang][key];
        });
    });
});