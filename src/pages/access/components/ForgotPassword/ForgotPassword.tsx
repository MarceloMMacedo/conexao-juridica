import React from 'react';
import { Button, Form, Input } from 'antd';
import { validateMessages } from '../../../../types/ValidateMessages';

export interface ForgotPasswordProps {
  prop?: string;
}

export function ForgotPassword({ prop = 'default value' }: ForgotPasswordProps) {

  const [form] = Form.useForm();


  type FieldType = {
    email?: string;
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="auth-page-wrapper pt-5">
        <div className="auth-one-bg-position " id="auth-particles">
          <div className="bg-overlay" />
          <div className="shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1440 120"
            >
              <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
            </svg>
          </div>
        </div>
        <div className="auth-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center mt-sm-5 mb-0 text-white-50">
                  <div>
                    <a href="index.html" className="d-inline-block auth-logo">

                      <h1 className="text-white ">Conexão-Jurídica</h1>
                    </a>
                  </div>
                  <p className="mt-3 fs-15 fw-medium">
                  </p>
                </div>
              </div>
            </div>


            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4">

                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Esqueceu a senha?</h5>
                      <p className="text-muted">Redefinir senha com a Conecxão-Jurídica</p>


                    </div>

                    <div className="alert border-0 alert-warning text-center mb-2 mx-2" role="alert">
                      Digite seu e-mail e instruções serão enviadas para você!
                    </div>
                    <div className="p-2">
                      <Form
                        form={form}
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        validateMessages={validateMessages}
                      >
                        <Form.Item<FieldType>
                          label="Email" htmlFor="email" className="form-label"
                          name="email"
                          rules={[{ required: true, message: 'Entre com seu email!' }, { type: 'email', warningOnly: true },]}
                        >
                          <Input type="text"
                            className="form-control"
                            id="email"
                            placeholder="Entre com o email" />

                        </Form.Item>
                        <Form.Item  >
                          <Button type="primary" htmlType="submit"
                            className=" w-100 btn-pill btn-primary  "
                            disabled={
                              !form.isFieldsTouched(true) ||
                              !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                            id="password-addon">
                            Entrar
                          </Button>
                        </Form.Item>
                      </Form>
                      <div className="float-end">
                        <a href="auth-pass-reset-basic.html" className="text-muted">
                          Retornar ao acesso?
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}
              </div>
            </div>
          </div>
          {/* end container */}
        </div>
      </div>

    </>
  );


}
