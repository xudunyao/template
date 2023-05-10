import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Popconfirm, Card } from 'antd';
import { inputType, Search, Table } from '@/components';

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
];

const generateColumns = ({
  onEdit,
  onDelete,
}) => [
  { title: 'Column1', dataIndex: 'column1', key: 'column1' },
  { title: 'Column2', dataIndex: 'column2', key: 'column2' },
  {
    title: 'Operation',
    dataIndex: 'column2',
    key: 'column2',
    render: (text, record, index) => (
      <>
        <Button type="link" onClick={() => onEdit(record)}>编辑</Button>
        <Popconfirm title="确认删除吗？" okText="确定" cancelText="再想想" onConfirm={() => onDelete(record)}>
          <Button type="link">删除</Button>
        </Popconfirm>
      </>
    ),
  },
];

const mockData = [
  {
    column1: 'Row1-column1',
    column2: 'Row1-column2',
  },
  {
    column1: 'Row2-column1',
    column2: 'Row2-column2',
  },
];

const ExamplePage2 = () => {
  const [searchCriteria, setSearchCriteria] = useState({ pageSize: 10, pageNumber: 0 });
  const search = { ...searchCriteria, total: 0 };

  const handleEdit = (record) => {
    console.log('handleEdit', record);
  };
  const handleDelete = (record) => {
    console.log('handleDelete', record);
  };
  const columns = generateColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  const handleSearch = (searchParams) => {
    setSearchCriteria({
      ...searchCriteria,
      ...searchParams,
      timestamp: new Date().getTime(),
    });
  };
  const handleTableChange = (params) => {
    setSearchCriteria({ ...searchCriteria, ...params, pageNumber: params.current - 1 });
  };

  return (
    <Card>
      <Search
        onSubmit={handleSearch}
        fields={fields}
      />
      <Table
        columns={columns}
        dataSource={mockData}
        pagination={searchCriteria}
        onChange={handleTableChange}
      />
    </Card>
  );
};

export default observer(ExamplePage2);
