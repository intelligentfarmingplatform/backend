<template>
  <v-card >
    <v-form
      ref="form"
      @submit.prevent="submit"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="edit.first"
              :rules="[val => (val || '').length > 0 || 'This field is required']"
              color="purple darken-2"
              label="First name"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="edit.last"
              :rules="[val => (val || '').length > 0 || 'This field is required']"
              color="blue darken-2"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-select
              v-model="edit.favoriteAnimal"
              :items="animals"
              :rules="[val => (val || '').length > 0 || 'This field is required']"
              color="pink"
              label="Favorite animal"
              required
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-checkbox
              v-model="edit.terms"
              color="green"
            >
            </v-checkbox>
          </v-col>
        </v-row>
      </v-container>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!formIsValid"
          text
          color="primary"
          type="submit"
        >
          Register
        </v-btn>
    </v-form>
  </v-card>
</template>

<script>
  export default {
    data () {


      return {
        // form: Object.assign({}, defaultForm),
        animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
             edit:{
        first: '',
        last: '',
        bio: '',
        favoriteAnimal: '',
        age: null,
        terms: false,
      },
      }
    },

    computed: {
      formIsValid() {
        return (
          this.edit.first &&
          this.edit.last &&
          this.edit.favoriteAnimal &&
          this.edit.terms
        )
      },
    },

    methods: {
      submit () {
        this.snackbar = true
        this.resetForm()
      },
    },
  }
</script>
