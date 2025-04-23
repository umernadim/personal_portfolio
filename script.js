function projectHTMl(params) {
  
const projectsData = [
  {
    title: "<span>Hope English</span> <span>Language Center</span>",
    descp:
      "Dive into a world of language and see what I've worked on!",
    img: "assets/hopeLang.jpg",
    link: "https://umernadim.github.io/hopeEngLangCenter/"
  },
  {
    title: "<span>Sundown</span> <span>Studio</span>",
    descp:
      "Explore our innovative creative space and discover our captivating project",
    img: "assets/sunDown.webp",
    link: "https://umernadim.github.io/sundown-web/"
  },
  {
    title: "<span>Two</span> <span>Good Co.</span>",
    descp:
      "Support and empower women experiencing domestic violence, every day of the year.",
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/13b0e83a9ceed7de405a0e3450ab70e7d651bcf0-8035x5357.jpg",
    link: "https://umernadim.github.io/twoGoodCo/"
  },
  {
    title: "<span>FanoFan</span>",
    descp:
      "Experience the ultimate fan connection with FanoFan Web and engage with your favorite fandoms!",
    img: "assets/fanOfan.jpg",
    link: "https://umernadim.github.io/FanoFan-web/"
  },
];

let projectContainer = document.querySelector('#proj-container');
projectsData.forEach((project) => {
  projectContainer.innerHTML += `
     <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="200" class="proj">
        <div class="proj-img">
            <img src="${project.img}" alt="project-image">
        </div>
        <div class="proj-info" >
            <h3>${project.title}</h3>
            <p>${project.descp}</p>
            <a href="${project.link}"><span class="line"></span> 
            <span>visit site</span></a>
        </div>
    </div>`;
});
}

projectHTMl();

