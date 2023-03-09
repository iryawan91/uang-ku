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
          <div className="containter p-5">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="fw-bold">UANGKU APPS</h1>
                <hr className="w-75 mx-auto" />
                <h2 className="fw-bold">Rp. 1.500.000,-</h2>
                <span className="title-md">
                  {' '}
                  Sisa uang kamu tersisa 75% lagi
                </span>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-6">
                <div className="card-wraper p-4">
                  <div className="icon-wraper">
                    <i class="bi bi-wallet2"></i>
                  </div>
                  <span className="title-sm">Pemasukan</span>
                  <div>
                    <h3 className="fw-bold">Rp. 2.000.000,-</h3>
                    <span className="title-sm title-text-ungu">50</span>
                    <span className="title-sm"> Transaksi</span>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="card-wraper p-4">
                  <div className="icon-wraper">
                    <i class="bi bi-cash-stack"></i>
                  </div>
                  <span className="title-sm">Pemasukan</span>
                  <div>
                    <h3 className="fw-bold">Rp. 2.000.000,-</h3>
                    <span className="title-sm title-text-ungu">50</span>
                    <span className="title-sm"> Transaksi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h4>Ringkasan Transaksi</h4>
                <div className="wrapper-button d-flex">
                  <button className="button btn-ungu px-3 py-2 me-2">
                    Pemasukan <i class="bi bi-plus-circle-fill"></i>
                  </button>
                  <button className="button btn-merah px-3 py-2">
                    Pengeluaran <i class="bi bi-dash-circle-fill"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="d-flex  align-items-center">
                  <div className="icon-wraper ">
                    <i class="bi bi-wallet2"></i>
                  </div>

                  <div className="transaction ms-2 d-flex flex-column">
                    <h6>Menerima Gaji</h6>
                    <span className="title-sm">31 July 2021</span>
                  </div>
                </div>
                <h5 className="text-money-in">Rp.1.000.000</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
