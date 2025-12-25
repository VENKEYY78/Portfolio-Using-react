import "./index.css";

const ResponsiveBoxes = () => (
  <>
    <h1 class="text-center">Responsive Boxes</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-2 col-lg-3 col-xl-1 mb-3">
          <div class=" boxe-1 bg-primary">
            <p>1</p>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-10 col-lg-2 col-xl-4 mb-3">
          <div class=" boxe-1 bg-primary">
            <p>2</p>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-10 col-lg-7 col-xl-6 mb-3">
          <div class=" boxe-1 bg-primary">
            <p>3</p>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-2 col-lg-7 col-xl-1 mb-3">
          <div class=" boxe-1 bg-primary">
            <p>4</p>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-7 mb-3">
          <div class=" boxe-1 bg-primary">
            <p>5</p>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-8 col-lg-2 col-xl-3">
          <div class=" boxe-1 bg-primary">
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ResponsiveBoxes;
