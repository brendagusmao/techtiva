import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, Select, Space,  AutoComplete } from 'antd';
const { TextArea } = Input;

const Forms = () => {
    const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    let res = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
        value,
        label: `${value}@${domain}`,
      }));
    }
    setOptions(res);
  };
    const { Option } = Select;
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  const onChangeTextArea = (e) => {
    console.log('Change:', e.target.value);
  };
 
  return (
  <>
 <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{
      span: 0,
    }}
    wrapperCol={{
      span: 100,
    }}
    style={{
      marginTop: '30px',
      maxWidth: 600,
    }}
  >
    <Form.Item label="Name">
      <Space>
        <Form.Item
          name="Name"
          noStyle
          rules={[
            {
              required: true,
              message: 'Por favor preencha com seu nome Completo',
            },
          ]}
        >
          <Input
            // style={{
            //   width: 400,
            // }}
            placeholder="Seu nome Completo"
            className='inputname'
          />
        </Form.Item>
        {/* <Tooltip title="Useful information">
          <Typography.Link href="#API">Need Help?</Typography.Link>
        </Tooltip> */}
      </Space>
    </Form.Item>
    <Form.Item
      label="Telefone"
      style={{
        marginBottom: 0,
      }}
    >
      <Form.Item
        name="DD"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
        }}
        className='inputddd'
      >
        <Input placeholder="(00)" />
      </Form.Item>
      <Form.Item
        name="telefone"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          margin: '0 8px',
        }}
        className='inputphone'
      >
        <Input placeholder="9 9999-9999" />
      </Form.Item>
    </Form.Item>
    <Form.Item label="E-mail">
      <Space.Compact>
        <Form.Item
          name={['e-mail']}
          className='inputemail'
          rules={[
            {
              required: true,
              message: 'Preencha com seu e-mail',
            },
          ]}
        >
        <AutoComplete
        style={{width: '100%',}}
        onSearch={handleSearch}
        placeholder="Seu e-mail"
        options={options}
        />
        </Form.Item>
        <Form.Item
          name={['basic', 'medium']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Selecione o seu plano',
            },
          ]}
        >
          <Select placeholder="Plano">
            <Option value="Zhejiang">Basic</Option>
            <Option value="Jiangsu">Medim</Option>
          </Select>
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item>
    <TextArea
      showCount
      maxLength={100}
      style={{
        height: '150px',
        resize: 'none',
      }}
      onChange={onChangeTextArea}
      placeholder="Escreva algo aqui"
    />
    </Form.Item>
    <Form.Item label=" " colon={false}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </>
);
};

export default Forms;