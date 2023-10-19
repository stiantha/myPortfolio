import proxy from "../proxies/media"

const media = {
    discord: {
        id: "168427950230732801",
        tag: "stiantha",
    },
    stackOverflow: {
        id: "21562624",
        name: "stian",
    },
    github: "stiantha",
    figma: "stiantha",
    replit: "stiantha",
    codewars: "stiantha",
    devTo: "stiantha",
    cssBattle: "stiantha",
    codepen: "stiantha",
    dribble: "stiantha",
    email: "kontakt@stiantha.com"
}

export default new Proxy(media, proxy);

