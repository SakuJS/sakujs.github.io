/**
 * dashboard.js - Toda la funcionalidad del Dashboard se situa en este script!
 */


async function getCourses(url) {
    fetch(url).then(res => res.json()).then(data => {
        for (i = 0; i < data.courses.length; i++) {
            var skjs_courses = data.courses[i];
            console.log(skjs_courses.name);
            const main_content = document.querySelector('main');
            var card = `
                <div id="card-${i}" class="card" style="background-image: url('${skjs_courses.thumbnail}'); filter: none;">
                    <h2>${skjs_courses.name}</h2>
                    <ul>
                    <li><strong>Fecha de creación:</strong> ${skjs_courses.release}</li>
                    </ul>
                    <p class="author">Autor: ${skjs_courses.author}</p>
                    <span class="pill pill-${skjs_courses.tag}">${skjs_courses.state}</span>
                </div>
            `;
            const courses_div = document.createElement('div');
            courses_div.innerHTML = card;
            main_content.appendChild(courses_div);

            

        }
    });
}



getCourses('https://raw.githubusercontent.com/SakuJS/api/main/v1/skjs.courses.json');

//https://raw.githubusercontent.com/SakuJS/api/main/v1/skjs.courses.json
