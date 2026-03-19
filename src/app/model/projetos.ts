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
    }

];