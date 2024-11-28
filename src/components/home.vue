<template>
  <div>

    <header>

      <RouterLink to="/">brendokildere<b>.</b>com</RouterLink>

      <div>
        <button>Habilidade</button>
        <button>social</button>
        <button><i class="fi fi-rr-menu-burger"></i></button>
      </div>

    </header>

    <main>
      <h1>Desenvolvedor Web <b>FULLSTACK</b></h1>
      <h2>Desenvolvedor <b>Vue.js</b> e <b>Django</b>. Também trabalho com design de interfaces usando <b>Figma</b> aplicando princípios de <b>UX e UI</b> para criar experiências visuais e funcionais.</h2>

      <div class="container-buttons">
        
        <a href="https://api.whatsapp.com/send/?phone=5592996059860&text&type=phone_number&app_absent=0" target="blank"><b>Entre em contato</b></a>
        <a href="https://www.linkedin.com/in/brendo-kildere-76a524229" target="blank"><b>Linkdin</b></a>

      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>

header{
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    color: #fff;
    font-size: 1.8rem;
    font-weight: 400;

    width: 90%;
  }

  header a{
    color: #fff;
    text-decoration: none;
  }

  header a:hover{
    color: $primary-light
  }

  header div{
    display: flex;
    justify-content: space-between;

    width: 20rem;
  }

  header button{
    font-size: 1.5rem;
    border: 0px;
    background: none;
    color: #fff;
    cursor: pointer;
  }

  header button:nth-child(3) {
      display: none;
      font-size: 3rem;
  }

  header button:hover{
    color: $primary-light
  }



  b{
    color: $primary-color;
  }

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-weight: 100;
    gap: 2rem;
    width: 90%;

    margin: 0 auto;
  }

  h1{
    text-align: center;
    margin-top: 20rem;
    font-size: 5rem
  }

  h2{
    font-size: 1.8rem;
    text-align: center;
    font-weight: 200;

    width: 75rem;
  }


  .container-buttons{
    display: flex;
    width: 75rem;


    justify-content: space-between;
  }

   .container-buttons a{
    background: none;
    border: 0.1rem solid $primary-color;
    width: 48%;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 100;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
   }

   .container-buttons a b{
    font-weight: 100;
   }

   .container-buttons a:hover{
    background:$primary-light;
   }

   .container-buttons a:hover b{
    font-weight: 400;
    color:#000;
   }

  .container-buttons a:nth-child(1){
    border-radius: 0rem 0rem 0rem 3rem;
  }

  .container-buttons a:nth-child(2){
    border-radius: 0rem 3rem 0rem 0rem;
  }


  @media(max-width: 700px){
    

    h2{
      font-size: 1.3rem;
      width: 95%;
    }

    .container-buttons{
      width: 95%;
    }

    header button{
      display: none;
    }

    header button:nth-child(3) {
      display: flex;
    }

     header div{
      width: 2rem;
     }
  }

  

</style>