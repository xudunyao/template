import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Button, Card, Space } from 'antd';
import { FormItem, inputType } from '@/components';

const fields = [
  {
    label: 'Input',
    name: 'input',
    type: inputType.input,
    rules: [{ required: true }],
    inputProps: {
      placeholder: 'Please Input',
    },
  },
  {
    name: 'inputNumber',
    type: inputType.inputNumber,
    label: 'Input Number',
    rules: [{ required: true }],
    inputProps: { placeholder: 'Please Input' },
  },
  {
    name: 'testArea',
    type: inputType.inputTextArea,
    label: 'Text Area',
    rules: [{ required: true }],
    inputProps: { placeholder: 'Please Input' },
  },
  {
    label: 'Select',
    name: 'select',
    type: inputType.select,
    rules: [{ required: true }],
    inputProps: {
      placeholder: 'Please Select',
      options: [{ label: 'option1', value: 'option1 ' }],
    },
  },
  {
    name: 'radioGroup',
    type: inputType.radioGroup,
    label: 'Radio Group',
    rules: [{ required: true }],
    inputProps: {
      options: [
        { label: 'option1', value: 'option1 ' },
        { label: 'option2', value: 'option2 ' },
      ],
    },
  },
  {
    name: 'checkboxGroup',
    label: 'Checkbox Group',
    type: inputType.checkboxGroup,
    inputProps: {
      options: [
        { label: 'option1', value: 'option1 ' },
        { label: 'option2', value: 'option2 ' },
      ],
    },
    rules: [{ required: true }],
  },
  {
    name: 'datePicker',
    label: 'Date Picker',
    type: inputType.datePicker,
    inputProps: {
      placeholder: 'Please select',
    },
  },
];

const ExamplePage1 = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log({ values });
  };

  return (
    <Card>
      <Form
        form={form}
        onFinish={handleSubmit}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 9 }}
      >
        {
              fields.map((f) => (
                <FormItem
                  name={f.name}
                  label={f.label}
                  type={f.type}
                  inputProps={f.inputProps}
                  labelAlign="right"
                />
              ))
            }
        <Form.Item wrapperCol={{ offset: 3 }}>
          <Space size={20}>
            <Button
              onClick={() => {
                form.resetFields();
                form.submit();
              }}
            >
              取消
            </Button>
            <Button type="primary" htmlType="submit">提交</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default observer(ExamplePage1);
