import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
// import productsReducer from './products/productsSlics';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from "./products/productsSlics"
import cartReducer from './cart/cartSlide';
import userReducer from "./user/userSlice";


//2= Acá seteo los reducers
const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
});

//3 Acá seteo la configuración de persistencia, que no es palabra reservada pero es habitual llamarla así
const persistConfig ={

    key:"root",
    storage: storage,
    whitelist: ['cart', 'user']
    
    //key es el nombre con el que vamos a persistir los datos
    //storage es el tipo de almacenamiento que vamos a usar
    //whitelist es un array con los nombres de los reducers que queremos persistir
};


//4 PersistedReducer es el reducer que va a persistir los datos, y lo que hace es envolver a los reducers. Recibe como parámetro la configuración de persistencia y los reducers que ya tenemos 
const persistedReducer = persistReducer(persistConfig, reducers) 



//1 A este configureStore le pasamos  los reducers que vamos a usar y compartir con toda la app
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  //el middleware es para manejar las funciones asincrónicas. Es un manejador de data entre la salida de la data y la entrada de la data. En este caso, el serializableCheck es para que no nos tire error cuando persistimos la data. SIEMPRE SE HACE PARA MANEJAR LA DATA ASINCRÓNICA EN REDUX

//5 Acá exportamos el store y el persistor, una exporta la data en si y el otro persistir la data




export const persistor = persistStore(store)