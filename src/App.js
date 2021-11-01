import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Container from './components/Container';
import Section from './components/Section';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const handleSubmit = () => {};

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Initial deposit" />
            <Input name="contribution" label="Anual contribution" />
            <Input name="years" label="Years" />
            <Input name="rate" label="Interest rate" />
            <Button>Calculate</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
