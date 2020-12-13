const button = document.querySelector("#pl-lang");
const href = document.querySelector('.hash-link')
const bgButton = document.querySelector(".link-button");
const plBtn = document.querySelector("#pl-btn");
const engBtn = document.querySelector("#eng-btn");

if (engBtn) {
    engBtn.style.display = "none";

}
window.location.hash = "#eng"

let language = {
    eng: {
        about: "About",
        skills: "Skills",
        contact: "Contact",
        welcome: "Hello world! I'm Kamila",
        looking: "I am looking for a job",
        aboutMe: "About me",
        description: "My name is Kamila,  in 2018, I started my adventure with programming language, in the beginning it was just a new hobby that I would like to transform into a daily-work. Mostly, I am a self-taught person, I've got to know how to write code in HTML, CSS(Sass), JavaScript and frameworks such as Bootstrap, jQuery and React. To learn new technology I use to do it via online courses on Udemy, eduweb.pl and Free Code Camp. I read blogs, articles and books about programming. I have finished postgraduate study in specialty web and mobile application. During the study I strengthened knowledge of Fronted developer language and learned CMS - (wordpress, drupal, prestashop), mySQL, PHP and got basic knowledge how to create mobile applications in Android Studio. I am aware that a developer's life is not a piece of cake, especially for junior but I am ready to do the best I can. I am a junior at entry level but meanwhile you are reading this, I am learning something new.  ",
        personal_information: "Personal Information",
        name: "Name: ",
        age: "Age: ",
        citizenship: "Citizenship: ",
        polish: "Polish",
        mySkills: "MY SKILLS",
        tools: "TOOLS",
        myProjects: "MY PROJECTS",
        gitHub: "See more",
        endSubtitle: "Would you like to know me? Do not wait any longer and contact with me 😀"

    },
    pl: {
        about: "O mnie",
        skills: "Umiejętności",
        contact: "Kontakt",
        welcome: "Hello World! Jestem Kamila",
        looking: "Obecnie szukam pracy ",
        aboutMe: "O mnie",
        description: "Mam na imię Kamila, w 2018 roku zaczęłam swoją przygodę z językami programowania. Na początku było to tylko w jakimś sensie hobby / ciekawość, które postanowiłam zmienić na codzienną pracę. Jestem w dużym stopniu samoukiem. Nauczyłam się pisać kod w HTML, CSS, Java Script oraz używać frameworków tak jak Bootstrap, jQuery i React. Nowych technologii uczyłam się zdalnie, korzystając z kurów online na Udemy, eduweb.pl i Free Code Camp. Pogłębiam wiedzę czytając blogi, artykuły i książki o programowaniu. W 2020 roku ukończyłam studia podyplomowe na specjalności Aplikacje Mobilne i Internetowe. Podczas studiów umocniłam wiedzę z zakresu języków programistycznych dla Front endu jak również nauczyłam się tworzenia stron w CMS (wordpress, drupal, prestashop), oraz języka mySQL, PHP i podstawy tworzenia aplikacji internetowych w Android Studio. Jestem świadoma,że życie deweloperów w IT nie jest łatwe i proste,jednakże jestem gotowa podjąć się nowych zadań i dać z siebie to co najlepsze.",
        personal_information: "Informacje osobiste",
        name: "Imię: ",
        citizenship: "Obywatelstwo: ",
        polish: "Polskie",
        mySkills: "MOJE UMIEJĘTNOŚCI",
        tools: "NARZĘDZIA",
        myProjects: "MOJE PROJEKTY",
        gitHub: "Zobacz więcej",
        endSubtitle: "Zainteresowała Cię moja osoba?  Jeśli tak, nie ma co czekać dłużej i skontaktuj się ze mną 😀",
    }
}

const buttonFunction = () => {
    console.log(window.location.hash)
    if (window.location.hash === "#eng") {
        engBtn.style.display = "inline-block"
        plBtn.style.display = "none";
        href.setAttribute('href', "#pl");
        about_id.textContent = language.pl.about;
        skills_id.textContent = language.pl.skills;
        contact_id.textContent = language.pl.contact;
        welcome_id.textContent = language.pl.welcome;
        looking_id.textContent = language.pl.looking;
        description_id.textContent = language.pl.description;
        aboutMe_id.textContent = language.pl.aboutMe;
        personal_inf_id.textContent = language.pl.personal_information;
        name_id.textContent = language.pl.name;
        citizenship_id.textContent = language.pl.citizenship;
        polish_id.textContent = language.pl.polish;
        mySkills_id.textContent = language.pl.mySkills;
        tools_id.textContent = language.pl.tools;
        myProjects_id.textContent = language.pl.myProjects;
        gitHub_button.textContent = language.pl.gitHub;
        contact2_id.textContent = language.pl.contact;
        end_subtitle_id.textContent = language.pl.endSubtitle;

    } else {
        engBtn.style.display = "none"
        href.setAttribute('href', "#eng");
        plBtn.style.display = "inline-block"
        about_id.textContent = language.eng.about
        skills_id.textContent = language.eng.skills;
        contact_id.textContent = language.eng.contact;
        welcome_id.textContent = language.eng.welcome;
        looking_id.textContent = language.eng.looking;
        description_id.textContent = language.eng.description;
        aboutMe_id.textContent = language.eng.aboutMe;
        personal_inf_id.textContent = language.eng.personal_information;
        name_id.textContent = language.eng.name;
        citizenship_id.textContent = language.eng.citizenship;
        polish_id.textContent = language.eng.polish;
        mySkills_id.textContent = language.eng.mySkills;
        myProjects_id.textContent = language.eng.myProjects;
        gitHub_button.textContent = language.eng.gitHub;
        contact2_id.textContent = language.eng.contact;
        end_subtitle_id.textContent = language.eng.endSubtitle;

    }

}

if (button) {

    button.addEventListener("click", buttonFunction);
}