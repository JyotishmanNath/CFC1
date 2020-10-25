var num = 0;

function preload(){
  launchPage = loadImage("images/LaunchPage.jpg");
  bleachedCoral = loadImage("images/BleachedCoral.jpg");
  healthyCoral = loadImage("images/HealthyCoral.jpg");
  boyCharacter = loadImage("images/BoyCharacter.jpg");
  girlCharacter = loadImage("images/GirlCharacter.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight-105);
}

function draw() {
  background(launchPage);

  this.PlayGame = createButton('Enter');
  this.PlayGame.position(1450,600);
  this.PlayGame.size(125,65);

  this.CaringForCorals = createButton('Caring for the Corals');
  this.CaringForCorals.position(700,50);
  this.CaringForCorals.size(300,50);

  this.PlayGame.mousePressed(()=>{
    this.PlayGame.hide();
    this.CaringForCorals.hide();

    this.PickAvatar = createButton('Pick Your Avatar!');
    this.PickAvatar.position(700,50);
    this.PickAvatar.size(300,50);

  if(num === 0){
    image(boyCharacter,200,350,250,250);
    image(girlCharacter,1275,350,250,250);  
    }

    this.BoyCharcter = createButton('Boy Character');
    this.BoyCharcter.position(100,750);
    this.BoyCharcter.size(450,200);

    this.GirlCharcter = createButton('Girl Character');
    this.GirlCharcter.position(1175,750);
    this.GirlCharcter.size(450,200);

  });

    this.BoyCharcter.mousePressed(()=>{

      num = 1;

      this.PickAvatar.hide();
      this.BoyCharcter.hide();
      this.GirlCharcter.hide();

      this.Location = createButton('Pick a Location!');
      this.Location.position(700,50);
      this.Location.size(300,50);
  
      this.Beach = createButton('Beach');
      this.Beach.position(50,250);
      this.Beach.size(250,400);
  
      this.BathroomShower = createButton('Bathroom Shower');
      this.BathroomShower.position(500,250);
      this.BathroomShower.size(250,400);

      this.LakeRiver = createButton('Lake/River');
      this.LakeRiver.position(950,250);
      this.LakeRiver.size(250,400);
  
      this.OceanSea = createButton('Ocean/Sea');
      this.OceanSea.position(1400,250);
      this.OceanSea.size(250,400);

      this.Beach.mousePressed(()=>{
        this.Location.hide();
        this.Beach.hide();
        this.BathroomShower.hide();
        this.LakeRiver.hide();
        this.OceanSea.hide();
  
        this.WhichSunscreen = createButton('Which type of Sunscreen?');
        this.WhichSunscreen.position(700,50);
        this.WhichSunscreen.size(300,50);
    
        this.Physical = createButton('Physical');
        this.Physical.position(100,250);
        this.Physical.size(450,600);

        this.Chemical = createButton('Chemical');
        this.Chemical.position(1175,250);
        this.Chemical.size(450,600);

          this.Physical.mousePressed(()=>{
            this.WhichSunscreen.hide();
            this.Physical.hide();
            this.Chemical.hide();
      
            this.OxybenzoneFree = createButton('Which Object will you use?');
            this.OxybenzoneFree.position(700,50);
            this.OxybenzoneFree.size(300,50);
        
            this.Yes = createButton('Hat');
            this.Yes.position(50,150);
            this.Yes.size(250,300);
        
            this.No = createButton('Hat (With Sunscreen)');
            this.No.position(500,150);
            this.No.size(250,300);
      
            this.Sunglasses = createButton('Sunglasses');
            this.Sunglasses.position(950,150);
            this.Sunglasses.size(250,300);
        
            this.SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
            this.SunglassesSunscreen.position(1400,150);
            this.SunglassesSunscreen.size(250,300);

            this.Umbrella = createButton('Umbrella');
            this.Umbrella.position(50,650);
            this.Umbrella.size(250,300);
        
            this.UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
            this.UmbrellaSunscreen.position(500,650);
            this.UmbrellaSunscreen.size(250,300);
      
            this.FullSleveDress = createButton('Full Sleve Dress');
            this.FullSleveDress.position(950,650);
            this.FullSleveDress.size(250,300);
        
            this.FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
            this.FullSleveDressSunscreen.position(1400,650);
            this.FullSleveDressSunscreen.size(250,300);
          })

          this.Chemical.mousePressed(()=>{
            this.WhichSunscreen.hide();
            this.Physical.hide();
            this.Chemical.hide();
        
            this.OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
            this.OxybenzoneFree.position(700,50);
            this.OxybenzoneFree.size(300,50);
        
            this.Yes = createButton('Yes');
            this.Yes.position(100,250);
            this.Yes.size(450,600);
        
            this.No = createButton('No');
            this.No.position(1175,250);
            this.No.size(450,600);

              this.Yes.mousePressed(()=>{
                this.OxybenzoneFree.hide();
                this.Yes.hide();
                this.No.hide();
          
                this.AmountSprays = createButton('How Many Sprays will you use??');
                this.AmountSprays.position(700,50);
                this.AmountSprays.size(300,50);
            
                this.Sprays1 = createButton('1 Spray');
                this.Sprays1.position(50,250);
                this.Sprays1.size(250,400);
            
                this.Sprays2 = createButton('2 Sprays');
                this.Sprays2.position(500,250);
                this.Sprays2.size(250,400);
          
                this.Sprays3 = createButton('3 Sprays');
                this.Sprays3.position(950,250);
                this.Sprays3.size(250,400);
            
                this.Sprays4 = createButton('4 Sprays');
                this.Sprays4.position(1400,250);
                this.Sprays4.size(250,400);
              })
      
              this.No.mousePressed(()=>{
                this.OxybenzoneFree.hide();
                this.Yes.hide();
                this.No.hide();
          
                this.AmountSprays = createButton('How Many Sprays will you use??');
                this.AmountSprays.position(700,50);
                this.AmountSprays.size(300,50);
            
                this.Sprays1 = createButton('1 Spray');
                this.Sprays1.position(50,250);
                this.Sprays1.size(250,400);
            
                this.Sprays2 = createButton('2 Sprays');
                this.Sprays2.position(500,250);
                this.Sprays2.size(250,400);
          
                this.Sprays3 = createButton('3 Sprays');
                this.Sprays3.position(950,250);
                this.Sprays3.size(250,400);
            
                this.Sprays4 = createButton('4 Sprays');
                this.Sprays4.position(1400,250);
                this.Sprays4.size(250,400);
              })
        })
    })

    this.BathroomShower.mousePressed(()=>{
      this.Location.hide();
      this.Beach.hide();
      this.BathroomShower.hide();
      this.LakeRiver.hide();
      this.OceanSea.hide();

      this.WhichSunscreen = createButton('Which type of Sunscreen?');
      this.WhichSunscreen.position(700,50);
      this.WhichSunscreen.size(300,50);
  
      this.Physical = createButton('Physical');
      this.Physical.position(100,250);
      this.Physical.size(450,600);

      this.Chemical = createButton('Chemical');
      this.Chemical.position(1175,250);
      this.Chemical.size(450,600);

        this.Physical.mousePressed(()=>{
          this.WhichSunscreen.hide();
          this.Physical.hide();
          this.Chemical.hide();
    
          this.OxybenzoneFree = createButton('Which Object will you use?');
          this.OxybenzoneFree.position(700,50);
          this.OxybenzoneFree.size(300,50);
      
          this.Yes = createButton('Hat');
          this.Yes.position(50,150);
          this.Yes.size(250,300);
      
          this.No = createButton('Hat (With Sunscreen)');
          this.No.position(500,150);
          this.No.size(250,300);
    
          this.Sunglasses = createButton('Sunglasses');
          this.Sunglasses.position(950,150);
          this.Sunglasses.size(250,300);
      
          this.SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
          this.SunglassesSunscreen.position(1400,150);
          this.SunglassesSunscreen.size(250,300);

          this.Umbrella = createButton('Umbrella');
          this.Umbrella.position(50,650);
          this.Umbrella.size(250,300);
      
          this.UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
          this.UmbrellaSunscreen.position(500,650);
          this.UmbrellaSunscreen.size(250,300);
    
          this.FullSleveDress = createButton('Full Sleve Dress');
          this.FullSleveDress.position(950,650);
          this.FullSleveDress.size(250,300);
      
          this.FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
          this.FullSleveDressSunscreen.position(1400,650);
          this.FullSleveDressSunscreen.size(250,300);
        })

        this.Chemical.mousePressed(()=>{
          this.WhichSunscreen.hide();
          this.Physical.hide();
          this.Chemical.hide();
      
          this.OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
          this.OxybenzoneFree.position(700,50);
          this.OxybenzoneFree.size(300,50);
      
          this.Yes = createButton('Yes');
          this.Yes.position(100,250);
          this.Yes.size(450,600);
      
          this.No = createButton('No');
          this.No.position(1175,250);
          this.No.size(450,600);

            this.Yes.mousePressed(()=>{
              this.OxybenzoneFree.hide();
              this.Yes.hide();
              this.No.hide();
        
              this.AmountSprays = createButton('How Many Sprays will you use??');
              this.AmountSprays.position(700,50);
              this.AmountSprays.size(300,50);
          
              this.Sprays1 = createButton('1 Spray');
              this.Sprays1.position(50,250);
              this.Sprays1.size(250,400);
          
              this.Sprays2 = createButton('2 Sprays');
              this.Sprays2.position(500,250);
              this.Sprays2.size(250,400);
        
              this.Sprays3 = createButton('3 Sprays');
              this.Sprays3.position(950,250);
              this.Sprays3.size(250,400);
          
              this.Sprays4 = createButton('4 Sprays');
              this.Sprays4.position(1400,250);
              this.Sprays4.size(250,400);
            })
    
            this.No.mousePressed(()=>{
              this.OxybenzoneFree.hide();
              this.Yes.hide();
              this.No.hide();
        
              this.AmountSprays = createButton('How Many Sprays will you use??');
              this.AmountSprays.position(700,50);
              this.AmountSprays.size(300,50);
          
              this.Sprays1 = createButton('1 Spray');
              this.Sprays1.position(50,250);
              this.Sprays1.size(250,400);
          
              this.Sprays2 = createButton('2 Sprays');
              this.Sprays2.position(500,250);
              this.Sprays2.size(250,400);
        
              this.Sprays3 = createButton('3 Sprays');
              this.Sprays3.position(950,250);
              this.Sprays3.size(250,400);
          
              this.Sprays4 = createButton('4 Sprays');
              this.Sprays4.position(1400,250);
              this.Sprays4.size(250,400);
            })
      })
  })

  this.LakeRiver.mousePressed(()=>{
    this.Location.hide();
    this.Beach.hide();
    this.BathroomShower.hide();
    this.LakeRiver.hide();
    this.OceanSea.hide();

    this.WhichSunscreen = createButton('Which type of Sunscreen?');
    this.WhichSunscreen.position(700,50);
    this.WhichSunscreen.size(300,50);

    this.Physical = createButton('Physical');
    this.Physical.position(100,250);
    this.Physical.size(450,600);

    this.Chemical = createButton('Chemical');
    this.Chemical.position(1175,250);
    this.Chemical.size(450,600);

      this.Physical.mousePressed(()=>{
        this.WhichSunscreen.hide();
        this.Physical.hide();
        this.Chemical.hide();

        this.OxybenzoneFree = createButton('Which Object will you use?');
        this.OxybenzoneFree.position(700,50);
        this.OxybenzoneFree.size(300,50);
    
        this.Yes = createButton('Hat');
        this.Yes.position(50,150);
        this.Yes.size(250,300);
    
        this.No = createButton('Hat (With Sunscreen)');
        this.No.position(500,150);
        this.No.size(250,300);

        this.Sunglasses = createButton('Sunglasses');
        this.Sunglasses.position(950,150);
        this.Sunglasses.size(250,300);
    
        this.SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
        this.SunglassesSunscreen.position(1400,150);
        this.SunglassesSunscreen.size(250,300);

        this.Umbrella = createButton('Umbrella');
        this.Umbrella.position(50,650);
        this.Umbrella.size(250,300);
    
        this.UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
        this.UmbrellaSunscreen.position(500,650);
        this.UmbrellaSunscreen.size(250,300);
  
        this.FullSleveDress = createButton('Full Sleve Dress');
        this.FullSleveDress.position(950,650);
        this.FullSleveDress.size(250,300);
    
        this.FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
        this.FullSleveDressSunscreen.position(1400,650);
        this.FullSleveDressSunscreen.size(250,300);
      })

      this.Chemical.mousePressed(()=>{
        this.WhichSunscreen.hide();
        this.Physical.hide();
        this.Chemical.hide();
    
        this.OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
        this.OxybenzoneFree.position(700,50);
        this.OxybenzoneFree.size(300,50);
    
        this.Yes = createButton('Yes');
        this.Yes.position(100,250);
        this.Yes.size(450,600);
    
        this.No = createButton('No');
        this.No.position(1175,250);
        this.No.size(450,600);

          this.Yes.mousePressed(()=>{
            this.OxybenzoneFree.hide();
            this.Yes.hide();
            this.No.hide();
      
            this.AmountSprays = createButton('How Many Sprays will you use??');
            this.AmountSprays.position(700,50);
            this.AmountSprays.size(300,50);
        
            this.Sprays1 = createButton('1 Spray');
            this.Sprays1.position(50,250);
            this.Sprays1.size(250,400);
        
            this.Sprays2 = createButton('2 Sprays');
            this.Sprays2.position(500,250);
            this.Sprays2.size(250,400);
      
            this.Sprays3 = createButton('3 Sprays');
            this.Sprays3.position(950,250);
            this.Sprays3.size(250,400);
        
            this.Sprays4 = createButton('4 Sprays');
            this.Sprays4.position(1400,250);
            this.Sprays4.size(250,400);
          })

          this.No.mousePressed(()=>{
            this.OxybenzoneFree.hide();
            this.Yes.hide();
            this.No.hide();
      
            this.AmountSprays = createButton('How Many Sprays will you use??');
            this.AmountSprays.position(700,50);
            this.AmountSprays.size(300,50);
        
            this.Sprays1 = createButton('1 Spray');
            this.Sprays1.position(50,250);
            this.Sprays1.size(250,400);
        
            this.Sprays2 = createButton('2 Sprays');
            this.Sprays2.position(500,250);
            this.Sprays2.size(250,400);
      
            this.Sprays3 = createButton('3 Sprays');
            this.Sprays3.position(950,250);
            this.Sprays3.size(250,400);
        
            this.Sprays4 = createButton('4 Sprays');
            this.Sprays4.position(1400,250);
            this.Sprays4.size(250,400);
          })
    })
})

this.OceanSea.mousePressed(()=>{
  this.Location.hide();
  this.Beach.hide();
  this.BathroomShower.hide();
  this.LakeRiver.hide();
  this.OceanSea.hide();

  this.WhichSunscreen = createButton('Which type of Sunscreen?');
  this.WhichSunscreen.position(700,50);
  this.WhichSunscreen.size(300,50);

  this.Physical = createButton('Physical');
  this.Physical.position(100,250);
  this.Physical.size(450,600);

  this.Chemical = createButton('Chemical');
  this.Chemical.position(1175,250);
  this.Chemical.size(450,600);

    this.Physical.mousePressed(()=>{
      this.WhichSunscreen.hide();
      this.Physical.hide();
      this.Chemical.hide();

      this.OxybenzoneFree = createButton('Which Object will you use?');
      this.OxybenzoneFree.position(700,50);
      this.OxybenzoneFree.size(300,50);

      this.Yes = createButton('Hat');
      this.Yes.position(50,150);
      this.Yes.size(250,300);

      this.No = createButton('Hat (With Sunscreen)');
      this.No.position(500,150);
      this.No.size(250,300);

      this.Sunglasses = createButton('Sunglasses');
      this.Sunglasses.position(950,150);
      this.Sunglasses.size(250,300);

      this.SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
      this.SunglassesSunscreen.position(1400,150);
      this.SunglassesSunscreen.size(250,300);

      this.Umbrella = createButton('Umbrella');
      this.Umbrella.position(50,650);
      this.Umbrella.size(250,300);
  
      this.UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
      this.UmbrellaSunscreen.position(500,650);
      this.UmbrellaSunscreen.size(250,300);

      this.FullSleveDress = createButton('Full Sleve Dress');
      this.FullSleveDress.position(950,650);
      this.FullSleveDress.size(250,300);
  
      this.FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
      this.FullSleveDressSunscreen.position(1400,650);
      this.FullSleveDressSunscreen.size(250,300);
    })

    this.Chemical.mousePressed(()=>{
      this.WhichSunscreen.hide();
      this.Physical.hide();
      this.Chemical.hide();

      this.OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
      this.OxybenzoneFree.position(700,50);
      this.OxybenzoneFree.size(300,50);

      this.Yes = createButton('Yes');
      this.Yes.position(100,250);
      this.Yes.size(450,600);

      this.No = createButton('No');
      this.No.position(1175,250);
      this.No.size(450,600);

        this.Yes.mousePressed(()=>{
          this.OxybenzoneFree.hide();
          this.Yes.hide();
          this.No.hide();
    
          this.AmountSprays = createButton('How Many Sprays will you use??');
          this.AmountSprays.position(700,50);
          this.AmountSprays.size(300,50);
      
          this.Sprays1 = createButton('1 Spray');
          this.Sprays1.position(50,250);
          this.Sprays1.size(250,400);
      
          this.Sprays2 = createButton('2 Sprays');
          this.Sprays2.position(500,250);
          this.Sprays2.size(250,400);
    
          this.Sprays3 = createButton('3 Sprays');
          this.Sprays3.position(950,250);
          this.Sprays3.size(250,400);
      
          this.Sprays4 = createButton('4 Sprays');
          this.Sprays4.position(1400,250);
          this.Sprays4.size(250,400);
        })

        this.No.mousePressed(()=>{
          this.OxybenzoneFree.hide();
          this.Yes.hide();
          this.No.hide();
    
          this.AmountSprays = createButton('How Many Sprays will you use??');
          this.AmountSprays.position(700,50);
          this.AmountSprays.size(300,50);
      
          this.Sprays1 = createButton('1 Spray');
          this.Sprays1.position(50,250);
          this.Sprays1.size(250,400);
      
          this.Sprays2 = createButton('2 Sprays');
          this.Sprays2.position(500,250);
          this.Sprays2.size(250,400);
    
          this.Sprays3 = createButton('3 Sprays');
          this.Sprays3.position(950,250);
          this.Sprays3.size(250,400);
      
          this.Sprays4 = createButton('4 Sprays');
          this.Sprays4.position(1400,250);
          this.Sprays4.size(250,400);
        })
  })
})
})

this.GirlCharcter.mousePressed(()=>{

  num = 1;

  this.PickAvatar.hide();
  this.BoyCharcter.hide();
  this.GirlCharcter.hide();

  this.Location = createButton('Pick a Location!');
  this.Location.position(700,50);
  this.Location.size(300,50);

  this.Beach = createButton('Beach');
  this.Beach.position(50,250);
  this.Beach.size(250,400);

  this.BathroomShower = createButton('Bathroom Shower');
  this.BathroomShower.position(500,250);
  this.BathroomShower.size(250,400);

  this.LakeRiver = createButton('Lake/River');
  this.LakeRiver.position(950,250);
  this.LakeRiver.size(250,400);

  this.OceanSea = createButton('Ocean/Sea');
  this.OceanSea.position(1400,250);
  this.OceanSea.size(250,400);

  this.Beach.mousePressed(()=>{
    this.Location.hide();
    this.Beach.hide();
    this.BathroomShower.hide();
    this.LakeRiver.hide();
    this.OceanSea.hide();

    this.WhichSunscreen = createButton('Which type of Sunscreen?');
    this.WhichSunscreen.position(700,50);
    this.WhichSunscreen.size(300,50);

    this.Physical = createButton('Physical');
    this.Physical.position(100,250);
    this.Physical.size(450,600);

    this.Chemical = createButton('Chemical');
    this.Chemical.position(1175,250);
    this.Chemical.size(450,600);

      this.Physical.mousePressed(()=>{
        this.WhichSunscreen.hide();
        this.Physical.hide();
        this.Chemical.hide();
  
        this.OxybenzoneFree = createButton('Which Object will you use?');
        this.OxybenzoneFree.position(700,50);
        this.OxybenzoneFree.size(300,50);
    
        this.Yes = createButton('Hat');
        this.Yes.position(50,150);
        this.Yes.size(250,300);
    
        this.No = createButton('Hat (With Sunscreen)');
        this.No.position(500,150);
        this.No.size(250,300);
  
        this.Sunglasses = createButton('Sunglasses');
        this.Sunglasses.position(950,150);
        this.Sunglasses.size(250,300);
    
        this.SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
        this.SunglassesSunscreen.position(1400,150);
        this.SunglassesSunscreen.size(250,300);

        this.Umbrella = createButton('Umbrella');
        this.Umbrella.position(50,650);
        this.Umbrella.size(250,300);
    
        this.UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
        this.UmbrellaSunscreen.position(500,650);
        this.UmbrellaSunscreen.size(250,300);
  
        this.FullSleveDress = createButton('Full Sleve Dress');
        this.FullSleveDress.position(950,650);
        this.FullSleveDress.size(250,300);
    
        this.FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
        this.FullSleveDressSunscreen.position(1400,650);
        this.FullSleveDressSunscreen.size(250,300);
      })

      this.Chemical.mousePressed(()=>{
        this.WhichSunscreen.hide();
        this.Physical.hide();
        this.Chemical.hide();
    
        this.OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
        this.OxybenzoneFree.position(700,50);
        this.OxybenzoneFree.size(300,50);
    
        this.Yes = createButton('Yes');
        this.Yes.position(100,250);
        this.Yes.size(450,600);
    
        this.No = createButton('No');
        this.No.position(1175,250);
        this.No.size(450,600);

          this.Yes.mousePressed(()=>{
            this.OxybenzoneFree.hide();
            this.Yes.hide();
            this.No.hide();
      
            this.AmountSprays = createButton('How Many Sprays will you use??');
            this.AmountSprays.position(700,50);
            this.AmountSprays.size(300,50);
        
            this.Sprays1 = createButton('1 Spray');
            this.Sprays1.position(50,250);
            this.Sprays1.size(250,400);
        
            this.Sprays2 = createButton('2 Sprays');
            this.Sprays2.position(500,250);
            this.Sprays2.size(250,400);
      
            this.Sprays3 = createButton('3 Sprays');
            this.Sprays3.position(950,250);
            this.Sprays3.size(250,400);
        
            this.Sprays4 = createButton('4 Sprays');
            this.Sprays4.position(1400,250);
            this.Sprays4.size(250,400);
          })
  
          this.No.mousePressed(()=>{
            this.OxybenzoneFree.hide();
            this.Yes.hide();
            this.No.hide();
      
            this.AmountSprays = createButton('How Many Sprays will you use??');
            this.AmountSprays.position(700,50);
            this.AmountSprays.size(300,50);
        
            this.Sprays1 = createButton('1 Spray');
            this.Sprays1.position(50,250);
            this.Sprays1.size(250,400);
        
            this.Sprays2 = createButton('2 Sprays');
            this.Sprays2.position(500,250);
            this.Sprays2.size(250,400);
      
            this.Sprays3 = createButton('3 Sprays');
            this.Sprays3.position(950,250);
            this.Sprays3.size(250,400);
        
            this.Sprays4 = createButton('4 Sprays');
            this.Sprays4.position(1400,250);
            this.Sprays4.size(250,400);
          })
    })
})

this.BathroomShower.mousePressed(()=>{
  this.Location.hide();
  this.Beach.hide();
  this.BathroomShower.hide();
  this.LakeRiver.hide();
  this.OceanSea.hide();

  this.WhichSunscreen = createButton('Which type of Sunscreen?');
  this.WhichSunscreen.position(700,50);
  this.WhichSunscreen.size(300,50);

  this.Physical = createButton('Physical');
  this.Physical.position(100,250);
  this.Physical.size(450,600);

  this.Chemical = createButton('Chemical');
  this.Chemical.position(1175,250);
  this.Chemical.size(450,600);

    this.Physical.mousePressed(()=>{
      this.WhichSunscreen.hide();
      this.Physical.hide();
      this.Chemical.hide();

      this.OxybenzoneFree = createButton('Which Object will you use?');
      this.OxybenzoneFree.position(700,50);
      this.OxybenzoneFree.size(300,50);
  
      this.Yes = createButton('Hat');
      this.Yes.position(50,150);
      this.Yes.size(250,300);
  
      this.No = createButton('Hat (With Sunscreen)');
      this.No.position(500,150);
      this.No.size(250,300);

      this.Sunglasses = createButton('Sunglasses');
      this.Sunglasses.position(950,150);
      this.Sunglasses.size(250,300);
  
      this.SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
      this.SunglassesSunscreen.position(1400,150);
      this.SunglassesSunscreen.size(250,300);

      this.Umbrella = createButton('Umbrella');
      this.Umbrella.position(50,650);
      this.Umbrella.size(250,300);
  
      this.UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
      this.UmbrellaSunscreen.position(500,650);
      this.UmbrellaSunscreen.size(250,300);

      this.FullSleveDress = createButton('Full Sleve Dress');
      this.FullSleveDress.position(950,650);
      this.FullSleveDress.size(250,300);
  
      this.FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
      this.FullSleveDressSunscreen.position(1400,650);
      this.FullSleveDressSunscreen.size(250,300);
    })

    this.Chemical.mousePressed(()=>{
      this.WhichSunscreen.hide();
      this.Physical.hide();
      this.Chemical.hide();
  
      this.OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
      this.OxybenzoneFree.position(700,50);
      this.OxybenzoneFree.size(300,50);
  
      this.Yes = createButton('Yes');
      this.Yes.position(100,250);
      this.Yes.size(450,600);
  
      this.No = createButton('No');
      this.No.position(1175,250);
      this.No.size(450,600);

        this.Yes.mousePressed(()=>{
          this.OxybenzoneFree.hide();
          this.Yes.hide();
          this.No.hide();
    
          this.AmountSprays = createButton('How Many Sprays will you use??');
          this.AmountSprays.position(700,50);
          this.AmountSprays.size(300,50);
      
          this.Sprays1 = createButton('1 Spray');
          this.Sprays1.position(50,250);
          this.Sprays1.size(250,400);
      
          this.Sprays2 = createButton('2 Sprays');
          this.Sprays2.position(500,250);
          this.Sprays2.size(250,400);
    
          this.Sprays3 = createButton('3 Sprays');
          this.Sprays3.position(950,250);
          this.Sprays3.size(250,400);
      
          this.Sprays4 = createButton('4 Sprays');
          this.Sprays4.position(1400,250);
          this.Sprays4.size(250,400);
        })

        this.No.mousePressed(()=>{
          this.OxybenzoneFree.hide();
          this.Yes.hide();
          this.No.hide();
    
          this.AmountSprays = createButton('How Many Sprays will you use??');
          this.AmountSprays.position(700,50);
          this.AmountSprays.size(300,50);
      
          this.Sprays1 = createButton('1 Spray');
          this.Sprays1.position(50,250);
          this.Sprays1.size(250,400);
      
          this.Sprays2 = createButton('2 Sprays');
          this.Sprays2.position(500,250);
          this.Sprays2.size(250,400);
    
          this.Sprays3 = createButton('3 Sprays');
          this.Sprays3.position(950,250);
          this.Sprays3.size(250,400);
      
          this.Sprays4 = createButton('4 Sprays');
          this.Sprays4.position(1400,250);
          this.Sprays4.size(250,400);
        })
  })
})

this.LakeRiver.mousePressed(()=>{
this.Location.hide();
this.Beach.hide();
this.BathroomShower.hide();
this.LakeRiver.hide();
this.OceanSea.hide();

this.WhichSunscreen = createButton('Which type of Sunscreen?');
this.WhichSunscreen.position(700,50);
this.WhichSunscreen.size(300,50);

this.Physical = createButton('Physical');
this.Physical.position(100,250);
this.Physical.size(450,600);

this.Chemical = createButton('Chemical');
this.Chemical.position(1175,250);
this.Chemical.size(450,600);

  this.Physical.mousePressed(()=>{
    this.WhichSunscreen.hide();
    this.Physical.hide();
    this.Chemical.hide();

    this.OxybenzoneFree = createButton('Which Object will you use?');
    this.OxybenzoneFree.position(700,50);
    this.OxybenzoneFree.size(300,50);

    this.Yes = createButton('Hat');
    this.Yes.position(50,150);
    this.Yes.size(250,300);

    this.No = createButton('Hat (With Sunscreen)');
    this.No.position(500,150);
    this.No.size(250,300);

    this.Sunglasses = createButton('Sunglasses');
    this.Sunglasses.position(950,150);
    this.Sunglasses.size(250,300);

    this.SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
    this.SunglassesSunscreen.position(1400,150);
    this.SunglassesSunscreen.size(250,300);

    this.Umbrella = createButton('Umbrella');
    this.Umbrella.position(50,650);
    this.Umbrella.size(250,300);

    this.UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
    this.UmbrellaSunscreen.position(500,650);
    this.UmbrellaSunscreen.size(250,300);

    this.FullSleveDress = createButton('Full Sleve Dress');
    this.FullSleveDress.position(950,650);
    this.FullSleveDress.size(250,300);

    this.FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
    this.FullSleveDressSunscreen.position(1400,650);
    this.FullSleveDressSunscreen.size(250,300);
  })

  this.Chemical.mousePressed(()=>{
    this.WhichSunscreen.hide();
    this.Physical.hide();
    this.Chemical.hide();

    this.OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
    this.OxybenzoneFree.position(700,50);
    this.OxybenzoneFree.size(300,50);

    this.Yes = createButton('Yes');
    this.Yes.position(100,250);
    this.Yes.size(450,600);

    this.No = createButton('No');
    this.No.position(1175,250);
    this.No.size(450,600);

      this.Yes.mousePressed(()=>{
        this.OxybenzoneFree.hide();
        this.Yes.hide();
        this.No.hide();
  
        this.AmountSprays = createButton('How Many Sprays will you use??');
        this.AmountSprays.position(700,50);
        this.AmountSprays.size(300,50);
    
        this.Sprays1 = createButton('1 Spray');
        this.Sprays1.position(50,250);
        this.Sprays1.size(250,400);
    
        this.Sprays2 = createButton('2 Sprays');
        this.Sprays2.position(500,250);
        this.Sprays2.size(250,400);
  
        this.Sprays3 = createButton('3 Sprays');
        this.Sprays3.position(950,250);
        this.Sprays3.size(250,400);
    
        this.Sprays4 = createButton('4 Sprays');
        this.Sprays4.position(1400,250);
        this.Sprays4.size(250,400);
      })

      this.No.mousePressed(()=>{
        this.OxybenzoneFree.hide();
        this.Yes.hide();
        this.No.hide();
  
        this.AmountSprays = createButton('How Many Sprays will you use??');
        this.AmountSprays.position(700,50);
        this.AmountSprays.size(300,50);
    
        this.Sprays1 = createButton('1 Spray');
        this.Sprays1.position(50,250);
        this.Sprays1.size(250,400);
    
        this.Sprays2 = createButton('2 Sprays');
        this.Sprays2.position(500,250);
        this.Sprays2.size(250,400);
  
        this.Sprays3 = createButton('3 Sprays');
        this.Sprays3.position(950,250);
        this.Sprays3.size(250,400);
    
        this.Sprays4 = createButton('4 Sprays');
        this.Sprays4.position(1400,250);
        this.Sprays4.size(250,400);
      })
})
})

this.OceanSea.mousePressed(()=>{
this.Location.hide();
this.Beach.hide();
this.BathroomShower.hide();
this.LakeRiver.hide();
this.OceanSea.hide();

this.WhichSunscreen = createButton('Which type of Sunscreen?');
this.WhichSunscreen.position(700,50);
this.WhichSunscreen.size(300,50);

this.Physical = createButton('Physical');
this.Physical.position(100,250);
this.Physical.size(450,600);

this.Chemical = createButton('Chemical');
this.Chemical.position(1175,250);
this.Chemical.size(450,600);

this.Physical.mousePressed(()=>{
  this.WhichSunscreen.hide();
  this.Physical.hide();
  this.Chemical.hide();

  this.OxybenzoneFree = createButton('Which Object will you use?');
  this.OxybenzoneFree.position(700,50);
  this.OxybenzoneFree.size(300,50);

  this.Yes = createButton('Hat');
  this.Yes.position(50,150);
  this.Yes.size(250,300);

  this.No = createButton('Hat (With Sunscreen)');
  this.No.position(500,150);
  this.No.size(250,300);

  this.Sunglasses = createButton('Sunglasses');
  this.Sunglasses.position(950,150);
  this.Sunglasses.size(250,300);

  this.SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
  this.SunglassesSunscreen.position(1400,150);
  this.SunglassesSunscreen.size(250,300);

  this.Umbrella = createButton('Umbrella');
  this.Umbrella.position(50,650);
  this.Umbrella.size(250,300);

  this.UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
  this.UmbrellaSunscreen.position(500,650);
  this.UmbrellaSunscreen.size(250,300);

  this.FullSleveDress = createButton('Full Sleve Dress');
  this.FullSleveDress.position(950,650);
  this.FullSleveDress.size(250,300);

  this.FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
  this.FullSleveDressSunscreen.position(1400,650);
  this.FullSleveDressSunscreen.size(250,300);
})

this.Chemical.mousePressed(()=>{
  this.WhichSunscreen.hide();
  this.Physical.hide();
  this.Chemical.hide();

  this.OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
  this.OxybenzoneFree.position(700,50);
  this.OxybenzoneFree.size(300,50);

  this.Yes = createButton('Yes');
  this.Yes.position(100,250);
  this.Yes.size(450,600);

  this.No = createButton('No');
  this.No.position(1175,250);
  this.No.size(450,600);

    this.Yes.mousePressed(()=>{
      this.OxybenzoneFree.hide();
      this.Yes.hide();
      this.No.hide();

      this.AmountSprays = createButton('How Many Sprays will you use??');
      this.AmountSprays.position(700,50);
      this.AmountSprays.size(300,50);
  
      this.Sprays1 = createButton('1 Spray');
      this.Sprays1.position(50,250);
      this.Sprays1.size(250,400);
  
      this.Sprays2 = createButton('2 Sprays');
      this.Sprays2.position(500,250);
      this.Sprays2.size(250,400);

      this.Sprays3 = createButton('3 Sprays');
      this.Sprays3.position(950,250);
      this.Sprays3.size(250,400);
  
      this.Sprays4 = createButton('4 Sprays');
      this.Sprays4.position(1400,250);
      this.Sprays4.size(250,400);
    })

    this.No.mousePressed(()=>{
      this.OxybenzoneFree.hide();
      this.Yes.hide();
      this.No.hide();

      this.AmountSprays = createButton('How Many Sprays will you use??');
      this.AmountSprays.position(700,50);
      this.AmountSprays.size(300,50);
  
      this.Sprays1 = createButton('1 Spray');
      this.Sprays1.position(50,250);
      this.Sprays1.size(250,400);
  
      this.Sprays2 = createButton('2 Sprays');
      this.Sprays2.position(500,250);
      this.Sprays2.size(250,400);

      this.Sprays3 = createButton('3 Sprays');
      this.Sprays3.position(950,250);
      this.Sprays3.size(250,400);
  
      this.Sprays4 = createButton('4 Sprays');
      this.Sprays4.position(1400,250);
      this.Sprays4.size(250,400);
})
})


})

})

hide();

drawSprites();
}
