const app = new Vue(
  {
    el: '#root',
    data: {
      titolo: 'vue hello',
      imagePath: 'https://picsum.photos/600/600',
      altText: 'immagine da lorem Picsum',
    },
    methods: {
      toUpper(text){
        return text.toUpperCase()
      },
    }
  }
)