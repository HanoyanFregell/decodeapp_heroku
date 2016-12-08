"use strict";

class App{
  constructor(){
    this.ExpressFeeling = [
      {
        "id":1,
        "name": "Preng",
        "description": "Hi. Crush!",
      
      },
      {
        "id":2,
        "name": "College Life",
        "description": "Makakatapos din ako! tiwala lng :D ajah! ^^ No to love just study :p",
       
      },
      {
        "id":3,
        "name": "Ngitz <3",
        "description": "Because of you I know how to love, I know how to care, and now I know how hurt to be inlove.",
      },
    ];
  }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  createDesign(){
    let name = document.getElementById('ExFeeling_name');
    let description = document.getElementById('ExFeeling_description');
  
    let ExpressFeeling = {      
      "name": name.value,
      "description": description.value,
    };


    this.ExpressFeeling.push(ExpressFeeling);
   
    name.value = description.value = ''; 
  } 

  ExFeelingDelete(key){
    let r = this.ExpressFeeling;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.ExpressFeeling.splice(i,1);
        break;
      }
    }   
    this.ExFeelingList();
  }

  ExFeelingSearchById(id){

     let r = this.ExpressFeeling;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  }
  ExFeelingSearch(name){
    let objects = [];
    let r = this.ExpressFeeling;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
        }
      }
    return objects;
    }
  }

class Component extends App{
  constructor(){
    
    super();
  }

  ExFeelingLayout(){
    let html = `

  <div class="carousel carousel-slider center" data-indicators="true">
    <div class="carousel-item" href="#one!"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkFAsiC_S71G_n_9KvPFnVDThLso-wHex6_dNubbCgT2FfFhOXkw"></div>
    <div class="carousel-item" href="#two!"><img src="data:image/jpeg;base64,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"></div>
    <div class="carousel-item" href="#four!"><img src="http://4.bp.blogspot.com/_vK-9x2AozNw/TNH-JGhfLfI/AAAAAAAABqQ/xGyutmCFoNA/s1600/tears-can-express.jpg"></div>

  </div>

<br>

  <nav>
    <div class="nav-wrapper deep-purple accent-1">
      <a class="brand-logo"><i class="material-icons">perm_identity</i> ExYoFeHe </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">

        <li><a href="#" onclick="component.homepage()"><i class="material-icons left">dialpad</i>Homepage</a></li>
        <li><a href="#" onclick="component.ExFeelingList()"><i class="material-icons left">list</i>List Express Feeling </a></li>
        </ul>
    </div>
  </nav>

        <div id="ExFeelingHome"></div>
        <div id="ExFeelingRecent"></div>
        <div id="homepage"></div>
        <div id="ViewExFeeling"></div>
        <div id="ExFeelingList"></div>
        <div id="createExFeeling"></div>
        
      <footer class="page-footer deep-purple accent-1">
        <div class="container">
          <div class="row">
            
            <div class="col 16 s12">
              <h5 class="white-text center-align"> ExYoFeHe </h5>
              <p class="grey-text text-lighten-4">Shout Out Your Feelings ;)</p>
            </div>

              <div class="col l4 offset-l2 s12 ">
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"onclick="component.homepage()">Home</li>
                  <li><a class="grey-text text-lighten-3" href="#!"onclick="component.ExFeelingList()">List Express Feelings</a></li>
                </ul>
              </div>

          </div>
             
             @BabyFril14 
        </div>
    
          <div class="footer-copyright">
             <ul> ©FrilTumz2016</ul>
          </div>

      </footer>

    `;

    this.reRender(`
      
      ${html}
      
                  `,document.getElementById("app"));
    this.ExFeelingRecent();    
  }

  ExFeelingRecent(){
    
    let html = `

    
        <div class="row">
          
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="http://4.bp.blogspot.com/-pas82yy5suA/U5XIwU9817I/AAAAAAAAIJA/qvZ98m0_cXU/s1600/heart-smiley.png">
              </div>
                <div class="card-content center-align">
                  <p>"ExYoFeHe"</p>
                  <p>Which means EXPRESS YOUR FEELINGS HERE. This kind of App is created by April Jane Tumala, suggested by Kevin Manliguez.</p>            
                </div>
            </div>
          </div>

          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="http://theresurrectionofhumptydumpty.com/wp-content/uploads/2011/01/sunflowers.jpg">
              </div>
                <div class="card-content center-align">
                  <p>You can express your feelings Here. But, no one knows who you are.</p>
                </div>
                  <div class="card-action">
                    <h5><a href="#" onclick="component.createExFeeling()"> Post Now !</a></h5>
                  </div>
            </div>
          </div>

          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="https://s-media-cache-ak0.pinimg.com/564x/4f/7d/20/4f7d20186cda70329fd299b16524104a.jpg">
              </div>
                  <div class="card-content center-align">
                    <p>It look like a crazy and annoying App but it will help other people. By expressing their feelings, if they can't say it to the one they love or hate. But, its not all about love. You can express anything.</p>
                  </div>
            </div>
          </div>

          `;

    let r = this.ExpressFeeling;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 2)break;
        html+= `
      
        <div class="row">
            
          <div class="col s12 m6">
            <div class="card pink accent-12">
              <div class="row">
                <div class="card-content white-text">
                  <span class="card-title">${r[i].name}</span>
                  <p>${r[i].description}</p>
                </div>
                  <div class="card-action">
                    <a href="#" onclick="component.ViewExFeeling(${r[i].id})"><i class="material-icons center">assignment</i> Details</a>
                  </div>
              </div>
            </div>
          </div>

               `;
  }

      html += `</div>`;

      this.render(`   
      
        ${html}
      
      `,document.getElementById("ExFeelingRecent"));
  
  }

    ViewExFeeling(id){
      
    let r = this.ExFeelingSearchById(id);
    let html = `

      <div class="row">       
        <div class="col s12 m6">
          <h5 class="center-align">${r.name}</h5>
            <div class="card horizontal small center-align">
              <p>${r.description}</p>
            </div>
              <div class="card-action small">               
                <span onclick="component.ExFeelingDelete(${r.id})" class="new badge small red" data-badge-caption="">Delete Base</span>
                <span onclick="component.ExFeelingList()" class="new badge small" data-badge-caption="">Back to List</span>
              </div>            
        </div>     
      </div>    
        
               `;

      this.reRender(`   
      
        ${html}     

      `,document.getElementById("ViewExFeeling"));
    
    $('#ViewExFeeling').show();
    $('#ExFeelingRecent').hide();
    $('#ExFeelingList').hide();
    $('#createExFeeling').hide();
    $('#ExFeelingHome').hide();
    $('#homepage').hide();      
  }

    ExFeelingList(){
    
      let html = `
        
        </br>
          <nav>
            <div class="nav-wrapper white">
              <form>
                <div class="input-field">       
                  <input onkeyup="component.ExFeelingInventory(this.value)" id="search" type="search" placeholder="Search" required>
                    <label for="search"><i class="material-icons">search</i></label>
                      <i class="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
        </br>



                `;

      html += `
      
        <div class="row" id="ExFeelingInventory">
      
              `;
    
      let r = this.ExpressFeeling;
      for(let i=0;i<r.length;i++){
      html+= `
        
        <div class="row">
          
          <div class="col s12 m6">
            <div class="card pink accent-12">
              <div class="row">
                <div class="card-content white-text">
                  <span class="card-title">${r[i].name}</span>
                  <p class="center-align">${r[i].description}</p>
                </div>
                  <div class="card-action">
                    <a href="#" onclick="component.ViewExFeeling(${r[i].id})"><i class="material-icons center">assignment</i> Details</a>
                  </div>
              </div>
            </div>
          </div>
                
            `;
  }

    html += `</div>`;


    this.reRender(`
      
      ${html}
      
      `,document.getElementById("ExFeelingList"));
    
    $('#ExFeelingList').show();
    $('#ViewExFeeling').hide();
    $('#ExFeelingRecent').hide();
    $('#createExFeeling').hide();       
    $('#ExFeelingHome').hide();
      $('#homepage').hide();      
  
  }

    ExFeelingInventory(name){
      
      let html = ``;
      let r = this.ExFeelingSearch(name);
      for(let i=0;i<r.length;i++){
        html+= `
          
          <div class="col s12 m4">
            <div class="card small hoverable">
              <span class="card-title">${r[i].name}</span>
                <div class="card-content center-align">
                  <p>${r[i].description}</p>
                </div>
                  <div class="card-action">
                    <a href="#" onclick="component.ViewExFeeling(${r[i].id})">More</a>
                  </div>
            </div>
          </div>
                
                `;
  
  }   
    
    this.reRender(`
    
      ${html}
    
      `,document.getElementById("ExFeelingInventory"));
    
    $('#ExFeelingList').show();
    $('#ViewExFeeling').hide();
    $('#ExFeelingRecent').hide();  
    $('#createExFeeling').hide();
    $('#ExFeelingHome').hide();   
      $('#homepage').hide();       
  
  }

    createExFeeling(){
      let html = `

        <div class="row">
          <form class="col s12">
            <h5 class="center-align">Create New Post</h5>
            <button onclick="component.createDesign()" class="btn waves-effect waves-light">Save</button>
          <div class="row">
            <div class="input-field col s6">
              <input disabled value="${this.ExpressFeeling.length+1}" id="Feeling_id" type="text" class="validate">
            </div>
          </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="ExFeeling_name" type="text" class="validate">
                <label for="ExFeeling_name">NAME</label>
              </div>
              <div class="input-field col s6">
                <input id="ExFeeling_description" type="text" class="validate">
                <label for="ExFeeling_description">DESCRIPTION</label>
              </div>
          </form>
      </div>      

   

         

    `;

    this.reRender(`
    
      ${html}
    
      `,document.getElementById("createExFeeling"));
    
    $('#createExFeeling').show();
    $('#ExFeelingList').hide();
    $('#ViewExFeeling').hide();
    $('#ExFeelingRecent').hide();  
    $('#ExFeelingHome').hide();  
        $('#homepage').hide();     
          $('#homepage').hide();       
  
  }

  homepage(){
      let html = `

     

         

    `;

    this.reRender(`
    
      ${html}
    
      `,document.getElementById("createExFeeling"));
    
    $('#createExFeeling').hide();
    $('#ExFeelingList').hide();
    $('#ViewExFeeling').hide();
    $('#ExFeelingRecent').show();  
    $('#ExFeelingHome').hide();  
        $('#homepage').hide();      
  
  }




  } 
    
    let component = new Component();
    component.ExFeelingLayout();