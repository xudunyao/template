import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';

import { Button, TextInput, Radio, Card } from '@/components';

import styles from '../styles';

const Form = () => {
  const [amount, setAmount] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    values: {
      text: '',
      radio: '',
    },
    errors: {
      text: 'Text is mandatory',
      radio: '',
    },
  });

  const setFormValue = (fieldName, value) => {
    setForm({
      values: {
        ...form.values,
        [fieldName]: value,
      },
      errors: {
        ...form.errors,
        [fieldName]: '',
      },
    });
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      Toast.show({
        type: 'success',
        text1: 'Submit successfully',
      });
    }, 1000);
  };

  return (
    <Card title="Form" customStyles={{ marginTop: 10 }}>
      <Text style={{ marginTop: 10 }}>文本输入框</Text>
      <TextInput
        placeholder="Please input"
        error={form.errors.text}
        value={form.values.text}
        onSubmitEditing={value => setFormValue('text', value)}
        onChangeText={value => setFormValue('text', value)}
        // onBlur={value => handleFormFieldBlur(name, value, label)}
        maxLength={20}
        clearable
      />
      <Text style={{ marginTop: 10 }}>格式化输入框（金额）</Text>
      <NumberFormat
        value={amount}
        displayType={'text'}
        thousandSeparator={true}
        decimalScale={2}
        decimalSeparator="."
        allowedDecimalSeparators={['.']}
        renderText={value => {
          if (amount.endsWith('.') && !value.includes('.')) {
            value = value + '.';
          }
          if (!amount.endsWith('.') && value.endsWith('.')) {
            value = value.slice(0, -1);
          }
          return (
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              onChangeText={setAmount}
              value={value}
              keyboardType="numeric"
              placeholder="Please input"
            />
          );
        }}
      />
      <Radio
        title="Check the radio"
        checked={form.values.radio}
        error={form.errors.radio}
        onChange={checked => setFormValue('radio', checked)}
      />
      <Button title="Submit" loading={submitting} onPress={handleSubmit} />
    </Card>
  );
};

export default Form;
