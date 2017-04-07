import { Component } from '@angular/core';

@Component({

  selector : 'appmenu',
  template : `
          <nav class="navbar navbar-inverse navbar-fixed-top">
              <div class="container">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#">API Market</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                  <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#category">Category</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#upload">Upload</a></li>
                    <li><a href="#issues">Issues</a></li>
                  </ul>
                </div><!--/.nav-collapse -->
              </div>
        </nav>
  `,
})

export class AppMenu {}
