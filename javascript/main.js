//console.log("Hello, World!");

function Accueil() {
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <section id="accueil">
            <h1>Bienvenue sur mon portfolio</h1>
            <p>
                Je suis Ilyas Sekhsoukhi, étudiant en ingénierie informatique passionné<br>
                par le développement logiciel, les technologies web et l'apprentissage<br>
                continu. À travers ce portfolio, je partage mes projets, mes compétences<br>
                et mon parcours académique afin de mettre en valeur mon évolution et mes réalisations.
            </p>
        </section>
    `;
}

function Experience() {
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
    <section id="experience">
        <h2>Expérience Professionnelle</h2>

        <article>
            <h3>Stage - King Pélagique</h3>
            <p><strong>Période :</strong> 2024</p>
            <p><strong>Département :</strong> Informatique</p>
            <p>
                Stage effectué au sein du département informatique de l’entreprise King Pélagique,<br>
                spécialisée dans la transformation des produits de la mer. Cette expérience a permis<br>
                de découvrir l’environnement professionnel et de participer à des tâches liées aux systèmes<br>
                et outils informatiques de l’entreprise.
            </p>
        </article>

        <article>
            <h3>Stage - ENCG Jadida</h3>
            <p><strong>Période :</strong> 2025</p>
            <p><strong>Département :</strong> Informatique</p>
            <p>
                Stage réalisé au sein du département informatique de l’ENCG Jadida, offrant une immersion<br>
                dans un environnement académique et professionnel. Cette expérience a permis de renforcer<br>
                les compétences techniques et la compréhension des systèmes informatiques.
            </p>
        </article>
    </section>
    `;
}

function Formation() {
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
    <section id="formation">
        <h2>Formation</h2>

        <article>
            <h3>Université Mundiapolis</h3>
            <p><strong>Filière :</strong> Cycle ingénieur en informatique</p>
            <p><strong>Période :</strong> 2023 - 2028</p>
            <p>
                Actuellement en première année de classe préparatoire en informatique,
                avec une formation axée sur les bases de l’ingénierie, la programmation
                et les sciences fondamentales.
            </p>
        </article>
    </section>
    `;
}

function Certifications() {
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
    <section id="certifications">
        <h2>Certifications</h2>
        <p>
            Voici mes certifications obtenues dans le domaine de l’informatique et des technologies.
        </p>
        <ul>
            <li>
                <strong>Développement Web (HTML, CSS, JavaScript)</strong> – Coursera
            </li>
            <li>
                <strong>Programmation en langage C</strong> – SoloLearn
            </li>
            <li>
                <strong>Introduction aux réseaux</strong> – Cisco Networking Academy
            </li>
            <li>
                <strong>CCNA (Cisco Certified Network Associate)</strong> – Cisco Networking Academy
            </li>
        </ul>
    </section>
    `;
}

function Contact() {
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
    <section id="contact">
        <h2>Contact</h2>
        <p>
            N’hésitez pas à me contacter via les informations ci-dessous.
        </p>
        <ul>
            <li><strong>Email personnel :</strong> sekhsoukhiilyas@gmail.com</li>
            <li><strong>Email universitaire :</strong> s.ilyass@mundiapolis.ma</li>
            <li><strong>Téléphone :</strong> +212 679895649</li>
        </ul>
    </section>
    `;
}

function ReseauxSociaux() {
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
    <section id="reseaux-sociaux">
        <h2>Réseaux sociaux</h2>
        <p>Voici mes profils professionnels en ligne.</p>
        <ul>
            <li>
                <strong>LinkedIn :</strong>
                <a href="https://www.linkedin.com/in/ilyas-sekhsoukhi-4865a32a6" target="_blank">Mon profil LinkedIn</a>
            </li>
            <li>
                <strong>GitHub :</strong>
                <a href="https://github.com/Ilyas-SEKHSOUKHI" target="_blank">Mon profil GitHub</a>
            </li>
        </ul>
    </section>
    `;
}