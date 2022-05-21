Vue.createApp({
    data() {
      return {     
        navbar: {
            home: "Home",
            judul: "Sheila",
            nim: "2000016102",
            l: [
                {
                    'j':"About" 
                },
                {
                    'j':"Artikel" 
                },
                {
                    'j':"Portfolio" 
                }
            ]
        },
        desc1: "Holaaa, I'm ",
        desc2: "Let Me Show You A Few Things About Me. So, Welcome To My Blog",
        socmed: [
            {
                'judul': "Instagram",
                'url': "https://www.instagram.com/sheila.mdy/",
                'gmb': "fab fa-instagram fa-2x"
            },
            {
                'judul': "Github",
                'url': "https://github.com/sheiladesw",
                'gmb': "fab fa-github fa-2x"
            },
            {
                'judul': "Linked In",
                'url': "https://www.linkedin.com/in/sheila-deswita-ariyanto-828a25203/",
                'gmb': "fab fa-linkedin fa-2x"
            }
        ],

        //Bagian Tentang
        tentang: {
            judul1: "Tentang ",
            judul2: "Saya",
            desc: "Hallo, perkenalkan nama saya Sheila Deswita Ariyanto, biasa dipanggil sela. Saya adalah salah satu mahasiswi semester 4 program studi sistem informasi. Saat ini saya sedang mempelajari cara membuat website pribadi sebagai portofolio dari tugas mata kuliah teknologi web lanjut. ",

        },

        //Bagian tabel
        tabel: {
            nama: "Tabel Keterampilan",
            judul: ["No.","Keterampilan","Level"],
            datanya: [
                {
                    "j":"HTML",
                    "a":"Advance"

                },
                {
                   "j": "CSS",
                   "a":"intermediatte"
                },
                {
                    "j":"Vue-js",
                    "a":"Intermediatte"
                },
                {
                    "j":"Microsoft Word",
                    "a":"Advance"

                },
                {
                    "j":"Microsoft Power Point",
                    "a":"Advance"
                },
                {
                    "j":"Microsoft Excel",
                    "a":"Advance"
                },
                {
                    "j":"javascript",
                    "a":"Intermediatte"
                },
                {
                    "j":"Java",
                    "a":"Intermediatte"
                }
            ],
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
  