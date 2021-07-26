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
        BEST BOX USA...
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Suas compras nos EUA
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.instagram.com/joeniofarias/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p>Joenio Insta</p>
        </a>
      </li>
      <drop-down
        tag="li"
        title="::..Voltar a página Inicial..::"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> Início
        </nav-link>
      </drop-down>

       <drop-down
        tag="li"
        title="...::SERVIÇOS::..."
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> COMPRA ASSISTIDA
        </nav-link>

        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> Calcule seu envio
        </nav-link>

        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> Torne-se um IMPORTADOR
        </nav-link>

        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> CRIAR CONTA
        </nav-link>

         <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> Fale com a BestBoxUSA
        </nav-link>
      </drop-down>

      <drop-down
              tag="li"
              title="..::Faça Login::.."
              icon="now-ui-icons design_image"
              class="nav-item"
      >
        <!--
          <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Landing
        </nav-link>!
        -->
        <nav-link to="/login">
          <i class="now-ui-icons users_circle-08"></i> Login
        </nav-link>
        <!--<nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile
        </nav-link>
        !-->
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"      
          href="http://www.mandatudousa.com.br"
          target="_blank"
        >
          <i class="now-ui-icons users_circle-08"></i>
          <p>MANDA TUDO USA</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Siga-nos no Twitter"
          data-placement="bottom"
          href="https://twitter.com/joeniofarias"
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
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/joenio.farias"
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
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/CreativeTimOfficial"
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
