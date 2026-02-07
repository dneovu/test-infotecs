import React, { useEffect } from 'react';
import { Button, Form, Input, Modal, Space } from 'antd';
import { User } from '../../../entities/user';
import { useCreateUser } from '../model/useCreateUser';
import { useUpdateUser } from '../model/useUpdateUser';
import { useDeleteUser } from '../model/useDeleteUser';

type Props = {
  open: boolean;
  user: User | null;
  onCancel: () => void;
};

export const UserModal = ({ open, user, onCancel }: Props) => {
  const [form] = Form.useForm();
  const isEdit = Boolean(user);

  const createMutation = useCreateUser();
  const updateMutation = useUpdateUser();
  const deleteMutation = useDeleteUser();

  const isLoading =
    createMutation.isPending ||
    updateMutation.isPending ||
    deleteMutation.isPending;

  useEffect(() => {
    if (open) {
      if (user) {
        form.setFieldsValue(user);
      } else {
        form.resetFields();
      }
    }
  }, [open, user, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      if (isEdit) {
        updateMutation.mutate(
          { id: user?.id, ...values },
          { onSuccess: onCancel },
        );
      } else {
        createMutation.mutate(values, { onSuccess: onCancel });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      open={open}
      title={isEdit ? 'Редактирование пользователя' : 'Создание пользователя'}
      onOk={handleOk}
      footer={null}
      onCancel={onCancel}
      confirmLoading={isLoading}
      maskClosable={!isLoading}
      closable={!isLoading}
    >
      <Form form={form} layout="vertical" requiredMark={false}>
        {isEdit && (
          <Form.Item
            label="id"
            name="id"
            style={{ marginBottom: 12 }}
            labelCol={{ style: { marginBottom: 4 } }}
          >
            <Input disabled />
          </Form.Item>
        )}

        <Form.Item
          style={{ marginBottom: 12 }}
          labelCol={{ style: { marginBottom: 1 } }}
          label="Имя"
          name="name"
          rules={[{ required: true, message: 'Введите имя' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          labelCol={{ style: { marginBottom: 4 } }}
          label="Ссылка на аватарку"
          name="avatar"
          rules={[
            { required: true, message: 'Введите ссылку' },
            { type: 'url', message: 'Некорректная ссылка' },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 24,
        }}
      >
        {user ? (
          <Button
            type="primary"
            onClick={() =>
              deleteMutation.mutate(user.id, {
                onSuccess: onCancel,
              })
            }
            disabled={isLoading}
          >
            Удалить
          </Button>
        ) : (
          <div />
        )}

        <Space>
          <Button type="primary" onClick={handleOk} loading={isLoading}>
            {isEdit ? 'Сохранить' : 'Создать'}
          </Button>
          <Button type="primary" onClick={onCancel} disabled={isLoading}>
            Отмена
          </Button>
        </Space>
      </div>
    </Modal>
  );
};
