import { Button, Form, Input, InputNumber, Space } from 'antd';
import { validateMessages } from '../../../../types/ValidateMessages';

export interface AuthTwostepProps {
  prop?: string;
}

export function AuthTwostep({ prop = 'default value' }: AuthTwostepProps) {
  const [form] = Form.useForm();
  type FieldType = {
    digito1?: number;
    digito2?: number;
    digito3?: number;
    digito4?: number;
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
                      <h5 className="text-primary">Verifique seu Email</h5>


                    </div>

                    <div className="alert border-0 alert-warning text-center mb-2 mx-2" role="alert">
                      Por favor, insira o código de 4 dígitos enviado para seu email cadastrado
                    </div>
                    <div className="p-2">
                      <Form
                        form={form}
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                      >
                        <Space wrap>
                          <Form.Item<FieldType>
                            name="digito1"
                            rules={[{ type: 'number', min: 0, max: 9 }]}
                          >
                            <InputNumber max={9} min={0} style={{ width: 60 }} />

                          </Form.Item>
                          <Form.Item<FieldType>
                            name="digito2"
                            rules={[{ type: 'number', min: 0, max: 9 }]}
                          >
                            <InputNumber max={9} min={0} style={{ width: 60 }} />

                          </Form.Item>

                          <Form.Item<FieldType>
                            name="digito3"
                            rules={[{ type: 'number', min: 0, max: 9 }]}
                          >
                            <InputNumber max={9} min={0} style={{ width: 60 }} />

                          </Form.Item>

                          <Form.Item<FieldType>
                            name="digito4"
                            rules={[{ type: 'number', min: 0, max: 9 }]}
                          >
                            <InputNumber max={9} min={0} style={{ width: 60 }} />

                          </Form.Item>
                        </Space>

                        <Form.Item shouldUpdate>
                          {() => (
                            <Button
                              type="primary" htmlType="submit"
                              className=" w-100 btn-pill btn-primary  "
                              id="password-addon"
                              disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                              }
                            >
                              Verificar
                            </Button>
                          )}
                        </Form.Item>


                      </Form>
                      <div className="float-end">

                        <p className="mb-0">Não recebeu um código?
                          <a href="auth-pass-reset-basic.html" className="fw-semibold text-primary text-decoration-underline">{'  '}Reenviar</a> </p>
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

