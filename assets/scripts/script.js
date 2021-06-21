const createProjectDiv = ({name, description, previewImageLink, author, facebookProfile, linkedinProfile, githubProfile}) => {
	return `
		<h1>${name}</h1>
		<img class="project-preview-img" src="${previewImageLink}">
		<p class="project-description">${description}</p>
		<a href="#" class="project-button">View Animation</a>
		<p class="author-name"><strong>Author:</strong> ${author}</p>
		${(facebookProfile || linkedinProfile || githubProfile) ? `
			<div class="social-media">
				<strong>Get connected with author</strong>
				<br>
				${facebookProfile ? `<a target="_blank" href="${facebookProfile}"><img class="social-media-icon" src="assets/images/icons/facebook.svg"></a>` : ''}
				${linkedinProfile ? `<a target="_blank" href="${linkedinProfile}"><img class="social-media-icon" src="assets/images/icons/linkedin.svg"></a>` : ''}
				${githubProfile ? `<a target="_blank" href="${githubProfile}"><img class="social-media-icon" src="assets/images/icons/github.svg"></a>` : ''}
				</div>
			` : ''}
	`
}

const awesomeGallery = document.getElementById('awesome-gallery');
contributors.forEach(contributor=> {
	const projectElem = document.createElement('div');
	projectElem.classList.add("project");
	projectElem.innerHTML = createProjectDiv(contributor).trim();
	awesomeGallery.appendChild(projectElem);
});
