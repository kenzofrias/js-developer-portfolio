
function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.textContent = profileData.name

    const job = document.getElementById('profile.job')
    const perfil = profileData.personal
    job.textContent = profileData.job
    job.href = `${perfil}`

    const location = document.getElementById('profile.location')
    location.textContent = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.textContent = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.textContent = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => {
        return`
        <li>
            <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
        </li>`}).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages.map(language => {
        return`
        <li>
            <i class="fa-solid fa-check"></i>
            ${language}
        </li>`}).join('')
}

function updatePortfolio(profileData){
    const portfolioProjects = document.getElementById('profile.portfolio')

    portfolioProjects.innerHTML = profileData.portfolio.map(project => { return`
        <li>
                        
            <h5 class="title github">
                ${project.github ? `<i class="fa-brands fa-github"></i>` : ''}
                ${project.name}
            </h5>

            <p>
                <a href="${project.url}" target="_blank">
                    <i class="fa-solid fa-angles-right"></i>
                    Acesse o projeto aqui
                    <i class="fa-solid fa-angles-left"></i>
                </a>
            </p>
        </li>`}).join('')
}

// function updateExperience(profileData){
//     const experience = document.getElementById('profile.experience')
    
//     experience.innerHTML = profileData.professionalExperience.map(experience => {
//         return `
//         <li>
//             <h5 class="title">${experience.name}</h5>

//             <p class="period"><i class="fa-solid fa-calendar-days"></i> ${experience.period}</p>

//             <p>${experience.description}</p>
//         </li>`}).join('')
// }

(async () =>{
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    // updateExperience(profileData)
})()