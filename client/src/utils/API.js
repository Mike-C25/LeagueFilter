import axios from 'axios';

export default {
    getChampionData: function(){
        return axios.get('/api/champions');
    }
};