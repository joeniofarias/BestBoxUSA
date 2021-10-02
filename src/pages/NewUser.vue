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
              <img v-lazy="'img/bestbox.png'" alt="" />
            </div>

            <!-- <fg-input
              class="no-border input-lg"             
              placeholder="Nome Completo"
              v-model="name"
            >
            </fg-input>

            <fg-input              
              class="no-border input-lg"             
              placeholder="E-mail"
              v-model="email"
            >
            </fg-input>

            <fg-input              
              class="no-border input-lg"             
              placeholder="CEP"
              v-model="zipCode"
            >
            </fg-input>

            <fg-input              
              class="no-border input-lg"             
              placeholder="Endereço"
              v-model="addressLine1"
            >

            <fg-input              
              class="no-border input-lg"             
              placeholder="Bairro"
              v-model="addressLine2"
            >
            </fg-input>

            <fg-input              
              class="no-border input-lg"             
              placeholder="Complemento"
              v-model="addressLine3"
            >
            </fg-input>

            <fg-input              
              class="no-border input-lg"             
              placeholder="Cidade"
              v-model="city"
            >
            </fg-input>

            <fg-input              
              class="no-border input-lg"             
              placeholder="Estado"
              v-model="stateOrProvince"
            >
            </fg-input>

            <fg-input              
              class="no-border input-lg"             
              placeholder="País"
              v-model="country"
            >
            </fg-input> -->

            <template slot="raw-content">
              <div class="card-footer text-center">
                <button @click="login" class="btn btn-primary btn-round btn-lg btn-block"> <i class="now-ui-icons arrows-1_share-66 mr-2"/>Cadastrar</button>
              </div>
              
               <div class="card-footer text-center">
                <button @click="login" class="btn btn-primary btn-round btn-lg btn-block"> <i class="fab fa-google-plus mr-2"/>Voltar para Home</button>                
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
import User from '../models/User';
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'new-user-page',
  data(){
    return new User();
  },
  bodyClass: 'new-user-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  methods: {
    add: function(){     
      //TODO: implementar metodo
        },

    checkExistingEmail: function(){             
 //TODO: implementar metodo
      }      
      }
};
</script>
<style></style>
