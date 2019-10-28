new Vue({
  el: "#bodyContainer",
  data: {
    busqueda: "",
    books: []
  },
  mounted() {
    this.cargarBooks();
  },

  methods: {
    cargarBooks() {
      fetch("https://api.myjson.com/bins/1h3vb3")
        .then(response => response.json())
        .then(data => {
          this.books = data.books;
        })
        .catch(err => console.log(err));
    },
    filterBooks() {
      return this.books.filter(
        book =>
          book.titulo.toUpperCase().includes(this.busqueda.toUpperCase()) ||
          book.descripcion.toUpperCase().includes(this.busqueda.toUpperCase())
      );
    }
  }
});
