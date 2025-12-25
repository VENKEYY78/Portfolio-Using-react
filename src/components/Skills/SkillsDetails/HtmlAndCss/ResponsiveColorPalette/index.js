import "./index.css";

const ResponsiveColorPalette = () => (
  <>
    <h1 class="card-heading">Responsive Color Palette</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6 col-lg-7 col-xl-3">
          <p class="responsive-website bg-primary">Primary</p>
        </div>

        <div class="col-12 col-sm-4 col-md-6 col-lg-2 col-xl-5">
          <p class="responsive-website bg-secondary">Secondary</p>
        </div>

        <div class="col-12 col-sm-4 col-md-2 col-lg-3 col-xl-2">
          <p class="responsive-website bg-success">Success</p>
        </div>

        <div class="col-12 col-sm-8 col-md-10 col-lg-2 col-xl-2">
          <p class="responsive-website bg-info">Info</p>
        </div>

        <div class="col-12 col-sm-6 col-md-10 col-lg-8 col-xl-5">
          <p class="responsive-website bg-warning">Warning</p>
        </div>

        <div class="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-7">
          <p class="responsive-website bg-danger">Danger</p>
        </div>
      </div>
    </div>
  </>
);

export default ResponsiveColorPalette;
