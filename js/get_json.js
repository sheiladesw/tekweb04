Vue.createApp({
    data() {
      return {
        navbar: {
            home: "Home",
            judul: "Sheila",
            nim: "2000016102",
        },
     //Bagian Artikel
     artikel: {
        judul: "Artikel",
        list_artikel: [],
      },
        nama_artikel: null,

      };
      },

    
    methods: { //tempat menambahkan fungsi-fungsi
        ambilListArtikel()
        {
          axios
            .get(
              src="../artikel/artikel.json"
            )
            .then((res) => {
              console.log(res.data);
              this.artikel.list_artikel = res.data;
            })
            .catch((error) => {
              console.log(error);
            });
        },
        ambilDataMarkdown()
    {               
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const artikel = urlParams.get('nama_artikel');      
      var converter = new showdown.Converter();
        axios
          .get(
            src="../artikel/"+artikel
          )
          .then((res) => {           
            var html = converter.makeHtml(res.data);           
            this.nama_artikel = html;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() { //fungsi yang dipanggil oleh vue sebelum mount terjadi
      this.ambilListArtikel(),
      this.ambilDataMarkdown()
    },
  }).mount("#app");

    // navbar scroll -->
    document.addEventListener("scroll", function () {
        const navbar = document.querySelector("nav");
  
        if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
          navbar.classList.add("nav-scrolled", "fixed-top");
        } else {
          navbar.classList.remove("nav-scrolled", "fixed-top");
        }
      });