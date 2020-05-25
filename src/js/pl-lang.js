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
        description: "I have finished study at University and I worked with children and disabled people. In 2018 year, I started my adventure with programming language, in the beginning it was just a new hobby that I would like to transform into a daily-work. Mostly, I am self-taught person, I've got to know how to write code in HTML, CSS(Sass), JavaScript and frameworks such as Bootstrap, jQuery and React. To learn new technology I use to do it via online courses on Udemy, eduweb.pl and Free Code Camp. I read blogs, articles and books about programming. In 2019 I have started postgraduate study specialty  Web and Mobile Application, I will finish it in July. During the study I strengthened knowledge of Fronted developer language and learned CMS - (wordpress, drupal, prestashop), mySQL, PHP and got basic knowledge how to create mobile application in Android Studio. I am aware that developer’s life is not a piece of cake, especially for junior but I am ready to do the best I can. I am junior at entry level but meanwhile you are reading this, I am learning something new.",
        personal_information: "Personal Information",
        name: "Name: ",
        age: "Age: ",
        years: "29 years",
        citizenship: "Citizenship: ",
        polish: "Polish",
        mySkills: "MY SKILLS",
        tools: "TOOLS",
        myProjects: "MY PROJECTS",
        notes_content: "The goals of this app is to write your simple notes / plans for next travels, write and keep important links to website in one place. Or just add instagram accounts your favorites travelers.",
        web_3: "This website was built based on free template sketch. I used figma to open template. I have created this website just for practice my skills.",
        web_1: "This website was design and created by me. I created it because I wanted to have some experience with Bootstrap.",
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
        description: "Ukończyłam studia na Uniwersytecie Opolskim i pracowałam z dziećmi osobami dorosłymi z niepełnosprawnościami. W roku 2018 zaczęłam swoją przygodę z językami programowania. Na początku było to tylko w jakimś sensie hobby / ciekawość, które postanowiłam zmienić na codzienną pracę. Jestem w dużym stopniu samoukiem. Nauczyłam się pisać kod w HTML, CSS, Java Script oraz używać frameworków tak jak Bootstrap, jQuery i React. Nowych technologii uczyłam się zdalnie, korzystając z kurów online na Udemy, eduweb.pl i Free Code Camp. Pogłębiam wiedzę czytając blogi, artykuły i książki o programowaniu. W 2019 roku rozpoczęłam studia podyplomowe na specjalnościAplikacje Mobilne i Internetowe Planowo studia ukończę w lipcu br. Podczas studiów umocniłam wiedzę z zakresu jezyków programistycznych dla Front endu jak również nauczyłam się tworzenia stron w CMS (wordpress, drupal, prestashop), oraz języka mySQL, PHP i podstawy tworzenia aplikacji internetowych w Android Studio. Jestem świadoma,że życie deweloperów w IT nie jest łatwe i proste,jednakże jestem gotowa podjąć się nowych zadań i dać z siebie to co najlepsze.",
        personal_information: "Informacje osobiste",
        name: "Imię: ",
        age: "Wiek: ",
        years: "29 lat",
        citizenship: "Obywatelstwo: ",
        polish: "Polskie",
        mySkills: "MOJE UMIEJĘTNOŚCI",
        tools: "NARZĘDZIA",
        myProjects: "MOJE PROJEKTY",
        notes_content: "Celem aplikacji jest spisywanie prostych notatek / planów na następną podróż, spisywanie ważnych linków do stron internetowych. Również możesz dodać konta z instagrama ulubionych podróżników. ",
        web_3: "Kod do strony internetowej napisałam na podstawie darmowego szablonu. Szablon otworzyłam w programie figma i na jego podstawie utworzyłam stronę internetową.",
        web_1: "Strona internetowa zaprojektowana i utworzona prze zemnie dla celów ćwiczeniowych w Bootstrap.",
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
        age_id.textContent = language.pl.age;
        years_id.textContent = language.pl.years;
        citizenship_id.textContent = language.pl.citizenship;
        polish_id.textContent = language.pl.polish;
        mySkills_id.textContent = language.pl.mySkills;
        tools_id.textContent = language.pl.tools;
        myProjects_id.textContent = language.pl.myProjects;
        notes_content_id.textContent = language.pl.notes_content;
        web3_id.textContent = language.pl.web_3;
        web1_id.textContent = language.pl.web_1;
        books_content_id.textContent = language.pl.content_books;
        content_customer_id.textContent = language.pl.content_customer;
        web4_id.textContent = language.pl.content_wordpress;
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
        age_id.textContent = language.eng.age;
        years_id.textContent = language.eng.years;
        citizenship_id.textContent = language.eng.citizenship;
        polish_id.textContent = language.eng.polish;
        mySkills_id.textContent = language.eng.mySkills;
        myProjects_id.textContent = language.eng.myProjects;
        notes_content_id.textContent = language.eng.notes_content;
        web3_id.textContent = language.eng.web_3;
        web1_id.textContent = language.eng.web_1;
        books_content_id.textContent = language.eng.content_books;
        content_customer_id.textContent = language.eng.content_customer;
        web4_id.textContent = language.eng.content_wordpress;
        gitHub_button.textContent = language.eng.gitHub;
        contact2_id.textContent = language.eng.contact;
        end_subtitle_id.textContent = language.eng.endSubtitle;

    }

}


button.addEventListener("click", buttonFunction);