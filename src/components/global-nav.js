import React from "react";
import Search from "../components/search";

function GlobalNav() {
  return (
    <div className="App">
 <Search/>
 <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img alt="PinnyDB" width="30" src="/pinnydb_cat.png"></img>&nbsp;&nbsp;PinnyDB</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Collections
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/type/Free">Free</a></li>
                <li><a className="dropdown-item" href="/tags/Blind Box">Blind Box</a></li>
                <li><a className="dropdown-item" href="/tags/LE">Limited Edition</a></li>
                <li><a className="dropdown-item" href="/tags/Staff">Staff</a></li>              
                <li><a className="dropdown-item" href="/tags/Kemper">Kemper</a></li>
                <li><a className="dropdown-item" href="/tags/Gabe">Gabe</a></li>
                <li><a className="dropdown-item" href="/tags/Tycho">Tycho</a></li>
                <li><a className="dropdown-item" href="/tags/Annarchy">Annarchy</a></li>
                <li><a className="dropdown-item" href="/property/Acq Inc">Acq Inc</a></li>
                <li><a className="dropdown-item" href="/property/Club PA">Club PA</a></li>
                <li><a className="dropdown-item" href="/property/Eyrewood">Eyrewood</a></li>
                <li><a className="dropdown-item" href="/company/Bill Amend">Bill Amend</a></li>
                <li><a className="dropdown-item" href="/company/Checkpoint">Checkpoint</a></li>
                <li><a className="dropdown-item" href="/company/Child's Play">Child's Play</a></li>
                <li><a className="dropdown-item" href="/company/Cookie Brigade">Cookie Brigade</a></li>
                <li><a className="dropdown-item" href="/company/Katie Rice">Katie Rice</a></li>
                <li><a className="dropdown-item" href="/company/Kris Straub">Kris Straub</a></li>
                <li><a className="dropdown-item" href="/company/Loading Ready Run">Loading Ready Run</a></li>
                <li><a className="dropdown-item" href="/company/Scott Kurtz">Scott Kurtz</a></li>
                <li><a className="dropdown-item" href="/company/Toronto Gaymers">Toronto Gaymers</a></li>
                <li><a className="dropdown-item" href="/company/Worldbuilders">Worldbuilders</a></li>
              </ul>
            </li>   
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Companies
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">                                                
                <li><a className="dropdown-item" href="/company/Annapurna">Annapurna</a></li>
                <li><a className="dropdown-item" href="/company/Asmodee">Asmodee</a></li>                
                <li><a className="dropdown-item" href="/company/The Behemoth">The Behemoth</a></li>
                <li><a className="dropdown-item" href="/company/Bethesda">Bethesda</a></li>
                <li><a className="dropdown-item" href="/company/Blizzard">Blizzard</a></li>
                <li><a className="dropdown-item" href="/company/Breaking Games">Breaking Games</a></li>
                <li><a className="dropdown-item" href="/company/Dire Wolf Digital">Dire Wolf Digital</a></li> 
                <li><a className="dropdown-item" href="/company/Double Fine">Double Fine</a></li> 
                <li><a className="dropdown-item" href="/company/Finji">Finji</a></li> 
                <li><a className="dropdown-item" href="/company/Jackbox">Jackbox</a></li>
                <li><a className="dropdown-item" href="/company/Level Up Dice">Level Up Dice</a></li> 
                <li><a className="dropdown-item" href="/company/Microsoft">Microsoft</a></li> 
                <li><a className="dropdown-item" href="/company/Nintendo">Nintendo</a></li>
                <li><a className="dropdown-item" href="/company/Oculus">Oculus</a></li> 
                <li><a className="dropdown-item" href="/company/PAX AUS Roadshow">PAX AUS Roadshow</a></li> 
                <li><a className="dropdown-item" href="/company/Samurai Punk">Samurai Punk</a></li> 
                <li><a className="dropdown-item" href="/company/Sony">Sony</a></li> 
                <li><a className="dropdown-item" href="/company/Surprise Attack">Surprise Attack</a></li>                 
                <li><a className="dropdown-item" href="/company/Twitch">Twitch</a></li>
                <li><a className="dropdown-item" href="/company/Ubisoft">Ubisoft</a></li> 
                <li><a className="dropdown-item" href="/company/Valve">Valve</a></li>
                <li><a className="dropdown-item" href="/company/Versus Evil">Versus Evil</a></li>
                <li><a className="dropdown-item" href="/company/Wizards of the Coast">Wizards of the Coast</a></li>
                <li><a className="dropdown-item" href="/company/Ysbryd">Ysbryd</a></li> 
              </ul>
            </li>    
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/tags/West" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                West
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/category/West%2021">2021</a></li>
                <li><a className="dropdown-item" href="/category/West%2020">2020</a></li>
                <li><a className="dropdown-item" href="/category/West%2019">2019</a></li>
                <li><a className="dropdown-item" href="/category/West%2018">2018</a></li>
                <li><a className="dropdown-item" href="/category/West%2017">2017</a></li>
                <li><a className="dropdown-item" href="/category/West%2016">2016</a></li>
                <li><a className="dropdown-item" href="/category/West%2015">2015</a></li>
                <li><a className="dropdown-item" href="/category/West%2014">2014</a></li>
                <li><a className="dropdown-item" href="/category/West%2013">2013</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/tags/East" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                East
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/category/East%2022">2022</a></li>
                <li><a className="dropdown-item" href="/category/East%2021">2021</a></li>
                <li><a className="dropdown-item" href="/category/East%2020">2020</a></li>
                <li><a className="dropdown-item" href="/category/East%2019">2019</a></li>
                <li><a className="dropdown-item" href="/category/East%2018">2018</a></li>
                <li><a className="dropdown-item" href="/category/East%2017">2017</a></li>
                <li><a className="dropdown-item" href="/category/East%2016">2016</a></li>
                <li><a className="dropdown-item" href="/category/East%2015">2015</a></li>
                <li><a className="dropdown-item" href="/category/East%2014">2014</a></li>
                <li><a className="dropdown-item" href="/category/East%2013">2013</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/tags/Aus" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Aus
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/category/Aus%2021">2021</a></li>
                <li><a className="dropdown-item" href="/category/Aus%2020">2020</a></li>
                <li><a className="dropdown-item" href="/category/Aus%2019">2019</a></li>
                <li><a className="dropdown-item" href="/category/Aus%2018">2018</a></li>
                <li><a className="dropdown-item" href="/category/Aus%2017">2017</a></li>
                <li><a className="dropdown-item" href="/category/Aus%2016">2016</a></li>
                <li><a className="dropdown-item" href="/category/Aus%2015">2015</a></li>
                <li><a className="dropdown-item" href="/category/Aus%2014">2014</a></li>
                <li><a className="dropdown-item" href="/category/Aus%2013">2013</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/tags/South" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                South
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/category/South%2020">2020</a></li>
                <li><a className="dropdown-item" href="/category/South%2019">2019</a></li>
                <li><a className="dropdown-item" href="/category/South%2018">2018</a></li>
                <li><a className="dropdown-item" href="/category/South%2017">2017</a></li>
                <li><a className="dropdown-item" href="/category/South%2016">2016</a></li>
                <li><a className="dropdown-item" href="/category/South%2015">2015</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/tags/Unplugged" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Unp
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/category/Unplugged%2021">2021</a></li>
                <li><a className="dropdown-item" href="/category/Unplugged%2020">2020</a></li>
                <li><a className="dropdown-item" href="/category/Unplugged%2019">2019</a></li>
                <li><a className="dropdown-item" href="/category/Unplugged%2018">2018</a></li>
                <li><a className="dropdown-item" href="/category/Unplugged%2017">2017</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PAX
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/category/PAX%2022">2022</a></li>
                <li><a className="dropdown-item" href="/category/PAX%2021">2021</a></li>
                <li><a className="dropdown-item" href="/category/PAX%2020">2020</a></li>
                <li><a className="dropdown-item" href="/category/PAX%2019">2019</a></li>
                <li><a className="dropdown-item" href="/category/PAX%2018">2018</a></li>
                <li><a className="dropdown-item" href="/category/PAX%2017">2017</a></li>
                <li><a className="dropdown-item" href="/category/PAX%2016">2016</a></li>
                <li><a className="dropdown-item" href="/category/PAX%2015">2015</a></li>
                <li><a className="dropdown-item" href="/category/PAX%2014">2014</a></li>
                <li><a className="dropdown-item" href="/category/PAX%2013">2013</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/category/Other%2022">2022</a></li>
                <li><a className="dropdown-item" href="/category/Other%2021">2021</a></li>
                <li><a className="dropdown-item" href="/category/Other%2020">2020</a></li>
                <li><a className="dropdown-item" href="/category/Other%2019">2019</a></li>
                <li><a className="dropdown-item" href="/category/Other%2018">2018</a></li>
                <li><a className="dropdown-item" href="/category/Other%2017">2017</a></li>
                <li><a className="dropdown-item" href="/category/Other%2016">2016</a></li>
                <li><a className="dropdown-item" href="/category/Other%2015">2015</a></li>
                <li><a className="dropdown-item" href="/category/Other%2014">2014</a></li>
                <li><a className="dropdown-item" href="/category/Other%2013">2013</a></li>
              </ul>
            </li>                                            
          </ul>
        </div>
      </div>
    </nav>



  </div>
  );
}

export default GlobalNav;
