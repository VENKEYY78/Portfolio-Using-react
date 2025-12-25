import "./index.css";

const FoundationsPage = () => (
  <div class="foundations-bg-img d-flex flex-column justify-content-end">
    <div class="Foundations-bottom-bg-container">
      <div>
        <h1 class="foundations-heading-card">Foundations</h1>
        <p class="foundations-paragraph-card">
          Learn courses that will help you move forward in your career
        </p>
      </div>

      <div class="d-flex flex-row">
        <div class="python-bottom-card">
          <img
            src="https://assets.ccbp.in/frontend/static-website/foundations-python-img.png"
            class="foundations-python-img"
          />
          <h1 class="python-heading-card">Python</h1>
        </div>

        <div class="python-bottom-card">
          <img
            src="https://assets.ccbp.in/frontend/static-website/foundations-javascript-img.png"
            class="foundations-python-img"
          />
          <h1 class="python-heading-card">Javascript</h1>
        </div>
      </div>

      <div class="d-flex flex-row mt-4">
        <div class="python-bottom-card">
          <img
            src="https://assets.ccbp.in/frontend/static-website/foundations-html5-img.png"
            class="foundations-python-img"
          />
          <h1 class="python-heading-card">HTML5</h1>
        </div>

        <div class="python-bottom-card">
          <img
            src="https://assets.ccbp.in/frontend/static-website/foundations-java-img.png"
            class="foundations-python-img"
          />
          <h1 class="python-heading-card">Jva</h1>
        </div>
      </div>
    </div>
  </div>
);

export default FoundationsPage;
