<template>
<div class="body">  
  <Logo/>
  <Text/>
  <Form-button/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '../components/Logo.vue'
import Text from '../components/Text.vue'
import FormButton from '../components/FormButton.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Text,
    FormButton
  }
}
</script>
