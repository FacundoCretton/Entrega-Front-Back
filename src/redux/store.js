import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import productsReducer from './products/productsSlics'




//2= Acá seteo los reducers
const reducers = combineReducers({
    products: productsReducer,
})

//3 Acá seteo la configuración de persistencia, que no es palabra reservada pero es habitual llamarla así
const persistConfig ={

    key:"root",
    storage: storage,
    
    //key es el nombre con el que vamos a persistir los datos
    //storage es el tipo de almacenamiento que vamos a usar
}


//4 PersistedReducer es el reducer que va a persistir los datos, y lo que hace es envolver a los reducers. Recibe como parámetro la configuración de persistencia y los reducers que ya tenemos 
const persistedReducer = persistReducer(persistConfig, reducers) 



//1 A este configureStore le pasamos  los reducers que vamos a usar y compartir con toda la app
export const store = configureStore ({
    reducer: persistedReducer


});


//5 Acá exportamos el store y el persistor, una exporta la data en si y el otro persistir la data

export const persistor = persistStore(store)