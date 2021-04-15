import React from "react";
import featured from "../../../images/Featured.png";
import './Feature.css';

const FeaturedService = () => {
  return (
    <section className="features-service pb-0 pb-md-5 my-5">
      <div className="mb-5">
        <div className="row m-5 align-items-center">
          <div className="col-md-5 mb-4 m-md-0 text-center">
            <img style={{height: '800px'}} src={featured} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1 className="title">Exceptional Dental <br/> Care, on your Term</h1>
            <p className="text-secondary my-5 features-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              eligendi amet accusantium dolores obcaecati veritatis
              necessitatibus vel praesentium, sit vitae autem vero minima nulla
              culpa eos distinctio incidunt quae debitis adipisci recusandae
              nesciunt, velit eveniet, voluptatem excepturi. Nulla, magnam
              officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore tempore culpa delectus dolorum facilis aut. Magnam
              aperiam exercitationem ipsum. Iste, cupiditate. Voluptates aliquid
              ea repellendus a dicta debitis, iure voluptatem natus, illo magni
              impedit provident? Rem unde assumenda quos quia optio maxime
              blanditiis neque delectus quisquam qui? Provident non illo aliquid
              labore rerum ipsam repellendus voluptate. Eos harum tenetur eius
              eveniet quae culpa hic necessitatibus recusandae, sint laborum
              velit vitae illum reiciendis quibusdam modi aliquam voluptas
              perspiciatis laudantium tempore dolore? Dignissimos cum commodi
              tempora vel, ab repudiandae ipsa vero. Mollitia, magni illum.
              Animi excepturi expedita ipsam deserunt nesciunt vero rerum eum.
              Ut veritatis velit libero nam optio expedita iste magnam quo cum,
              nostrum.
            </p>
            <button className="btn btn-brand button">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
