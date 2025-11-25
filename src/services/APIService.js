//Lib
import api from "../lib/axios";

export default {
    async obtenerCategorias(){
        const { data } = await api('/list.php?c=list');
        return data.drinks;
    },

    async buscarRecetas(busqueda){
        const { data } = await api(`/filter.php?c=${busqueda.categoria}&i=${busqueda.nombre}`);
        return data.drinks;
    },

    async buscarReceta(id){
        const { data } = await api(`lookup.php?i=${id}`);
        return data.drinks;
    }
}
