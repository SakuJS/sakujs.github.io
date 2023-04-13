/**
 * dashboard.js - Toda la funcionalidad del Dashboard se situa en este script!
 */
//Funcion para Filtrar por tipo de cursos


async function getCourses(url) {
    fetch(url).then(res => res.json()).then(data => {
        for (i = 0; i < data.courses.length; i++) {
            var skjs_courses = data.courses[i];
            const main_content = document.querySelector('main');
            var card = `
                <a href="/courses/${skjs_courses.cid}" style="color: white; text-decoration: none;">
                    <div id="card-${i}" class="card" style="background-image: url('${skjs_courses.thumbnail}'); filter: none;">
                        <div id="progress-fill" style="z-index: 0;"><h3>0%</h3></div>
                        <div class="cinfo">
                            <h2 style="z-index:1;">${skjs_courses.name}</h2>
                            <ul>
                            <li><strong>Fecha de creación:</strong> ${skjs_courses.release}</li>
                            </ul>
                        </div>
                        <p class="author">Autor: ${skjs_courses.author}</p>
                        <span class="pill pill-${skjs_courses.tag}">${skjs_courses.state}</span>
                    </div>
                </a>
            `;
            const courses_div = document.createElement('div');
            courses_div.innerHTML = card;
            main_content.appendChild(courses_div);

            const progress = document.getElementById('progress-fill');
            progress.style.height = "0";

        }
    });
}

const followers_info = document.querySelector('#f-info-q');
const karma_info = document.querySelector('#k-info-q');
const username = document.querySelector('#username');
const level_info = document.querySelector('#l-info-q');
const badges_info = document.querySelector('#b-info-q');
const user_alias = document.querySelector('#user-alias');

document.body.onload = () => {
    followers_info.innerHTML = getCookie('followers');
    karma_info.innerHTML = getCookie('karma');
    username.innerHTML = getCookie('username');
    level_info.innerHTML = getCookie('level');
    badges_info.innerHTML = getCookie('badges');
    user_alias.innerHTML = getCookie('alias');
}


getCourses('https://raw.githubusercontent.com/SakuJS/api/main/v1/skjs.courses.json');

//https://raw.githubusercontent.com/SakuJS/api/main/v1/skjs.courses.json
