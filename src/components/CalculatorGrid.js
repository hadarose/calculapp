import Display from "./Display";

const CalculatorGrid = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-4 py-3 border border-dark d-flex justify-content-end bg-dark text-light">
            <Display />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-1 py-2 border border-dark bg-light text-dark">
            AC
          </div>
          <div className="col-1 py-2 border border-dark bg-light text-dark" />
          <div className="col-1 py-2 border border-dark bg-light text-dark" />
          <div className="col-1 py-2 border border-dark bg-warning">&#247;</div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-1 py-2 border border-dark bg-secondary text-white">
            7
          </div>
          <div className="col-1 py-2 border border-dark bg-secondary text-white">
            8
          </div>
          <div className="col-1 py-2 border border-dark bg-secondary text-white">
            9
          </div>
          <div className="col-1 py-2 border border-dark bg-warning">&#215;</div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-1 py-2 border border-dark bg-secondary text-white">
            4
          </div>
          <div className="col-1 py-2 border border-dark bg-secondary text-white">
            5
          </div>
          <div className="col-1 py-2 border border-dark bg-secondary text-white">
            6
          </div>
          <div className="col-1 py-2 border border-dark bg-warning">-</div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-1 py-2 border border-dark bg-secondary text-white">
            1
          </div>
          <div className="col-1 py-2 border border-dark bg-secondary text-white">
            2
          </div>
          <div className="col-1 py-2 border border-dark bg-secondary text-white">
            3
          </div>
          <div className="col-1 py-2 border border-dark bg-warning">+</div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-2 py-2 border border-dark bg-secondary text-white">
            0
          </div>
          <div className="col-1 py-2 border border-dark bg-secondary text-white" />
          <div className="col-1 py-2 border border-dark bg-warning">=</div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorGrid;
