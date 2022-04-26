import { createTheme } from '@mui/material'

export const theme = createTheme({
    typography: {
        fontFamily: 'var(--lato)'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    // height: '',
                    backgroundColor: 'var(--mid)',
                    color: 'var(--alt)',
                    margin: '3.5rem 0',
                    marginRight: '1rem',
                    transition: '0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        backgroundColor: 'var(--base)'
                    }
                }
            }
        }
    },
    palette: {
        text: {
            primary: '#071B85',
            secondary: '#757575',
            alternate: '#000000'
        }
    }
})