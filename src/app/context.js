import { createContext } from "react";

// Создание и экспорт контекста приложения. Здесь мы создаем объект контекста, а
// также передаем ему объект, инициализирующий данные контекста
export const AppContext = createContext({
    user: undefined,
    login: undefined,
    logout: undefined
});
