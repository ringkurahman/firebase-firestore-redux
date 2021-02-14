import React, { Component } from 'react'
import { Form, Container, Button, Alert, Row, Col } from "react-bootstrap"
import { Formik } from 'formik'
import * as Yup from 'yup'

import { connect } from 'react-redux'
import { registerUser, loginUser } from '../Store/actions/authActions'

import { toast } from "react-toastify"
toast.configure()



class Login extends Component {
  state = {
    loading: false,
    login: true,
  }

  // Formik form and yup validation
  formikProps = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Sorry the email is required"),

      password: Yup.string()
        .min(3, "Must be more than 5 char")
        .required("Sorry the password is required"),
    }),
    onSubmit: (values) => {
      if (!this.state.login) {
        // Register
        this.props.dispatch(registerUser(values))
      } else {
        // Login
        this.props.dispatch(loginUser(values))
        this.notify()
      }
      this.props.history.push("/dashboard")
    },
  }

  // Pop up message
  notify = () =>
    toast.success("Welcome", { position: "toast.POSITION.TOP_RIGHT" })

  // Switch submit button
  switchTypeHandler = () => {
    this.setState({
      login: !this.state.login,
    })
  }

  render() {
    const { login } = this.state

    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Formik {...this.formikProps}>
              {(formik) => (
                <Form className="mt-5" onSubmit={formik.handleSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Login</h1>

                  {!login && (
                    <Form.Group>
                      <Form.Label>Enter Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        id="username"
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                      />
                      {formik.touched.username && formik.errors.username ? (
                        <Alert variant="danger">{formik.errors.username}</Alert>
                      ) : null}
                    </Form.Group>
                  )}

                  <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <Alert variant="danger">{formik.errors.email}</Alert>
                    ) : null}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <Alert variant="danger">{formik.errors.password}</Alert>
                    ) : null}
                  </Form.Group>

                  {login ? (
                    <Button variant="primary" type="submit">
                      Sign in
                    </Button>
                  ) : (
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  )}
                  <Button
                    variant="secondary"
                    className="ml-2"
                    onClick={this.switchTypeHandler}
                  >
                    Already {login ? "Signed in" : "Registered"} ? click here
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    )
  }
}


// Get reducer state from store
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Login)
