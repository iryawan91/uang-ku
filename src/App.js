// import logo from "./logo.svg";
import './App.css';
import React from 'react';

class App extends React.Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <>
        <div>
          <div className="containter">
            <div className="row">
              <div className="col-12">
                <h1>UANGKU APPS</h1>
                <hr />
                <h4>Rp. 1.500.000,-</h4>
                <span className="title"> Sisa uang kamu tersisa 75% lagi</span>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="card-wraper">
                  <div className="icon-wraper">
                    <i class="bi bi-wallet2"></i>
                  </div>
                  <span className="title">Pemasukan</span>
                  <div>
                    <h3>Rp. 2.000.000,-</h3>
                    <span className="title title-text-ungu">50</span>
                    <span className="title"> Transaksi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h2>Ringkasan Transaksi</h2>
                <div className="wrapper-button d-flex">
                  <button>
                    Pemasukan <i class="bi bi-plus-circle-fill"></i>
                  </button>
                  <button>
                    Pengeluaran <i class="bi bi-dash-circle-fill"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="d-flex  align-items-center">
                  <div className="icon-wrapper ">
                    <i class="bi bi-wallet2"></i>
                  </div>

                  <div className="transaction ">
                    <h6>Menerima Gaji</h6>
                    <span className="title">31 July 2021</span>
                  </div>
                </div>
                <h5 className="money ">Rp.1.000.000</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
