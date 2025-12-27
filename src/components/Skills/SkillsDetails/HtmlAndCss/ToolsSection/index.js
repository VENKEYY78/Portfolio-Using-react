import "./index.css";

const ToolsSection = () => (
  <>
    <div class="pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <img
              src="https://assets.ccbp.in/frontend/responsive-website/features-1-img.png"
              class="w-100"
            />
          </div>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-md-center">
            <h1 class="heading mt-3 mb-3">A visual drag and drop editor</h1>
            <p class="para">
              We see design visually, therefore it makes sense to produce design
              in a visual way. Yet you can always access the code if needed. Use
              a drag and drop editor with the ability to see web fonts. With
              drag and drop, you can rearrange the structure and elements of
              your layout.
            </p>
          </div>

          <div class="col-12 col-md-6 order-md-2 mb-4 mt-4">
            <img
              src="https://assets.ccbp.in/frontend/responsive-website/features-2-img.png"
              class="w-100"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-1 d-flex flex-column justify-content-md-center">
            <h1 class="heading mt-3 mb-3">Animations & Effects</h1>
            <p class="para">
              Add Behavior animations to create simple elements loading
              animations and spice up your design. You can choose from the ones
              we have or use your own code. An animation effects is a special
              visual or sound effect added to a text or an object on a slide or
              chart.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ToolsSection;
