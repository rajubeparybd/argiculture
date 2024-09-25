// src/components/Marketplace/CreatePostModal.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  width: 100%;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
  resize: none;
`;

const Select = styled.select`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  background-color: ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.darkGray)};
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${({ primary, theme }) => (primary ? theme.colors.primaryDark : theme.colors.secondary)};
  }
`;

function CreatePostModal({ showModal, setShowModal, addPost }) {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    image: '',
    name: '',
    description: '',
    contactNumber: '',
    price: '',
    unit: '',
    isUser: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    // For demo purposes, we'll use a placeholder image
    if (e.target.files[0]) {
      setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({
      id: uuidv4(),
      image: '',
      name: '',
      description: '',
      contactNumber: '',
      price: '',
      unit: '',
      isUser: true,
    });
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <ModalBackground>
      <ModalContent>
        <ModalTitle>Create Post</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label>Crop Image</Label>
            <Input type="file" name="image" accept="image/*" onChange={handleImageChange} required />
          </FormField>
          <FormField>
            <Label>Crop Name</Label>
            <Input type="text" name="name" placeholder="Crop Name" onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>Description</Label>
            <Textarea name="description" placeholder="Description" onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>Contact Number</Label>
            <Input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>Price</Label>
            <Input type="number" name="price" placeholder="Price" onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>Unit</Label>
            <Select name="unit" onChange={handleChange} required>
              <option value="">Select Unit</option>
              <option value="kg">kg</option>
              <option value="ton">ton</option>
              <option value="piece">piece</option>
            </Select>
          </FormField>
          <ButtonGroup>
            <ModalButton type="button" onClick={() => setShowModal(false)}>
              Cancel
            </ModalButton>
            <ModalButton type="submit" primary>
              Post
            </ModalButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalBackground>
  );
}

export default CreatePostModal;
