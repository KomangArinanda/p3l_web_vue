<template>
  <div>
    <v-footer height="auto" fixed>
      <v-flex xs12>
        <v-card-actions class="grey lighten-2 justify-center">
          &copy;2018 — <strong>TF UAJY</strong>
        </v-card-actions>
      </v-flex>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ['fa fa-facebook', 'fa fa-twitter', 'fa fa-google-plus', 'fa fa-linkedin', 'fa fa-instagram'],
    rows: [
      {
        title: 'Company Name',
        children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
      },
      {
        title: 'Products',
        children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      }
    ]
  })
}
</script>
