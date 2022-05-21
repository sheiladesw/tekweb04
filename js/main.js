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
                    'j':"project" 
                },
                {
                    'j':"Artikel" 
                }
            ]
        },
        desc1: "Holaaa, I'm ",
        desc2: "Let Me Show You A Few Things About Me. So, Welcome To My Website",
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
          desc: "Hallo, perkenalkan nama saya Sheila Deswita Ariyanto, biasa dipanggil sela. Saat ini saya sedang menempuh pendidikan di Universitas Ahmad Dahlan Yogyakarta, Program studi sistem informasi. Saya merupakan mahasiswi semester 4 yang sedang mempelajari cara membuat website pribadi sebagai portofolio dari tugas mata kuliah teknologi web lanjut. ",
        },

        // bagian skill
        skill: "My Skill", 
        skill01: "M.word - Advanced",
        skill02: "Html - Upper Intermediate",
        skill03: "Css Intermediate",
        skill04: "Figma - Advanced",
        skill05: "Python - Intermediate",
        skill06: "SPSS - Intermediate",
        skill07: "SQLYog - Advanced",
        skill08: "Qgis - Advanced",


        // Bagian Project
        project : {
          judul1: "My",
          judul2: "Project"
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

  //Script untuk menghilangkan navigasi collapse jika dikilk akan hilang -->
    $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
    });

 //js nama pada home
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["Sheila"];
  const typingDelay = 100;
  const erasingDelay = 100;
  const newTextDelay = 2500; 
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });
  
  // navbar scroll -->
    document.addEventListener("scroll", function () {
      const navbar = document.querySelector("nav");

      if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
        navbar.classList.add("nav-scrolled", "fixed-top");
      } else {
        navbar.classList.remove("nav-scrolled", "fixed-top");
      }
    });

    
  

    