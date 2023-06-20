    const nav = document.getElementById('nav'); 
      window.addEventListener('scroll', () => {
        if (window.scrollY >=100) {
            nav.classList.add('nav__black')
        } else {
             nav.classList.remove('nav__black');
        }
     })  

  
  /* ------------------------ M A L W A R E S -------------------------- */

     function toggleVideo()
      {
        const trailer = document.querySelector('.trailer');
        const video = document.querySelector('video');
        trailer.classList.toggle('active');
        video.currentTime = 0;
        video.pause();
      }  
    function toggleSpyware()
    {
      const spyware = document.querySelector('.movie_spyware');
      const video = document.querySelector('video');
      spyware.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
      
    }
    function toggleTrojans()
    {
      const trojans = document.querySelector('.movie_trojans');
      const video = document.querySelector('video');
      trojans.classList.toggle('active');
      video.currentTime = 0;
      video.pause();

      var this_video = document.getElementById(this_video_trojans);
      if (this_video.pause) {
        console.log("VIDEO IS PAUSED");
      } else {
        console.log("VIDEO IS PLAYING");
      }
    }
    function toggleRansomware()
    {
      const ransomware = document.querySelector('.movie_ransomware');
      const video = document.querySelector('video');
      ransomware.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleAdware()
    {
      const adware = document.querySelector('.movie_adware');
      const video = document.querySelector('video');
      adware.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleFileless()
    {
      const fileless = document.querySelector('.movie_fileless');
      const video = document.querySelector('video');
      fileless.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleKeyloggers()
    {
      const keyloggers = document.querySelector('.movie_keyloggers');
      const video = document.querySelector('video');
      keyloggers.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleRootkits()
    {
      const rootkits = document.querySelector('.movie_rootkits');
      const video = document.querySelector('video');
      rootkits.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleWorms()
    {
      const worms = document.querySelector('.movie_worms');
      const video = document.querySelector('video');
      worms.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleWiperMalware()
    {
      const wiper = document.querySelector('.movie_wipermalware');
      const video = document.querySelector('video');
      wiper.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleBots()
    {
      const bots = document.querySelector('.movie_bots');
      const video = document.querySelector('video');
      bots.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }

  /* ------------------------ T H R E A T S -------------------------- */
  function toggleDeliberateActs()
    {
      const da = document.querySelector('.movie_deliberateacts');
      const video = document.querySelector('video');
      da.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleLostInfrastructure()
    {
      const li = document.querySelector('.movie_lostinfrastructure');
      const video = document.querySelector('video');
      li.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleHumanError()
    {
      const he = document.querySelector('.movie_humanerror');
      const video = document.querySelector('video');
      he.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleErrorsandNegligence()
    {
      const ean = document.querySelector('.movie_errorsandnegligence');
      const video = document.querySelector('video');
      ean.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleAttackers()
    {
      const attackers = document.querySelector('.movie_attackers');
      const video = document.querySelector('video');
      attackers.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleForceMajeure()
    {
      const fm = document.querySelector('.movie_forcemajeure');
      const video = document.querySelector('video');
      fm.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleTechnicalFailure()
    {
      const tf = document.querySelector('.movie_technicalfailure');
      const video = document.querySelector('video');
      tf.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }
    function toggleFraudandTheft()
    {
      const fat = document.querySelector('.movie_fraudandtheft');
      const video = document.querySelector('video');
      fat.classList.toggle('active');
      video.currentTime = 0;
      video.pause();
    }