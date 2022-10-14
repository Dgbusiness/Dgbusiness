import {useState} from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Divider } from "@mui/material";
import Title from '../components/Title.jsx'
import { projects } from '../utils/ProjectsList'

const ContactLayout = () => {

    const [hover, setHover] = useState(false)
    const [cardSelected, setCardSelected] = useState(null)

    const handleOnHover = (index) => {
        setCardSelected(index)
        setHover(true)
    }
    const handleOutHover = () => {
        setCardSelected(null)
        setHover(false)
    }

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

//    return (
        //<Box 
            //id='portfolio' 
            //display='flex'
            //sx={{
                //bgcolor: 'gray',
                //height: 'auto',
                //minHeight: { xs: "100vh", sm: "110vh", md: "80vh" },
                //color: 'white',
                //justifyContent: 'center',
                //alignItems: 'center',
                //flexWrap: 'wrap',
                //textAlign: 'center',
                //py: 5
            //}}>
            //<Title title='Contact'/>
            //<ToastContainer
                //position="top-right"
                //autoClose={5000}
                //hideProgressBar={false}
                //newestOnTop={false}
                //closeOnClick
                //rtl={false}
                //pauseOnFocusLoss
                //draggable
                //pauseOnHover
            ///>
            //[> Same as <]
            //<ToastContainer />

            //<Box
                //sx={{
                    //marginBottom: "22px",
                //}}
                //data-aos="fade-up"
                //data-aos-delay="75"
                //data-aos-duration="1500"
            //>
                //<Typography
                    //sx={{
                        //fontSize: { xs: "26px" },
                    //}}
                    //fontWeight={"bold"}
                //>
                    //{lenguaje("contact.title")}
                //</Typography>
            //</Box>

            //[> Form <]
            //<form
                //onSubmit={formik.handleSubmit}
                //style={{
                    //display: "flex",
                    //alignItems: "center",
                    //justifyContent: "center",
                    //flexDirection: "column",
                //}}
            //>
                //<TextField
                    //sx={{
                        //width: { xs: "250px", md: "500px" },
                        //marginY: 2,
                    //}}
                    //id="outlined-name"
                    //name="name"
                    //label={`${data[0]}`}
                    //value={formik.values.name}
                    //onChange={formik.handleChange}
                    //error={formik.touched.name && Boolean(formik.errors.name)}
                    //helperText={formik.touched.name && formik.errors.name}
                ///>
                //<TextField
                    //sx={{
                        //width: { xs: "250px", md: "500px" },
                        //marginY: 2,
                    //}}
                    //id="outlined-name"
                    //name="email"
                    //label={`${data[1]}`}
                    //value={formik.values.email}
                    //onChange={formik.handleChange}
                    //error={formik.touched.email && Boolean(formik.errors.email)}
                    //helperText={formik.touched.email && formik.errors.email}
                ///>

                //{getTitle.length === 0 ? (
                    //<TextField
                        //sx={{
                            //width: { xs: "250px", md: "500px" },
                            //marginY: 2,
                        //}}
                        //id="outlined-name"
                        //name="subject"
                        //label={`${data[2]}`}
                        //value={formik.values.subject}
                        //onChange={formik.handleChange}
                        //error={
                            //formik.touched.subject &&
                                //Boolean(formik.errors.subject)
                        //}
                        //helperText={
                            //formik.touched.subject && formik.errors.subject
                        //}
                    ///>
                //) : (
                    //<TextField
                        //sx={{
                            //width: { xs: "250px", md: "500px" },
                            //marginY: 2,
                        //}}
                        //id="outlined-name"
                        //name="subject"
                        //label={`${data[2]}`}
                        //value={(formik.values.subject = getTitle)}
                        //onChange={formik.handleChange}
                        //error={
                            //formik.touched.subject &&
                                //Boolean(formik.errors.subject)
                        //}
                        //onClick={onClickDelete}
                        //helperText={
                            //formik.touched.subject && formik.errors.subject
                        //}
                    ///>
                //)}

                //<TextField
                    //sx={{
                        //width: { xs: "250px", md: "500px" },
                        //marginY: 2,
                    //}}
                    //id="outlined-multiline-static"
                    //label={`${data[3]}`}
                    //multiline
                    //rows={5}
                    //name="message"
                    //value={formik.values.message}
                    //onChange={formik.handleChange}
                    //error={
                        //formik.touched.message && Boolean(formik.errors.message)
                    //}
                    //helperText={formik.touched.message && formik.errors.message}
                ///>

                //<Button
                    //variant="contained"
                    //size="medium"
                    //endIcon={<SendIcon />}
                    //sx={{
                        //backgroundColor: "#0A9EE4",
                        //"&:hover": {
                            //backgroundColor: "#57B868",
                        //},
                    //}}
                    //type="submit"
                //>
                    //{lenguaje("contact.button")}
                //</Button>
            //</form>
        //</Box>   
    //)
}
export default ContactLayout
