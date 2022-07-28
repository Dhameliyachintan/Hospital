import { createContext, useReducer } from "react";
import { ThemeReducer } from "./Reducer/ThemeReducer";
import * as ActionType from "./ActionType"


const ThemeContext = createContext();

const initiVal = {
    theme: "light"
}


export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initiVal)

    const toggle_theme = (theme) => {
        console.log(theme);
        const newtheme = theme === "dark" ? "Light" : "dark"
        dispatch({ type: ActionType.TOGGLE_THEMES, payload: newtheme })
    }

    return (
        <ThemeContext.Provider value={{
            ...state,
            toggle_theme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext