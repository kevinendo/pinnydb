import React from "react";
import { Link } from "react-router-dom";

function GlobalNav() {
  return (
    <div className="App">
 
 <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">PinnyDB</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                West
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/category/West%2020">2020</a></li>
                <li><a class="dropdown-item" href="/category/West%2019">2019</a></li>
                <li><a class="dropdown-item" href="/category/West%2018">2018</a></li>
                <li><a class="dropdown-item" href="/category/West%2017">2017</a></li>
                <li><a class="dropdown-item" href="/category/West%2016">2016</a></li>
                <li><a class="dropdown-item" href="/category/West%2015">2015</a></li>
                <li><a class="dropdown-item" href="/category/West%2014">2014</a></li>
                <li><a class="dropdown-item" href="/category/West%2013">2013</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                East
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/category/East%2020">2020</a></li>
                <li><a class="dropdown-item" href="/category/East%2019">2019</a></li>
                <li><a class="dropdown-item" href="/category/East%2018">2018</a></li>
                <li><a class="dropdown-item" href="/category/East%2017">2017</a></li>
                <li><a class="dropdown-item" href="/category/East%2016">2016</a></li>
                <li><a class="dropdown-item" href="/category/East%2015">2015</a></li>
                <li><a class="dropdown-item" href="/category/East%2014">2014</a></li>
                <li><a class="dropdown-item" href="/category/East%2013">2013</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Aus
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/category/Aus%2020">2020</a></li>
                <li><a class="dropdown-item" href="/category/Aus%2019">2019</a></li>
                <li><a class="dropdown-item" href="/category/Aus%2018">2018</a></li>
                <li><a class="dropdown-item" href="/category/Aus%2017">2017</a></li>
                <li><a class="dropdown-item" href="/category/Aus%2016">2016</a></li>
                <li><a class="dropdown-item" href="/category/Aus%2015">2015</a></li>
                <li><a class="dropdown-item" href="/category/Aus%2014">2014</a></li>
                <li><a class="dropdown-item" href="/category/Aus%2013">2013</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                South
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/category/South%2020">2020</a></li>
                <li><a class="dropdown-item" href="/category/South%2019">2019</a></li>
                <li><a class="dropdown-item" href="/category/South%2018">2018</a></li>
                <li><a class="dropdown-item" href="/category/South%2017">2017</a></li>
                <li><a class="dropdown-item" href="/category/South%2016">2016</a></li>
                <li><a class="dropdown-item" href="/category/South%2015">2015</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Unplugged
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/category/Unplugged%2020">2020</a></li>
                <li><a class="dropdown-item" href="/category/Unplugged%2019">2019</a></li>
                <li><a class="dropdown-item" href="/category/Unplugged%2018">2018</a></li>
                <li><a class="dropdown-item" href="/category/Unplugged%2017">2017</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/category/Other%2021">2021</a></li>
                <li><a class="dropdown-item" href="/category/Other%2020">2020</a></li>
                <li><a class="dropdown-item" href="/category/Other%2019">2019</a></li>
                <li><a class="dropdown-item" href="/category/Other%2018">2018</a></li>
                <li><a class="dropdown-item" href="/category/Other%2017">2017</a></li>
                <li><a class="dropdown-item" href="/category/Other%2016">2016</a></li>
                <li><a class="dropdown-item" href="/category/Other%2015">2015</a></li>
                <li><a class="dropdown-item" href="/category/Other%2014">2014</a></li>
                <li><a class="dropdown-item" href="/category/Other%2013">2013</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>



  </div>
  );
}

export default GlobalNav;
