export interface Projeto {
    url_image : string,
    url_video : string,
    nome : string,
    descricao: string,
    publico: boolean,
    link_repositorio: string,
    link_download: string,
    tecnologias: string[]
}

export const PROJETO_PADRAO: Projeto[] = [

    {
        url_image : "imgs/projects/SICA.png",
        url_video : "video/projects/SICA.mp4",
        nome : "SICA",
        descricao: "O SICA é um sistema que integra os setores de Monitoramento, Demanda e Despachantes, centralizando informações e automatizando processos. Ele gera relatórios e comparações automaticamente, reduzindo tarefas manuais e aumentando a eficiência operacional.",
        publico: false,
        link_repositorio: "",
        link_download: "",

        tecnologias: [
            "angular", "java", "python"
        ]
    },
    {
        url_image : "imgs/projects/REVISAI.png",
        url_video : "video/projects/REVISAI.mp4",
        nome : "Revisai",
        descricao: "O Revisai é um sistema de flashcards desenvolvido para otimizar o processo de revisão e aprendizado. A aplicação permite que o usuário crie, organize e revise conteúdos de forma prática e eficiente, utilizando a repetição espaçada para melhorar a memorização.",
        publico: true,
        link_repositorio: "https://github.com/KauaBrenoQuerubino/Revisai-Front",
        link_download: "https://github.com/KauaBrenoQuerubino/Revisai-Front/archive/refs/heads/main.zip",

        tecnologias: [
            "angular", "java"
        ]
    },
    {
        url_image : "imgs/projects/AMAZONIA.png",
        url_video : "video/projects/AMAZONIA.mp4",
        nome : "Amazonia",
        descricao: "O site da empresa de ônibus Amazônia foi desenvolvido com o objetivo de apresentar informações institucionais, serviços e rotas de forma clara e acessível aos usuários. A aplicação conta com integração ao Firebase para gerenciamento dinâmico de dados, permitindo atualizações práticas e eficientes, com foco na organização das informações e na experiência do usuário.",
        publico: true,
        link_repositorio: "https://amazoniainterturismo.com.br/",
        link_download: "",

        tecnologias: [
            "angular", "typescript", "html"
        ]
    },
    {
        url_image : "imgs/projects/MAXPHP.png",
        url_video : "video/projects/MAX.mp4",
        nome : "MAXFOOD",
        descricao: "O Max Food é um aplicativo de delivery inspirado em plataformas como iFood, desenvolvido como projeto acadêmico com o objetivo de aplicar na prática conceitos de desenvolvimento de software. A aplicação permite que usuários visualizem restaurantes, acessem cardápios e realizem pedidos de forma simples e intuitiva, focando na usabilidade, organização do sistema e na simulação de um ambiente real de pedidos online.",
        publico: true,
        link_repositorio: "https://github.com/MaxFood/frontend-mx",
        link_download: "https://github.com/MaxFood/frontend-mx/archive/refs/heads/main.zip",

        tecnologias: [
            "php"
        ]
    },
    {
        url_image : "imgs/projects/TO-DO-LIST.png",
        url_video : "video/projects/TO-DO-LIST.mp4",
        nome : "UniTask",
        descricao: "O Uni Task é um sistema de organização de tarefas desenvolvido para auxiliar estudantes no controle de atividades acadêmicas do dia a dia. A aplicação permite criar, editar e acompanhar tarefas de forma prática, ajudando na gestão do tempo e na produtividade, com uma interface simples e focada na usabilidade.",
        publico: true,
        link_repositorio: "https://github.com/KauaBrenoQuerubino/tarefas-projecao-frontend",
        link_download: "https://github.com/KauaBrenoQuerubino/tarefas-projecao-frontend.git",

        tecnologias: [
            "angular", "java"
        ]
    }

];