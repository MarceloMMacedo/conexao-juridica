import { Button, Form, Input, InputNumber, Space } from 'antd';
import { validateMessages } from '../../../../types/ValidateMessages';

export interface AuthPassChangeProps {
  prop?: string;
}

export function AuthPassChange({ prop = 'default value' }: AuthPassChangeProps) {

  const [form] = Form.useForm();

  type FieldType = {
    password?: string;
    confirm?: string;
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

                      {/* <img src="assets/images/logo-ligth.png" alt="" height={60} /> */}
                    </a>
                  </div>
                  <p className="mt-3 fs-15 fw-medium">
                  </p>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Criar nova senha</h5>
                      <p className="text-muted">Sua nova senha deve ser diferente da senha usada anteriormente.</p>
                    </div>
                    <div className="p-2 mt-4">

                      <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                      >
                        <Form.Item
                          name="password"
                          label="Password"
                          rules={[
                            {
                              required: true,
                              message: 'Por favor insira sua senha!',
                            },
                          ]}
                          hasFeedback
                        >
                          <Input.Password />
                        </Form.Item>

                        <Form.Item
                          name="confirm"
                          label="Confirm Password"
                          dependencies={['password']}
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: 'Por favor confirme sua senha!',
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error('A nova senha que você digitou não corresponde!'));
                              },
                            }),
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>
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
                              Atualizar
                            </Button>
                          )}
                        </Form.Item>
                      </Form>

                      <div className="float-end">
                        <a href="auth-pass-reset-basic.html" className="text-muted">
                          Retornar ao login
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}

              </div>
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>

      </div>

    </>
  );
}
