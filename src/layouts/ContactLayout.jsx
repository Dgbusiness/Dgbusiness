import {useState} from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Divider, FormControl, TextField } from "@mui/material";
import Title from '../components/Title.jsx'
import { useFormik } from 'formik';
import { withStyles } from '@mui/styles';
import * as Yup from 'yup';

const ContactLayout = () => {

    const StyledTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: 'white',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#a80c06',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'white',
                },
                '&:hover fieldset': {
                    borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#a80c06',
                },
            },
        },
    })(TextField);

    /*Initial values (Formik)*/
    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    /*Validation schema with Yup (Formik)*/
    const validationSchema = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
    })

    /*onSubmit function (Formik)*/
    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
    } 

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <Box 
            id='contact' 
            display='flex'
            sx={{
                bgcolor: 'gray',
                height: 'auto',
                minHeight: { xs: "100vh", sm: "110vh", md: "70vh" },
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                textAlign: 'center',
                py: 5
            }}>
            <Title title='Contact me' subtitle='I am available for full time, part time and freelance work. Connect with me via email: dgbusiness26@gmail.com'/>
            <form onSubmit={formik.handleSubmit}>
                <StyledTextField
                    required
                    label="Name"
                    placeholder="Your name"
                    size='small'
                    margin='normal'
                    onChange={formik.handleChange}
                    sx={{
                        width:'49%',
                        mr: '2%',
                    }}
                    InputLabelProps={{ shrink: true }}
                />
                {formik.errors.name && formik.touched.name && formik.errors.name}
                <StyledTextField
                    required
                    label="Email"
                    placeholder="Your email"
                    size='small'
                    margin='normal'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    sx={{
                        width:'49%',
                    }}
                    InputLabelProps={{ shrink: true }}
                />
                {formik.errors.email && formik.touched.email && formik.errors.email}
                <StyledTextField
                    required
                    label="Subject"
                    placeholder="Write a subject"
                    size='small'
                    margin='normal'
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    InputLabelProps={{ shrink: true }}
                />
                {formik.errors.subject && formik.touched.subject && formik.errors.subject}
                <StyledTextField
                    required
                    label="Message"
                    placeholder="Your message here"
                    fullWidth
                    multiline
                    rows={5}
                    margin='normal'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    InputLabelProps={{ shrink: true }}
                />
                {formik.errors.message && formik.touched.message && formik.errors.message}
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </Box>   
    )
}
export default ContactLayout
