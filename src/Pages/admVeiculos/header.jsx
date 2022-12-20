import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
     <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
            <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="/admveiculos">
                <img src="https://www.verzel.com.br/static/media/logo_verzel.0335b665.svg" height="70" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger">   
                     <NavLink to="/logout">Sair</NavLink>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
     </div>
    )
}