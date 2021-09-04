<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('./img/ma.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="E-mail"
              v-model="email"
            >
            </fg-input>

            <fg-input
              type="password"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Senha"
              v-model="password"
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <button @click="login" class="btn btn-primary btn-round btn-lg btn-block">Entrar com Email e Senha</button>                
              </div>
               <div class="card-footer text-center">
                <button @click="loginWithGoogle" class="btn btn-primary btn-round btn-lg btn-block">Entrar pelo Google</button>                
              </div>
               <div class="card-footer text-center">
                <button @click="loginWithFacebook" class="btn btn-primary btn-round btn-lg btn-block">Entrar pelo Facebook</button>                
              </div>
              <!-- <div class="pull-left">
                <h6>
                  <a href="#pablo" class="link footer-link">Criar Conta</a>
                </h6>
              </div> -->
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Precisa de ajuda?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import firebase from 'firebase';
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'login-page',
  data(){
    return {email: '', password: ''};
  },
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  methods: {
    login: function(){     
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
              
        localStorage.setItem('userCredential', JSON.stringify(userCredential));
        this.$router.replace('/');
      })
      .catch((error) => {
        alert(`Login error! {"Error Code": ${error.code} Error Message: "${error.message}"}`);
      });
        },

    loginWithGoogle: function(){     
        const provider = new firebase.auth.GoogleAuthProvider();
        
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
          
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {            
          
          localStorage.setItem('userCredential', JSON.stringify(result.credential));                   

          firebase.auth().signInWithRedirect(provider);

          this.$router.replace('/');ssss

        }).catch((error) => {          
          alert(`Login error! {"Error Code": ${error.code} Error Message: "${error.message}"}`);          
        });
      },

      loginWithFacebook: function(){     
        const provider = new firebase.auth.FacebookAuthProvider();
        
        provider.addScope('user_birthday');
        
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {            
          
          localStorage.setItem('userCredential', JSON.stringify(result.credential));                   

          firebase.auth().signInWithRedirect(provider);

          this.$router.replace('/');ssss

        }).catch((error) => {          
          alert(`Login error! {"Error Code": ${error.code} Error Message: "${error.message}"}`);          
        });
      }
      }
};
</script>
<style></style>
