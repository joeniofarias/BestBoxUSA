<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        BESTBOX USA
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Um site da MANDA TUDO USA
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.creative-tim.com/product/vue-now-ui-kit"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93"></i>
          <p>Download</p>
        </a>
      </li>
      <drop-down
        tag="li"
        title="Components"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> All components
        </nav-link>
        <a
          href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67"></i> Documentation
        </a>
      </drop-down>
      <drop-down
              tag="li"
              title="Serviços"
              icon="now-ui-icons design_image"
              class="nav-item"
      >
        <nav-link to="#basic-elements">
          <i class="now-ui-icons education_paper"></i> Compra Assistida
        </nav-link>
        <nav-link to="#inputs">
          <i class="now-ui-icons users_circle-08"></i> Fale Conosco
        </nav-link>
        <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Seja Importador
        </nav-link>

         <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Minha Conta
        </nav-link>

         <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Caixas Recebidas
        </nav-link>

         <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Estoque
        </nav-link>

         <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Envios
        </nav-link>

         <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Simular Frete
        </nav-link>

         <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Onde Comprar
        </nav-link>

         <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Mensagem
        </nav-link>

         <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> FAQ
        </nav-link>

        <nav-link to="/login">
          <i class="now-ui-icons users_single-02"></i> Treinamento Online
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href="#/login"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_share-66 mr-2"></i>
          <p>Efetuar Login</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Siga a MANDA TUDO USA no Twitter"
          data-placement="bottom"
          href="https://twitter.com/mandatudousa"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Dê um Like no Facebook da MANDA TUDO USA"
          data-placement="bottom"
          href="https://www.facebook.com/mandatudousa"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Siga a MANDA TUDO USA no Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/mandatudousa"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
