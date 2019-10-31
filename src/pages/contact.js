import React from 'react';
import Layout from '../components/layout';
import styled from '@emotion/styled';

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;

  label,
  input,
  textarea,
  button {
    font-family: 'Roboto Slab';
  }

  label > input {
    display: block;
    font-size: 1.25rem;
    margin: 1em 0;
    padding: 1rem;
  }

  textarea {
    display: block;
    width: 100%;
    min-height: 200px;
    padding: 1.25rem;
  }

  button {
    font-size: 2rem;
  }
`;

const ContactPage = () => (
  <Layout>
    <h1>Send Me a Message!</h1>
    <StyledForm name="contact" netlify>
      <p>
        <label>
          Name <input type="text" name="name" required />
        </label>
      </p>
      <p>
        <label>
          Email <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <textarea name="message" required />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </StyledForm>
  </Layout>
);

export default ContactPage;
