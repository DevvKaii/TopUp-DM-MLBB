import "./CardContent.css";
import ml from "./img/ml.png";
import i from "./img/i.png";

const IdServer = ({ dataUser, setDataUser }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="card-content p-4" id="IdServer">
      <div className="row">
        <div className="col ">
          <p className="fs-3 ">Mobile Legends</p>
        </div>
      </div>

      <div className="row">
        <div className="col-1 d-flex justify-content-end">
          <p className="my-1">ID</p>
        </div>
        <div className="col-4">
          <input
            type="number"
            className="input my-1"
            id="idUser"
            value={dataUser.idUser}
            onChange={handleChange}
          />
        </div>
        <div className="col-2 d-flex justify-content-end">
          <p className="my-1">Server</p>
        </div>
        <div className="col-3">
          <input
            type="number"
            className="input my-1"
            id="serverUser"
            value={dataUser.serverUser}
            onChange={handleChange}
          />
        </div>
        <div className="col-2 ">
          
        </div>
      </div>

      <div className="row">
        <div className="col ">
          <p className="fw-light pt-3" id="info">
            ដើម្បីឃើញ UserID សូមចូលទៅក្នងហ្គេម ហើយចុចរូបភាព Avatar នៅខាងឆ្វេងអេក្រង់កញ្ចក់ ហើយចុចទៅកាន់"Check ID" ពេលនោះ User ID និងបង្ហាញឲ្យឃើញ បន្ទាប់មកសូមយក User ID នោះមកបំពេញ។ ឧទាហរណ៍: User ID: 123456789, Server ID: 1234។
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdServer;
