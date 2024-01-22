export default function ContactInfo() {
  return (
    <div className="">
      <h1 className="text-center">My Info</h1>
        <div className="row justify-content-center">
            <div className="col-4">
                <div className="card m-3 p-2">
                    <div className="card-body">
                        <h5 className="card-header text-center bg-info-subtle">
                        Ricki Bobbi
                        </h5>
                        <h6 className="card-subtitle my-2 text-body-secondary">
                            Phone:
                        </h6>
                        <p className="card-text">(555) 555-5555</p>
                        <h6 className="card-subtitle my-2 text-body-secondary">
                            Email:
                        </h6>
                        <p className="card-text">rickibobbiii@gmail.com</p>
                    </div>
                </div>           
            </div>
        </div>
    </div>
  );
}