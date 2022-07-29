import { createTheme } from "@mui/material/styles";

const Colors = {
    primary: '#303369',
    secondary: '#EA7813',
    shopCart: '#F0E9E9'
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        },
        shopCart: {
            main: Colors.shopCart
        }
    }
})

export default theme;