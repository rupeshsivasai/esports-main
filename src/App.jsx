// this is App.jsx file
import "./App.css";
import logo from "./assets/logo.jpg";
import GameCard from "./components/GameCard";
import EventCard from "./components/EventCard";


function App() {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="nav-links">
            <a href="#tan" className="nav-item">Games</a>
            <a href="#events" className="nav-item">Events</a>
            <a href="#new" className="nav-item">What’s New</a>
            <a href="#about" className="nav-item">About us</a>
          </div>
          <div className="auth-buttons">
            <button className="login">Login</button>
            <button className="signup">Signup</button>
          </div>
        </nav>
      </div>

      <div className="div2">
        <h1 style={{ textAlign: "center" }}>
          Prepare for chaos, where only the strongest survive!
        </h1>
      </div>

      <div id="tan" className="games">
        <div className="sechead">
          <h2>Popular Games</h2>
        </div>
        <div className="gamecarddiv">
        <GameCard
            imageSrc="https://i.pinimg.com/736x/5f/10/8e/5f108e8aa20570a1608335b88c883916.jpg"
            title="Clash Of Clans"
            playerCount="1.2k players registered already"
          />
          <GameCard
            imageSrc="https://i.pinimg.com/736x/34/2d/3f/342d3f1da278a1d2df477528aecd26bb.jpg"
            title="Clash Of Clans"
            playerCount="1.2k players registered already"
          />
          <GameCard
            imageSrc="https://i.pinimg.com/736x/f8/e8/ec/f8e8ecc5613c5ab4e1362539f5213413.jpg"
            title="Clash Of Clans"
            playerCount="1.2k players registered already"
          />
          <GameCard
            imageSrc="https://i.pinimg.com/736x/b5/c0/a2/b5c0a2b0d20030b90096bb1bccb69660.jpg"
            title="Clash Of Clans"
            playerCount="1.2k players registered already"
          />
        </div>
      </div>

      {/*Event Card */}

      <div id="events" className="events">
        <div className="sechead">
          {" "}
          <h2 style={{ fontSize: "6rem", padding: "6rem", color: "#ae2323" }}>
            Upcoming Events
          </h2>
        </div>
        <div className="eventchild">
          <div className="rowcard">
             <EventCard title='winter is coming! get ready' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eaque neque placeat consequuntur sapiente voluptatum minima,beatae adipisci perspiciatis aut. Earum, possimus delectus.' />
             <EventCard title='winter is coming! get ready' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eaque neque placeat consequuntur sapiente voluptatum minima,beatae adipisci perspiciatis aut. Earum, possimus delectus.' />
          </div>
          <div className="rowcard">
            <EventCard title='winter is coming! get ready' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eaque neque placeat consequuntur sapiente voluptatum minima,beatae adipisci perspiciatis aut. Earum, possimus delectus.' />
           <EventCard title='winter is coming! get ready' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eaque neque placeat consequuntur sapiente voluptatum minima,beatae adipisci perspiciatis aut. Earum, possimus delectus.' />
          </div>
          
        </div>
      </div>

      <div id="new" className="newlaunches">
        <div>
          <h2>Whats new in the market?</h2>
        </div>
        <div
          className="launchchild"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "1.7rem" }}>
              {" "}
              Fortnite continues to evolve with new updates, introducing fresh
              content like skins, weapons, and limited-time modes. The
              collaboration with popular franchises like Marvel, Star Wars, and
              DC Comics brings exclusive crossovers. Recently, The game has also
              enhanced its battle royale mechanics, offering new strategies and
              competitive opportunities. Frequent balance changes keep the
              gameplay fresh.
            </p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/1c/63/f1/1c63f1c72faf6d6441584f053a303dc0.jpg"
              alt=""
            />
          </div>
        </div>

        <div
          className="launchchild"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="https://i.pinimg.com/736x/1b/86/2d/1b862d96ce8d92e4fe50c61b6e4a2ca6.jpg"
              alt=""
            />
          </div>
          <div>
            <p style={{ fontSize: "1.7rem" }}>
              {" "}
              Sanhok is a fast-paced, action-packed map in PUBG, known for its
              smaller size and intense gameplay. The map is set in a tropical
              environment, featuring dense jungles, and villages, making for a
              dynamic battlefield. With a size of just 4x4 km, matches tend to
              be quicker, forcing players to engage rapidly. Its compact layout
              means players must adapt quickly. Sanhok also introduces *hot
              zones*, which are areas with higher loot chances but increased
              danger.
            </p>
          </div>
        </div>

        <div
          className="launchchild"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "1.7rem" }}>
              {" "}
              The Fortnite’s latest updates have introduced new weapons like the
              "Kinetic Blade" and exciting seasonal content with more exiting
              gun skins, including exclusive skins. The Zero Build mode remains
              popular, offering a fresh, pure combat experience. Epic Games also
              continues to enhance cross-platform play and dynamic map changes.
              Regular updates ensure smooth gameplay with bug fixes and
              quality-of-life improvements.
            </p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/cc/d8/a4/ccd8a4d39ec24129a3a5c73027e6c5ca.jpg"
              alt=""
            />
          </div> 
        </div>

        <div
          className="launchchild"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="https://i.pinimg.com/736x/38/27/c2/3827c255faa1e487233aaa41f4f36c6f.jpg"
              alt=""
            />
          </div>
          <div>
            <p style={{ fontSize: "1.7rem" }}>
              {" "}
              PUBG: New State continues to innovate with futuristic gameplay and
              advanced graphics. Set in 2051, the game introduces new weapons,
              vehicles, and tech like drones and shield devices. Its open-world
              maps offer dynamic weather and environmental effects, adding depth
              to each match. Regular updates bring new content, including modes,
              skins, and optimizations for a smoother mobile experience.New
              State also features enhanced customization options for both
              weapons and characters,
            </p>
          </div>
        </div>
      </div>
      <div id="about" className="aboutus">
        <div>
          <h2 style={{ textAlign: "center" }}>About Us</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
          consequatur. Ab voluptates illum unde sint consectetur commodi, atque
          minus, voluptatem voluptate ratione eligendi a nihil! Voluptatum eum
          libero deserunt nostrum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident numquam impedit reprehenderit quos odit
          officiis sit corporis reiciendis debitis quaerat itaque cum, velit
          quasi rerum mollitia. Quasi nobis mollitia ea? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Harum corrupti asperiores eligendi
          dolor natus quisquam, necessitatibus repellendus delectus rem nulla
          corporis non nostrum ut deserunt minus ipsam impedit, neque ipsa!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex tenetur
          nemo, nobis, sed adipisci nihil eos, alias voluptate quos expedita
          odit sunt dicta necessitatibus aperiam magni corrupti iure assumenda.
        </div>

        <div>
          <div className="footer">
            <div>
              {" "}
              <b>Contact Us:</b>
            </div>
            <div className="footchild">
              <ion-icon name="logo-facebook"></ion-icon> <b>Facebook</b>
            </div>
            <div className="footchild">
              {" "}
              <ion-icon name="logo-instagram"></ion-icon>
              <b>Instagram</b>
            </div>
            <div className="footchild">
              {" "}
              <ion-icon name="logo-twitter"></ion-icon> <b>Twitter</b>
            </div>
            <div className="footchild">
              <ion-icon name="logo-youtube"></ion-icon>
              <b>Youtube</b>
            </div>
            <div className="footchild">
              <ion-icon name="logo-whatsapp"></ion-icon> <b>whatsapp</b>
            </div>
            <div className="footchild">
              <ion-icon name="mail-outline"></ion-icon> <b>Email</b>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          color: "black",
          textAlign: "center",
        }}
      >
        © 2025 Esports-T1 World | All rights reserved.
      </div>
    </>
  );
}

export default App;
