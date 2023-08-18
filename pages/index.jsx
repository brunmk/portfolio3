import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>

      <main>

        <div className="b-example-divider"></div>

        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="brunmk/mockup-pine.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={700}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
              Banco Pine
              </h1>
              <p className="lead">
              Agile business bank, with skills to develop profitable and long-term relationships. 
              <br />
              Responsive site developed using Bootstrap, the world most popular front-end open source toolkit, responsive grid system, styling with Sass, and powerful JavaScript plugins. 

              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="https://ri.pine.com/Default.aspx?linguagem=en" target="_blank"
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Live
                </a>
                <a href="/" target="_blank"
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="b-example-divider"></div>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Patrimar
              </h1>
              <p className="lead">
              Patrimar Group is among the country largest construction companies.
              <br />
              Responsive site developed using Bootstrap, the world most popular front-end open source toolkit, responsive grid system, styling with Sass, and powerful JavaScript plugins. 

              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="https://ri.patrimar.com.br/default.aspx?linguagem=en" target="_blank"
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Live
                </a>
                <a href="/" target="_blank"
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="brunmk/mockup-patrimar.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={700}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="b-example-divider"></div>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="brunmk/mockup-habita.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={700}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Habitat Capital Partners
              </h1>
              <p className="lead">
              
It is an asset manager authorized by the CVM that focuses exclusively on the Real Estate Funds market, with R$555 million currently under management.
              <br />
              Responsive site developed using Bootstrap, the world most popular front-end open source toolkit, responsive grid system, styling with Sass, and powerful JavaScript plugins. 

                
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="https://habt11.habitatcp.com.br/" target="_blank"
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Live
                </a>
                <a href="/" target="_blank"
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="b-example-divider"></div>

        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1">
                Border hero with cropped image and shadows
              </h1>
              <p className="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world most popular front-end open source toolkit,
                featuring Sass variables and mixins, responsive grid system,
                extensive prebuilt components, and powerful JavaScript plugins.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Default
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="/bootstrap-docs.png"
                alt=""
                height={500}
                width={720}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
