import { Box,  Button, TextField } from "@mui/material";
import Title from '../components/Title.jsx'
import { useFormik } from 'formik';
import { withStyles } from '@mui/styles';
import * as yup from 'yup';

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


const ContactLayout = () => {

    /*Initial values (Formik)*/
    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    /*Validation schema with Yup (Formik)*/
    const validationSchema = yup.object({
        name: yup
        .string()
        .required('Required')
        .min(3, 'Name must be greater than 3 characters.')
        .max(15, 'Name must be lower than 15 characters.'),
        email: yup
        .string()
        .required('Required')
        .email('Invalid email address.'),
        subject: yup
        .string()
        .required('Required')
        .min(5, 'Subject must be greater than 5 characters.')
        .max(50, 'Subject must be lower than 50 characters.'),
        message: yup
        .string()
        .required('Required')
        .min(10, 'Message must be greater than 10 characters.')
        .max(1000, 'Message must be lower than 1000 characters.'),
    })

    /*onSubmit function (Formik)*/
    const onSubmit = values => {
        console.log('entro')
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
                    name='name'
                    label="Name"
                    placeholder="Your name"
                    size='small'
                    margin='normal'
                    autoComplete='off'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{
                        width:'49%',
                        mr: '2%',
                    }}
                />
                <StyledTextField
                    name='email'
                    label="Email"
                    type='email'
                    placeholder="Your email"
                    size='small'
                    margin='normal'
                    autoComplete='off'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{
                        width:'49%',
                    }}
                />
                <StyledTextField
                    name='subject'
                    label="Subject"
                    placeholder="Write a subject"
                    size='small'
                    margin='normal'
                    fullWidth
                    autoComplete='off'
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                    helperText={formik.touched.subject && formik.errors.subject}
                />
                <StyledTextField
                    name='message'
                    label="Message"
                    placeholder="Your message here"
                    fullWidth
                    multiline
                    rows={5}
                    margin='normal'
                    autoComplete='off'
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                />
                <Button
                    sx={{
                        borderRadius: 5,
                        backgroundColor: "#a80c06",
                        fontSize: "15px",
                        color: 'white',
                        '&:hover':{
                            bgcolor: 'rgba(120, 12, 6,1)'
                        }
                    }}
                    fullWidth 
                    type='submit' 
                    disabled={formik.isSubmitting}>
                    Submit
                </Button>
            </form>
        </Box>   
    )
}
export default ContactLayout
