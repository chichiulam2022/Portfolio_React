import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import astronaut from '../assets/images/astronaut.png'
import '../styles/Contactme.css'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from "yup";

function Contactme() {
  const {t} = useTranslation(['contactme'])

  //Formik Logics
  const formik = useFormik ({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: ''
    },
    
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(20, "Name must be 20 characters")
        .required("Name is required"),
      last_name: Yup.string()
        .max(20, "Name must be 20 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
    }),

    // onSubmit: (values) => {
    //   console.log("form submitted");
    //   console.log(values);
    //   // router.push({ pathname: "/success", query: values });
    // },
  });

  console.log(formik.errors);

  return (
    <section className="contact px-4" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={astronaut} alt="Contact Me"/>
          </Col>

          <Col size={12} md={6}>
                <div>
                <h3>{t('contact_me')}</h3>
                <form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" 
                      placeholder={t('first_name')} 
                      id='first_name'
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <input type="text" 
                      placeholder={t('last_name')}
                      id='last_name'
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <input type="email" 
                      placeholder={t('email')} 
                      id='email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" 
                      placeholder={t('phone')}
                      value={formik.values.phone}
                      id='phone'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                    </Col>

                    <Col size={12} className="px-1">
                      <textarea rows="6" 
                      placeholder={t('message')}
                      id='message'
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      >
                      </textarea>

                      <button type="submit">{t('submit')}</button>
                    </Col>

                 

                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contactme
