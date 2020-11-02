
const button = document.querySelector("#pl-lang");
const href = document.querySelector('.hash-link')
const bgButton = document.querySelector(".link-button");
const plBtn = document.querySelector("#pl-btn");
const engBtn = document.querySelector("#eng-btn")
engBtn.style.display = "none";
window.location.hash = "#eng"

let language = {
    eng: {
        about: "About",
        skills: "Skills",
        contact: "Contact",
        welcome: "Hello world! I'm Kamila",
        looking: "I am looking for a job",
        aboutMe: "About me",
        description: "I have finished study at University and I worked with children and disabled people. In 2018 year, I started my adventure with programming language, in the beginning it was just a new hobby that I would like to transform into a daily-work. Mostly, I am self-taught person, I've got to know how to write code in HTML, CSS(Sass), JavaScript and frameworks such as Bootstrap, jQuery and React. To learn new technology I use to do it via online courses on Udemy, eduweb.pl and Free Code Camp. I read blogs, articles and books about programming. I have finished postgraduate study specialty  Web and Mobile Application. During the study I strengthened knowledge of Fronted developer language and learned CMS - (wordpress, drupal, prestashop), mySQL, PHP and got basic knowledge how to create mobile application in Android Studio. I am aware that developer’s life is not a piece of cake, especially for junior but I am ready to do the best I can. I am junior at entry level but meanwhile you are reading this, I am learning something new.",
        personal_information: "Personal Information",
        name: "Name: ",
        age: "Age: ",
        citizenship: "Citizenship: ",
        polish: "Polish",
        mySkills: "MY SKILLS",
        tools: "TOOLS",
        myProjects: "MY PROJECTS",
        kindergarden_content: "Website which was in HTML, then I write it into Wordpress Template. In this project it has installed and using plugin Advanced Custom Fields. Template has registered custom post types, Rest API, sidebars, widgets and also created own search form to looking for informations on website.",
        web_3: "This website was built based on free template sketch. I used figma to open template. I have created this website just for practice my skills.",
        content_devnotes: "App created during course 'React from scrach' (by Adam Romański). The goals of this app is add simple  notes, articles with links or write the planned projects. It was created for practice, how to use React and Redux in projects.  It is not finished yet. I will write new elements and connect app to MongoDB.",
        content_customer: "Small application written in React. I created it for one of challenge. It is application to manage list of users/ customers.You can create/ add, delete or edit elements.It has backend in MongoDB.",
        content_books: "Website created with using Google Books Api. You can looking for a book or magazines by typping author or title (or both). I set up session storage in this project to have 'search history'",
        content_wordpress: "Website with blog and shop created in Wordpress. It was  a final assignment for study ‘web and mobile application’ for CMS section.What I included is: layout,new",
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
        description: "Ukończyłam studia na Uniwersytecie Opolskim i pracowałam z dziećmi osobami dorosłymi z niepełnosprawnościami. W roku 2018 zaczęłam swoją przygodę z językami programowania. Na początku było to tylko w jakimś sensie hobby / ciekawość, które postanowiłam zmienić na codzienną pracę. Jestem w dużym stopniu samoukiem. Nauczyłam się pisać kod w HTML, CSS, Java Script oraz używać frameworków tak jak Bootstrap, jQuery i React. Nowych technologii uczyłam się zdalnie, korzystając z kurów online na Udemy, eduweb.pl i Free Code Camp. Pogłębiam wiedzę czytając blogi, artykuły i książki o programowaniu. W 2020 roku ukończyłam studia podyplomowe na specjalności Aplikacje Mobilne i Internetowe. Podczas studiów umocniłam wiedzę z zakresu jezyków programistycznych dla Front endu jak również nauczyłam się tworzenia stron w CMS (wordpress, drupal, prestashop), oraz języka mySQL, PHP i podstawy tworzenia aplikacji internetowych w Android Studio. Jestem świadoma,że życie deweloperów w IT nie jest łatwe i proste,jednakże jestem gotowa podjąć się nowych zadań i dać z siebie to co najlepsze.",
        personal_information: "Informacje osobiste",
        name: "Imię: ",
        citizenship: "Obywatelstwo: ",
        polish: "Polskie",
        mySkills: "MOJE UMIEJĘTNOŚCI",
        tools: "NARZĘDZIA",
        myProjects: "MOJE PROJEKTY",
        kindergarden_content: "Stona internetowa była zbudowana w HTML, przekształciłam ją na motyw do wykorzystania w Wordpress.  W tym projekcie została zainstalowana i wykorzystywana wtyczka Advanced Custom Fields. Motyw ma zarejestrowane własne typy postów, paski boczne, widgety, wykorzystuje REST Api. Utworzone został również własny formularz do wyszukiwania informacji na stronie.",
        web_3: "Kod do strony internetowej napisałam na podstawie darmowego szablonu. Szablon otworzyłam w programie figma i na jego podstawie utworzyłam stronę internetową.",
        content_devnotes: "Aplikacja napisana w ramach kursu 'React od podstaw (Adam Romański). Celem aplikacji jest dodawanie prostych notatek, artykułów wraz z linkami oraz zaplnowanych projektów. Projekt utworzony, w celu nabrania praktyki jak użyć Reacta oraz Redux w projektach. Projekt nie skończony. Planuję dodać kilka elementów oraz napisać back-end do MongoDB",
        content_customer: "Mała aplikacja napisana w React. Utworzyłam ją podczas udziału w jednym z wyzwań. Jest to aplikacja do zarządzania listą użytkowników/ klientów. Możesz w niej utworzyć nowy kontakt, dodać, usunąć lub edytować. Aplikacja ma backend w MongoDB.",
        content_books: "Strona internetowa z użyciem Google API. Możesz wyszukać książkę lub czasopismo poprzez autora, tytuł. Wykorzystałam session storage do utworzenia historii wyszukiwania.",
        content_wordpress: "Strona internetowa  z blogiem i sklepem internetowym oparta na Wordpresie, było to zadanie zaliczeniowe na studia ‘ aplikacje mobilne i internetowe’ dla sekcji CMS. W zadaniu uwzględniłam wygląd. Newsletter, formularz kontaktowy, możliwość komentowania postów, oraz wykorzystanie WooCommerce do utworzenia sklepu online",
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
        kindergarden_content_id.textContent = language.pl.kindergarden_content;
        web3_id.textContent = language.pl.web_3;
        content_devnotes_id.textContent = language.pl.content_devnotes;
        books_content_id.textContent = language.pl.content_books;
        content_customer_id.textContent = language.pl.content_customer;
        wordpress_id.textContent = language.pl.content_wordpress;
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
        kindergarden_content_id.textContent = language.eng.kindergarden_content;
        web3_id.textContent = language.eng.web_3;
        content_devnotes_id.textContent = language.eng.content_devnotes;
        books_content_id.textContent = language.eng.content_books;
        content_customer_id.textContent = language.eng.content_customer;
        wordpress_id.textContent = language.eng.content_wordpress;
        gitHub_button.textContent = language.eng.gitHub;
        contact2_id.textContent = language.eng.contact;
        end_subtitle_id.textContent = language.eng.endSubtitle;

    }

}


button.addEventListener("click", buttonFunction);