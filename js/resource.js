const resourceContainer = document.getElementById("resourceContainer");

async function loadResources() {

    try {

        const response = await fetch(`${BASE_URL}/resources`);

        const result = await response.json();

        const resources = result.data;

        if(resources.length === 0){

            resourceContainer.innerHTML = `
                <h3>No Resources Available</h3>
            `;

            return;
        }

        resourceContainer.innerHTML = "";

        resources.forEach(resource => {

            resourceContainer.innerHTML += `

            <article class="featured-card">

                <div class="featured-icon">
                    📚
                </div>

                <div class="featured-content">

                    <h3>${resource.title}</h3>

                    <p>${resource.description}</p>

                    <div class="featured-meta">

                        ${resource.category} • ${resource.type}

                    </div>

                    <a href="${resource.resourceLink}" target="_blank">

                        Open Resource →

                    </a>

                </div>

            </article>

            `;

        });

    }

    catch(error){

        console.error(error);

        resourceContainer.innerHTML =
        "<h3>Unable to load resources.</h3>";

    }

}

loadResources();