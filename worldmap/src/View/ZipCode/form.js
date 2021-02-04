import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
        zipcode: { required, maxLength: maxLength(8) }
    },

    data: () => ({
        zipcode: null,
        cep: ''
    }),

    computed: {
        zipcodeError() {
            const errors = []
            if (!this.$v.zipcode.$dirty) return errors
            !this.$v.zipcode.maxLength && errors.push('Cep deve ter no máximo 10 caracteres')
            !this.$v.zipcode.required && errors.push('Cep é obrigatório .')
            return errors
        }
    },


    methods: {
        submit() {
            this.$v.$touch()
            if (this.$v.zipcode.maxLength) {
                axios.get(`https://api.postmon.com.br/v1/cep/${this.zipcode}`)
                    .then(response => {
                        let res = JSON.stringify(response.data);
                        this.cep = JSON.parse(res)
                    })
            }

        },

        clear() {
            this.$v.$reset()
            this.zipcode = ''
            this.cep = ''
        }
    }
}