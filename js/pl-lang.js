const button = document.querySelector("#pl-lang");
const href = document.querySelector('.hash-link')
const bgButton = document.querySelector(".link-button");

window.location.hash = "#eng"

let language = {
    eng: {
        about: "About",
        skills: "Skills",
        contact: "Contact",
        welcome: "Hi! I'm Kamila Junior",
        aboutMe: "About me",
        description: "I have finished study at University and I worked with children and disabled people. In 2018 year, I started my adventure with  programming language, in the beginning it was just a new hobby that I would like to transform into a daily-work. Mostly, I am self-taught person, I've got to know how to write code in HTML, CSS, JavaScript and frameworks such as Bootstrap, jQuery and React. I wish to develop further towards on front-end developer. I also have learnt basic of Back-end (MongoDB, Node.js, express). To learn new technology I use to do it via online courses on Udemy e-learning platform and Free Code Camp. I read blogs, articles and books about programming. Also I attend to postgraduate studies (specialty: web and mobile applications). ",
        personal_information: "Personal Information",
        name: "Name: ",
        age: "Age: ",
        years: "29 years",
        citizenship: "Citizenship: ",
        polish: "Polish",
        mySkills: "MY SKILLS",
        myProjects: "MY PROJECTS",
        gitHub: "See more",
        endSubtitle: "Would you like to know me? Do not wait any longer and contact with me ;)"

    },
    pl: {
        about: "O mnie",
        skills: "Umiejętności",
        contact: "Kontakt",
        welcome: "Witam! Mam na imię Kamila, Junior",
        aboutMe: "O mnie",
        description: "Ukończyłam studia na Uniwersytecie Opolskim i pracowałam z dziećmi osobami dorosłymi z  niepełnosprawnościami. W roku 2018 zaczęłam swoją przygodę z językami programowania. Na początku było to tylko w jakimś sensie hobby, które postanowiłam zmienić na codzienną pracę. Jestem  w dużym stopniu samoukiem. Nauczyłam się pisać od w HTML, CSS, Java Script oraz używać frameworków tak jak Bootstrap, jQuery i React. Chcę być zawodowym front end developerem. Również nauczyłam się podstaw Back endu (MongoDb, Node.js, Express). Uczę się nowych technologi poprzez kursy online na platformie e-learningowej Udemy oraz Free Code Camp. Czytam na bieżąco blogi różnych programistów, artykuły i książki. Również aktualnie uczę się na studiach podyplomowych (specjalność: aplikacje mobilne i internetowe). ",
        personal_information: "Informacje osobiste",
        name: "Imię: ",
        age: "Wiek: ",
        years: "29 lat",
        citizenship: "Obywatelstwo: ",
        polish: "Polskie",
        mySkills: "MOJE UMIEJĘTNOŚCI",
        myProjects: "MOJE PROJEKTY",
        gitHub: "Zobacz więcej",
        endSubtitle: "Zainteresowała Cię moja osoba?  Jeśli tak, nie ma co czekać dłużej i skontaktuj się ze mną :)"
    }
}

const buttonFunction = () => {
    if (bgButton.textContent === "Pl" && window.location.hash === "#eng") {
        bgButton.textContent = "Eng"
        bgButton.style.backgroundImage = 'url(".././svg/uk.svg")'
        href.setAttribute('href', "#pl");
        about_id.textContent = language.pl.about;
        skills_id.textContent = language.pl.skills;
        contact_id.textContent = language.pl.contact;
        welcome_id.textContent = language.pl.welcome;
        description_id.textContent = language.pl.description;
        aboutMe_id.textContent = language.pl.aboutMe;
        personal_inf_id.textContent = language.pl.personal_information;
        name_id.textContent = language.pl.name;
        age_id.textContent = language.pl.age;
        years_id.textContent = language.pl.years;
        citizenship_id.textContent = language.pl.citizenship;
        polish_id.textContent = language.pl.polish;
        mySkills_id.textContent = language.pl.mySkills;
        myProjects_id.textContent = language.pl.myProjects;
        gitHub_button.textContent = language.pl.gitHub;
        contact2_id.textContent = language.pl.contact;
        end_subtitle_id.textContent = language.pl.endSubtitle;

    } else {
        bgButton.textContent = "Pl"
        href.setAttribute('href', "#eng");
        bgButton.style.backgroundImage = 'url(".././svg/flag.svg")';
        about_id.textContent = language.eng.about
        skills_id.textContent = language.eng.skills;
        contact_id.textContent = language.eng.contact;
        welcome_id.textContent = language.eng.welcome;
        description_id.textContent = language.eng.description;
        aboutMe_id.textContent = language.eng.aboutMe;
        personal_inf_id.textContent = language.eng.personal_information;
        name_id.textContent = language.eng.name;
        age_id.textContent = language.eng.age;
        years_id.textContent = language.eng.years;
        citizenship_id.textContent = language.eng.citizenship;
        polish_id.textContent = language.eng.polish;
        mySkills_id.textContent = language.eng.mySkills;
        myProjects_id.textContent = language.eng.myProjects;
        gitHub_button.textContent = language.eng.gitHub;
        contact2_id.textContent = language.eng.contact;
        end_subtitle_id.textContent = language.eng.endSubtitle;

    }

}





button.addEventListener("click", buttonFunction)