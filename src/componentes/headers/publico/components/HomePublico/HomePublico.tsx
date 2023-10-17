
import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';


export interface HomePublicoProps {
  prop?: string;
}

export function HomePublico({ prop = 'default value' }: HomePublicoProps) {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <>
      {/* start hero section */}
      <section className="section job-hero-section bg-light pb-3" id="hero">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div>
                <h1 className="text-capitalize mb-3 lh-">Bem-vindo à Conexão Jurídica</h1>
                <p className="lead text-  lh- mb-4">Soluções Jurídicas Flexíveis com Especialistas Independentes</p>
                <p className="lead text-  lh- mb-4">Descubra uma nova abordagem para suas necessidades legais. Nossa plataforma conecta você a advogados freelancers altamente qualificados, prontos para oferecer assistência especializada em diversas áreas do direito.</p>

                <form action="#" className=" ">
                  <div className="row   ">

                    <div className="col-md-4">
                      <div className=" ">
                        <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[2]} onClick={() => enterLoading(2)}>
                          Comece Aqui!
                        </Button>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </form>

              </div>
            </div>
            {/*end col className = "col-lg-4"*/}
            <div className="col-lg-4">
              <div className="position-relative home-img text-center mt-5 mt-lg-0">

                <div id="responsive-image" >
                  <img src="assets/images/job-profile2.png" className="user-img" />
                </div>
                {/* <div className="circle-effect">
                  <div className="circle" />
                  <div className="circle2" />
                  <div className="circle3" />
                  <div className="circle4" />
                </div> */}
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end hero section */}
    </>)
}
