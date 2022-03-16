
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    tabs:{
        color:'white',
        marginLeft:'10px',
        textDecoration:'none',
        border:'1px solid white',
        padding:'5px'
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.header}>
        <Toolbar>
            <NavLink className={classes.tabs} to="./" exact>Home</NavLink>
            <NavLink className={classes.tabs} to="/department" exact>All University</NavLink>
            <NavLink className={classes.tabs} to="/add/department" exact>Add University</NavLink>
            {/* teacher */}
            <NavLink className={classes.tabs} to="/teacher" exact>All teacher</NavLink>

            <NavLink className={classes.tabs} to="/add/teacher" exact>Add teacher</NavLink>
            <NavLink className={classes.tabs} to="/cal" exact>All Calculation</NavLink>

            <NavLink className={classes.tabs} to="/add/cal" exact> calculation</NavLink>

        </Toolbar>
    </AppBar>
    )
}







export default CodeForInterview;