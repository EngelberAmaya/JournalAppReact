import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks';
import { useState } from 'react';

const formData = {
    displayName: '',
    email: '',
    password: ''
}

const formValidations = {
    email: [ ( value ) => value.includes('@'), 'El correo debe tener una @' ],
    password: [ ( value ) => value.length >= 6, 'El password debe de tener más de 6 caracteres' ],
    displayName: [ ( value ) => value.length >= 1, 'El nombre es obligatorio' ],
}

export const RegisterPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { displayName, email, password, onInputChange,
        /*isFormValid,*/ displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    //sconsole.log(displayNameValid);

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);
        console.log({displayName, email, password})
    }
    
    return (
        <AuthLayout title='Crear Cuenta'>
            {/* <h1>FormValid { isFormValid ? 'válido' : 'Incorrecto' }</h1> */}
            <form onSubmit={onSubmit}>
                <Grid container>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Nombre Completo" type="text" placeholder="Nombre Completo" fullWidth
                            name='displayName' value={ displayName } onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted } helperText={ displayNameValid }
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Correo" type="email" placeholder="correo@gmail.com" fullWidth
                            name='email' value={ email } onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted} helperText={ emailValid }
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth
                            name='password' value={ password } onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted } helperText={ passwordValid }
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>Crear Cuenta</Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
                        <Link component={ RouterLink } color='inherit' to="/auth/login">
                           Ingresar
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
        
    )
}