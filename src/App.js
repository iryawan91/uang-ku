// import logo from "./logo.svg";
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sisaUang: 0,
      persentaseUang: 0,
      pemasukanUang: 0,
      pengeluaranUang: 0,
      transaksiIN: 0,
      transaksiOUT: 0,
      summary: [
        {
          deskripsi: 'Menerima Gaji',
          tanggal: '1 Juli 2023',
          nominal: 1500000,
          kategori: 'IN',
        },
        {
          deskripsi: 'Makan Nasi Padang',
          tanggal: '3 Juli 2023',
          nominal: 20000,
          kategori: 'OUT',
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div>
          <div className="containter p-5">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="fw-bold">UANGKU APPS</h1>
                <hr className="w-75 mx-auto" />
                <h2 className="fw-bold">Rp. {this.state.sisaUang},-</h2>
                <span className="title-md">
                  {' '}
                  Sisa uang kamu tersisa {this.state.persentaseUang}% lagi
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
                    <h3 className="fw-bold">
                      Rp. {this.state.pemasukanUang},-
                    </h3>
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
                    <h3 className="fw-bold">
                      Rp. {this.state.pengeluaranUang},-
                    </h3>
                    <span className="title-sm title-text-ungu">50</span>
                    <span className="title-sm"> Transaksi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5"></div>

            <div className="row mb-4">
              {this.state.summary.map((sum) => {
                return (
                  <div className="col-12 d-flex justify-content-between align-items-center">
                    <div className="d-flex  align-items-center">
                      <div
                        className={
                          sum.kategori === 'IN'
                            ? 'icon-wraper-in mt-2'
                            : 'icon-wraper-out mt-2'
                        }
                      >
                        <i
                          class={
                            sum.kategori === 'IN'
                              ? 'bi bi-wallet2'
                              : 'bi bi-bag-dash'
                          }
                        ></i>
                      </div>

                      <div className="transaction ms-2 d-flex flex-column">
                        <h6>{sum.deskripsi}</h6>
                        <span className="title-sm">{sum.tanggal}</span>
                      </div>
                    </div>
                    <h5
                      className={
                        sum.kategori === 'IN'
                          ? 'text-money-in'
                          : 'text-money-out'
                      }
                    >
                      Rp. {sum.nominal},-
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
