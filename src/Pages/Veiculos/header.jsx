import React from "react";
import { NavLink } from "react-router-dom";
import { Search  } from "./styles";

const dadosStorage = localStorage.getItem('catvendascarros')
let nameUser = JSON.parse(dadosStorage)?.name
let status = "Entrar"
  if(dadosStorage){
     status = nameUser.substr(0, 1);
  }
export default function Header({ searchVeiculos }){
    return(
     <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
            <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="/">
                <img src="https://www.verzel.com.br/static/media/logo_verzel.0335b665.svg" height="70" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
               
                <li class="nav-item">
                <Search onChange={(str) => searchVeiculos(str.target.value)}
                autoCapitalize="none" />
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger">   
                     <NavLink to="/Login">{ status !== "Entrar" ? <button style={{ width: 30, backgroundColor: '#d7d7d7', color: "black", cursor: 'pointer', border: 'none'}}>{status}</button> : status}</NavLink>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
     </div>
    )
}