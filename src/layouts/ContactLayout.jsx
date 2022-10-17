import {useState} from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Divider, FormControl, TextField } from "@mui/material";
import Title from '../components/Title.jsx'
import { Formik } from 'formik';


const ContactLayout = () => {

    return (
        <Box 
            id='contact' 
            display='flex'
            sx={{
                bgcolor: 'gray',
                height: 'auto',
                minHeight: { xs: "100vh", sm: "110vh", md: "auto" },
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                textAlign: 'center',
                py: 5
            }}>
            <Title title='Contact'/>
            <Formik
                initialValues={{ name: '', subject: '', email: '', message: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                }) => (
                    <FormControl onSubmit={handleSubmit}>
                        <TextField
                            width='50%'
                            required
                            label="Name"
                            placeholder="Your name"
                            size='small'
                            margin='normal'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <TextField
                            required
                            label="Email"
                            placeholder="Your email"
                            size='small'
                            type='email'
                            margin='normal'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <TextField
                            required
                            label="Subject"
                            placeholder="Write a subject"
                            size='small'
                            margin='normal'
                            fullWidth
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.subject}
                        />
                        {errors.subject && touched.subject && errors.subject}
                        <TextField
                            required
                            label="Message"
                            placeholder="Your message here"
                            fullWidth
                            multiline
                            rows={5}
                            margin='normal'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                        />
                        {errors.message && touched.message && errors.message}
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </FormControl>
                )}
            </Formik>
        </Box>   
    )
}
export default ContactLayout
