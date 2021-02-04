import axios from 'axios'
export default {
    data() {
        return {
            date: axios.get('https://api.got.show/api/book/cities'),
            ct: ''
        }
    },

    created() {
        this.date.then(response => {
            let res = JSON.stringify(response.data);
            this.ct = JSON.parse(res)
        })
    }
}