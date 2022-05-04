import "./App.css";
import { useMemo } from "react";

import Minter from "./Minter";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet(),
      getMathWallet(),
    ],
    []
  );

  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer")!;
    menu.classList.toggle("open-menu");
    console.log("pressed");
  }

  return (
    <div>
      <div id="mobileNavContainer" className="mobile-nav">
        <div className="mobile-nav-close-button">
          <img src="/icons/close.svg" alt="" onClick={toggleMenu} />
        </div>
        <ul>
          <li>
            <img className="mobile-nav-logo" src="/img/logo.png" alt="" />
          </li>
          <li>
            <a href="https://vanngmexico.com" onClick={toggleMenu}>
              CHOCHUE
            </a>
          </li>
          <li>
            <a href="https://vanngmexico.com" onClick={toggleMenu}>
              TREJO
            </a>
          </li>
          <li>
            <a href="https://vanngmexico.com" onClick={toggleMenu}>
              CHINI
            </a>
          </li>
          <li>
            <a href="https://vanngmexico.com" onClick={toggleMenu}>
              ANG
            </a>
          </li>
          <li>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img className="nav-social" src="/icons/twitter.svg" alt="" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer">
                <img className="nav-social" src="/icons/discord.svg" alt="" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-button" onClick={toggleMenu}>
        <img src="/icons/menu.svg" alt="" />
      </div>
      <nav>
        <div className="nav-container">
          <img className="nav-logo" src="/img/logo.png" alt="" />
          <a className="hide-800" href="/#link1">
            CHOCHUÉ
          </a>
          <a className="hide-800" href="/#link2">
            TREJO
          </a>
          <a className="hide-800" href="/#link3">
            IRMA GUADALUPE
          </a>
          <a className="hide-800" href="/#link4">
            ANG
          </a>
          <div className="social-icons hide-800">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img className="nav-social" src="/icons/twitter.svg" alt="" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              <img className="nav-social" src="/icons/discord.svg" alt="" />
            </a>
          </div>
        </div>
      </nav>
      <div className="content-wrapper">
        <header className="card" id="link1">
          <div style={{ padding: "0 24px 0 24px 0" }}>
            <h3 className="text-secondary-color">CIELITO LA MAS HERMOSA</h3>
            <h1 className="pb-3">THE GUADALUPE ANG</h1>
            <p className="text-secondary-color">
              
              
              FELIZ -3 DIAS AMOR
              
              
              
            </p>
          </div>
          <div>
            <ThemeProvider theme={theme}>
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                  <WalletDialogProvider>
                    <Minter
                      candyMachineId={candyMachineId}
                      connection={connection}
                      startDate={startDateSeed}
                      txTimeout={txTimeout}
                      rpcHost={rpcHost}
                    />
                  </WalletDialogProvider>
                </WalletProvider>
              </ConnectionProvider>
            </ThemeProvider>
          </div>
        </header>

        <div id="link2" className="container">
          
          
          
          ESTAS BIEN HERMOSA, TE AMO DEMASIADO PERRO!! 
                                   ATTE: CHOCHUE
          
                     
          
          
          

        </div>

        <div id="link3" className="container card">
          <h1 className="pb-3"> NFT'S RIVIERA MAYA</h1>
        </div>

        <div id="link4" className="container faq">
          <h1 style={{ padding: "0 0 24px 0" }}>FAQ</h1>
          <div>
            <h4>¿POR QUÉ ESTAS BIEN HERMOSA?</h4>
            <p>
              Porque te hiceron con manteca de cochi:3


            </p>

            <hr />
          </div>

          <div>
            <h4>¿POR QUÉ KRAKENSOTE TE VUELVE LOCA?</h4>
            <p>
              
              Porque te encantan sus 25 segundos de pasión
              
            </p>

            <hr />
          </div>

          <div>
            <h4>¿POR QUÉ SIGUES LEYENDO ESTAS MAMADAS?</h4>
            <p>
              
              noshe te pregunto a ti 
              
            </p>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
