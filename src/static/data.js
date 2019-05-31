const GO_TO_REPOSITORY = "Go to repository",
  GO_TO_WEBSITE = "Go to website",
  GO_TO_REPOSITORY_FRONT_END = "Go to repository (Front End)",
  GO_TO_REPOSITORY_BACK_END = "Go to repository (Back End)",
  GO_TO_SOURCE_CODE = "Gå till källkod";

const projects = [
  {
    title: "VX",
    techniques: ["firebase", "react"],
    description:
      "Working as a project manager for the ongoing transformation of UK broadband, transferring to the more stable fibre network.",
    links: [
      {
        url: "https://nauberinho.github.io/Chat,%20inl%202/index.html",
        text: GO_TO_WEBSITE
      }
    ]
  }
];

const techniques = {
  main: [
    {
      title: "FIFA",
      summary: "I really like FIFA",
      description: `Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.
      Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok.
      Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar.
      Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.`,
      rating: 4.5,
      key: "react"
    }
  ],
  tools: [
    {
      title: "DualShock 4",
      rating: 4,
      key: "dualshock4"
    }
  ]
};

const about = {
  introduction: `
  I develop front- and back end services with mainly JavaScript, HTML5 and CSS3 together with it's belonging frameworks and libraries.
  I enjoy every aspect of delivering a runtime efficient application in combination with beautiful, smooth UI/UX.`,
  text: `
  I develop front- and back end services with mainly JavaScript, HTML5 and CSS3 together with it's belonging frameworks and libraries.
  I enjoy every aspect of delivering a runtime efficient application in combination with beautiful, smooth UI/UX.`,
  occupation: 'Project manager',
  location: 'London, UK'
};

export { projects, techniques, about };
