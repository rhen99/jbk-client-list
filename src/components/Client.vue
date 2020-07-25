<template>
  <div class="card my-2">
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">{{ client.name }}</h6>
      <div class="card-text my-2">
        <span class="font-weight-bold">{{ client.place }}</span>
        <span class="text-secondary font-weight-bold mx-1">
          {{
          client.date
          }}
        </span>
        <span class="text-primary font-weight-bold mx-1">
          {{
          client.heads
          }}
        </span>

        <span class="font-weight-bold mx-1">head(s)</span>

        <span class="text-success font-weight-bold mx-1">PHP {{ client.payment }}</span>
        <span class="font-weight-bold mx-1">Gamot?</span>
        <span class="text-primary font-weight-bold mx-1">
          {{ client.gamot }}
          {{ client.gamot === "yes" ? client.gamot_qtty + " pc." : null }}
        </span>
        <span class="font-weight-bold mx-1">QuickHeal?</span>
        <span class="text-primary font-weight-bold mx-1">
          {{ client.quickheal }}
          {{
          client.quickheal === "yes" ? client.quickheal_qtty + " pc." : null
          }}
        </span>
      </div>
      <b-button class="mr-1" :href="client.facebook" variant="primary">Open Profile</b-button>
      <b-button @click="modalShow = !modalShow" class="mr-1" variant="success">View Iamges</b-button>
      <b-button variant="danger" @click="deleteClient">
        <b-icon-trash-fill></b-icon-trash-fill>
      </b-button>
    </div>
    <b-modal v-model="modalShow" hide-footer>
      <b-carousel
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        controls
        v-model="slide"
        indicators
        img-width="100"
        img-height="100"
        :interval="3000"
      >
        <b-carousel-slide v-for="image in imageLinks" :key="image.index" :img-src="image.link"></b-carousel-slide>
      </b-carousel>
    </b-modal>
  </div>
</template>

<script>
  import firebase from "firebase/app";
  import "firebase/storage";
  export default {
    name: "Client",
    props: ["client"],

    data() {
      return {
        slide: 0,
        sliding: null,
        modalShow: false,
        imageLinks: [],
      };
    },
    created() {
      this.client.images.forEach((image, index) => {
        firebase
          .storage()
          .ref()
          .child(`images/${image}`)
          .getDownloadURL()
          .then((url) => {
            const src = {
              key: index,
              link: url,
            };
            this.imageLinks.push(src);
          });
      });
    },
    methods: {
      onSlideStart() {
        this.sliding = true;
      },
      onSlideEnd() {
        this.sliding = false;
      },
      deleteClient() {
        const deletedClient = {
          id: this.client.id,
          images: this.client.images,
        };
        this.$emit("del-client", deletedClient);
      },
    },
  };
</script>

<style></style>
